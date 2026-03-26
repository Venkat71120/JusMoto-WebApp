const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { Brand, Car, Variant, FuelType, EngineType } = require('../models');

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';
const MEDIA_DIR = path.join(__dirname, '../../uploads/media');

// Ensure media dir exists
if (!fs.existsSync(MEDIA_DIR)) {
    fs.mkdirSync(MEDIA_DIR, { recursive: true });
}

/**
 * Normalize fuel type from CSV to DB format
 */
function normalizeFuelType(raw) {
    if (!raw || raw === '?' || raw === '-') return null;
    const val = raw.trim().toLowerCase();

    const mapping = {
        'petrol': 'Petrol',
        'diesel': 'Diesel',
        'cng': 'CNG',
        'cng + petrol': 'CNG',
        'cng+petrol': 'CNG',
        'lpg': 'LPG',
        'electric': 'Electric',
        'hybrid': 'Hybrid',
        'petrol + electric': 'Hybrid',
        'diesel + electric': 'Hybrid',
    };

    return mapping[val] || raw.trim();
}

/**
 * Extract engine type from CSV displacement + cylinders
 * e.g. "1199 cc" + "3" → "1199cc 3-Cylinder"
 */
function extractEngineType(displacement, cylinders) {
    if (!displacement && !cylinders) return null;

    let parts = [];
    if (displacement) {
        const cc = displacement.replace(/\s/g, '').trim();
        if (cc && cc !== '?' && cc !== '-') parts.push(cc);
    }
    if (cylinders) {
        const cyl = cylinders.trim();
        if (cyl && cyl !== '?' && cyl !== '-') parts.push(`${cyl}-Cylinder`);
    }

    return parts.length > 0 ? parts.join(' ') : null;
}

/**
 * Clean variant name
 */
function cleanVariantName(raw) {
    if (!raw || raw === '?' || raw === '-') return null;
    return raw.trim().replace(/\s+/g, ' ');
}

/**
 * Clean brand/make or model name
 */
function cleanName(raw) {
    if (!raw) return null;
    return raw.trim().replace(/\s+/g, ' ');
}

/**
 * Search Pexels for a car image with environment background
 * Returns the image URL or null
 */
async function searchCarImage(brand, model) {
    if (!PEXELS_API_KEY) return null;

    try {
        const query = `${brand} ${model} car India`;
        const resp = await axios.get('https://api.pexels.com/v1/search', {
            headers: { Authorization: PEXELS_API_KEY },
            params: {
                query,
                per_page: 1,
                orientation: 'landscape',
                size: 'medium'
            },
            timeout: 8000
        });

        if (resp.data?.photos?.length > 0) {
            return resp.data.photos[0].src.medium; // 350px wide, good for thumbnails
        }

        // Fallback: try just the model name + "car"
        const resp2 = await axios.get('https://api.pexels.com/v1/search', {
            headers: { Authorization: PEXELS_API_KEY },
            params: {
                query: `${model} car`,
                per_page: 1,
                orientation: 'landscape',
                size: 'medium'
            },
            timeout: 8000
        });

        if (resp2.data?.photos?.length > 0) {
            return resp2.data.photos[0].src.medium;
        }

        return null;
    } catch (error) {
        console.log(`[Image Search] Failed for "${brand} ${model}": ${error.message}`);
        return null;
    }
}

/**
 * Search Pexels for a brand logo/image
 */
async function searchBrandImage(brand) {
    if (!PEXELS_API_KEY) return null;

    try {
        const resp = await axios.get('https://api.pexels.com/v1/search', {
            headers: { Authorization: PEXELS_API_KEY },
            params: {
                query: `${brand} car brand logo`,
                per_page: 1,
                size: 'small'
            },
            timeout: 8000
        });

        if (resp.data?.photos?.length > 0) {
            return resp.data.photos[0].src.small; // small for logos
        }
        return null;
    } catch (error) {
        console.log(`[Brand Image] Failed for "${brand}": ${error.message}`);
        return null;
    }
}

/**
 * Download an image from URL and save to uploads/media/
 * Returns the saved file path relative to uploads/
 */
async function downloadImage(url, prefix) {
    if (!url) return null;

    try {
        const ext = '.jpg';
        const filename = `${prefix}_${Date.now()}${ext}`;
        const filePath = path.join(MEDIA_DIR, filename);

        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream',
            timeout: 15000
        });

        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        return `uploads/media/${filename}`;
    } catch (error) {
        console.log(`[Download] Failed: ${error.message}`);
        return null;
    }
}

/**
 * Parse CSV file and return array of cleaned rows
 */
function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                const brand = cleanName(row['Make']);
                const model = cleanName(row['Model']);
                const variant = cleanVariantName(row['Variant']);
                const fuelType = normalizeFuelType(row['Fuel_Type']);
                const engineType = extractEngineType(row['Displacement'], row['Cylinders']);
                const imageUrl = (row['Image url'] || row['Image_url'] || '').trim();
                const brandImage = (row['Brand_Image'] || '').trim();

                if (brand && model) {
                    results.push({ brand, model, variant, fuelType, engineType, imageUrl, brandImage });
                }
            })
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

/**
 * Import parsed CSV data into DB with image fetching
 */
async function importCarsFromCSV(filePath) {
    const rows = await parseCSV(filePath);
    const totalRows = rows.length;
    const hasImageApi = !!PEXELS_API_KEY;

    const stats = {
        total: totalRows,
        processed: 0,
        brandsCreated: 0,
        brandsSkipped: 0,
        carsCreated: 0,
        carsSkipped: 0,
        variantsCreated: 0,
        variantsSkipped: 0,
        fuelTypesCreated: 0,
        engineTypesCreated: 0,
        imagesFound: 0,
        imagesFailed: 0,
        skipped: 0,
        errors: [],
        uniqueBrands: new Set(),
        uniqueCars: new Set(),
        uniqueVariants: new Set(),
    };

    // Caches to avoid repeated DB lookups
    const brandCache = {};
    const carCache = {};
    const fuelTypeCache = {};
    const engineTypeCache = {};

    for (const row of rows) {
        try {
            stats.processed++;

            // 1. Brand - findOrCreate
            let brandId;
            const brandKey = row.brand.toLowerCase();
            if (brandCache[brandKey]) {
                brandId = brandCache[brandKey];
                stats.brandsSkipped++;
            } else {
                const [brand, brandCreated] = await Brand.findOrCreate({
                    where: { name: row.brand },
                    defaults: { name: row.brand, image: row.brandImage || 0 }
                });
                brandId = brand.id;
                brandCache[brandKey] = brandId;

                if (brandCreated) {
                    stats.brandsCreated++;
                    if (row.brandImage) {
                        stats.imagesFound++;
                    } else if (hasImageApi) {
                        // Fallback to Pexels if no brand image in CSV
                        const imageUrl = await searchBrandImage(row.brand);
                        if (imageUrl) {
                            const savedPath = await downloadImage(imageUrl, `brand_${row.brand.toLowerCase().replace(/\s+/g, '_')}`);
                            if (savedPath) {
                                await brand.update({ image: savedPath });
                                stats.imagesFound++;
                            } else {
                                stats.imagesFailed++;
                            }
                        } else {
                            stats.imagesFailed++;
                        }
                    }
                } else if (!brand.image && row.brandImage) {
                    // Update existing brand with image if it was missing
                    await brand.update({ image: row.brandImage });
                    stats.imagesFound++;
                } else {
                    stats.brandsSkipped++;
                }
            }
            stats.uniqueBrands.add(brandKey);

            // 2. Car (Model) - findOrCreate by brand_id + name
            let carId;
            const carKey = `${brandId}_${row.model.toLowerCase()}`;
            if (carCache[carKey]) {
                carId = carCache[carKey];
                stats.carsSkipped++;
            } else {
                const [car, carCreated] = await Car.findOrCreate({
                    where: { brand_id: brandId, name: row.model },
                    defaults: { brand_id: brandId, name: row.model, image: row.imageUrl || '', status: 1 }
                });
                carId = car.id;
                carCache[carKey] = carId;

                if (carCreated) {
                    stats.carsCreated++;
                    if (row.imageUrl) {
                        stats.imagesFound++;
                    } else if (hasImageApi) {
                        const imageUrl = await searchCarImage(row.brand, row.model);
                        if (imageUrl) {
                            const savedPath = await downloadImage(imageUrl, `car_${row.brand.toLowerCase().replace(/\s+/g, '_')}_${row.model.toLowerCase().replace(/\s+/g, '_')}`);
                            if (savedPath) {
                                await car.update({ image: savedPath });
                                stats.imagesFound++;
                            } else {
                                stats.imagesFailed++;
                            }
                        } else {
                            stats.imagesFailed++;
                        }
                    }
                } else {
                    stats.carsSkipped++;
                }
            }
            stats.uniqueCars.add(carKey);

            // 3. Fuel Type - findOrCreate if present
            let fuelTypeId = null;
            if (row.fuelType) {
                const ftKey = row.fuelType.toLowerCase();
                if (fuelTypeCache[ftKey]) {
                    fuelTypeId = fuelTypeCache[ftKey];
                } else {
                    const [ft, ftCreated] = await FuelType.findOrCreate({
                        where: { name: row.fuelType },
                        defaults: { name: row.fuelType, image: 0 }
                    });
                    fuelTypeId = ft.id;
                    fuelTypeCache[ftKey] = fuelTypeId;
                    if (ftCreated) stats.fuelTypesCreated++;
                }
            }

            // 4. Engine Type - findOrCreate if present
            let engineTypeId = null;
            if (row.engineType) {
                const etKey = row.engineType.toLowerCase();
                if (engineTypeCache[etKey]) {
                    engineTypeId = engineTypeCache[etKey];
                } else {
                    const [et, etCreated] = await EngineType.findOrCreate({
                        where: { name: row.engineType },
                        defaults: { name: row.engineType }
                    });
                    engineTypeId = et.id;
                    engineTypeCache[etKey] = engineTypeId;
                    if (etCreated) stats.engineTypesCreated++;
                }
            }

            // 5. Variant - findOrCreate if present
            if (row.variant) {
                const variantKey = `${carId}_${row.variant.toLowerCase()}`;
                if (stats.uniqueVariants.has(variantKey)) {
                    stats.variantsSkipped++;
                } else {
                    const [variant, variantCreated] = await Variant.findOrCreate({
                        where: { car_id: carId, name: row.variant },
                        defaults: {
                            car_id: carId,
                            name: row.variant,
                            engine_type_id: engineTypeId,
                            fuel_type_id: fuelTypeId,
                            status: 1
                        }
                    });
                    stats.uniqueVariants.add(variantKey);
                    if (variantCreated) {
                        stats.variantsCreated++;
                    } else {
                        stats.variantsSkipped++;
                    }
                }
            }

        } catch (error) {
            stats.errors.push({
                row: stats.processed,
                brand: row.brand,
                model: row.model,
                error: error.message
            });
        }
    }

    return {
        total: stats.total,
        processed: stats.processed,
        brandsCreated: stats.brandsCreated,
        brandsTotal: stats.uniqueBrands.size,
        carsCreated: stats.carsCreated,
        carsTotal: stats.uniqueCars.size,
        variantsCreated: stats.variantsCreated,
        variantsSkipped: stats.variantsSkipped,
        fuelTypesCreated: stats.fuelTypesCreated,
        engineTypesCreated: stats.engineTypesCreated,
        imagesFound: stats.imagesFound,
        imagesFailed: stats.imagesFailed,
        imagesEnabled: hasImageApi,
        skipped: stats.brandsSkipped + stats.carsSkipped + stats.variantsSkipped,
        errorCount: stats.errors.length,
        errors: stats.errors.slice(0, 20)
    };
}

module.exports = {
    parseCSV,
    importCarsFromCSV,
    normalizeFuelType,
    extractEngineType,
    cleanVariantName
};
