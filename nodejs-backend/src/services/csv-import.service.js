const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { Op } = require('sequelize');
const { Brand, Car, Variant, FuelType, EngineType } = require('../models');

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
 * Scrape CarWale for a car image.
 * Step 1: hit the homepage to get session cookies
 * Step 2: call the suggest API (same as the searchbar autocomplete)
 * Step 3: take the first suggestion URL
 * Step 4: open that car page and extract the main image
 */
async function searchCarImageCarWale(brand, model, variant = '') {
    const variantClean = variant ? variant.replace(/[^a-zA-Z0-9\s]/g, '').trim() : '';
    const query = [brand, model, variantClean].filter(Boolean).join(' ');

    const browserHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-IN,en;q=0.9',
    };

    try {
        // Step 1: hit homepage to get session cookies
        const homeUrl = 'https://www.carwale.com/';
        console.log(`[CarWale:Home] URL: ${homeUrl}`);
        const homeResp = await axios.get(homeUrl, {
            headers: { ...browserHeaders, 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' },
            timeout: 10000
        });
        const cookies = (homeResp.headers['set-cookie'] || []).map(c => c.split(';')[0]).join('; ');
        console.log(`[CarWale:Home] Cookies: ${cookies || 'none'}`);

        // Step 2: call suggest API — same endpoint the searchbar uses for autocomplete
        const suggestUrl = `https://www.carwale.com/api/suggest/?q=${encodeURIComponent(query)}&campaignId=1&pageId=1&cityId=1`;
        console.log(`[CarWale:Suggest] Query: "${query}"`);
        console.log(`[CarWale:Suggest] URL: ${suggestUrl}`);

        const suggestResp = await axios.get(suggestUrl, {
            headers: {
                ...browserHeaders,
                'Accept': 'application/json, text/javascript, */*',
                'Referer': 'https://www.carwale.com/',
                'Cookie': cookies,
            },
            timeout: 10000
        });

        console.log(`[CarWale:Suggest] Status: ${suggestResp.status}`);
        console.log(`[CarWale:Suggest] Response:`, JSON.stringify(suggestResp.data, null, 2));

        // Extract the first suggestion URL
        const suggestions = Array.isArray(suggestResp.data)
            ? suggestResp.data
            : suggestResp.data?.data || suggestResp.data?.suggestions || suggestResp.data?.results || [];

        console.log(`[CarWale:Suggest] Total suggestions: ${suggestions.length}`);
        if (!suggestions.length) {
            console.log(`[CarWale:Suggest] No suggestions returned`);
            return null;
        }

        const first = suggestions[0];
        console.log(`[CarWale:Suggest] First suggestion:`, JSON.stringify(first, null, 2));

        // CarWale suggestions typically have a url/link/href field
        const carPath = first.url || first.link || first.href || first.pageUrl || first.carUrl || null;
        if (!carPath) {
            console.log(`[CarWale:Suggest] No URL field in first suggestion`);
            return null;
        }

        // Step 3: open the car page from the suggestion
        const carPageUrl = carPath.startsWith('http') ? carPath : `https://www.carwale.com${carPath}`;
        console.log(`[CarWale:Page] URL: ${carPageUrl}`);

        const carResp = await axios.get(carPageUrl, {
            headers: {
                ...browserHeaders,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Referer': 'https://www.carwale.com/',
                'Cookie': cookies,
            },
            timeout: 10000
        });

        const $ = cheerio.load(carResp.data);

        // Step 4: extract the main car image
        // og:image is always the hero/primary car photo on CarWale pages
        let imageUrl = $('meta[property="og:image"]').attr('content') || null;
        console.log(`[CarWale:Page] og:image: ${imageUrl || 'none'}`);

        // Fallback: first img served from CarWale's CDN
        if (!imageUrl) {
            $('img').each((_, el) => {
                const src = $(el).attr('src') || $(el).attr('data-src') || '';
                if (!imageUrl && src.includes('img.carwale.com')) {
                    imageUrl = src;
                }
            });
            if (imageUrl) console.log(`[CarWale:Page] CDN img fallback: ${imageUrl}`);
        }

        console.log(`[CarWale] ✓ "${query}" → ${imageUrl || 'null'}`);
        return imageUrl;

    } catch (error) {
        console.log(`[CarWale] Failed for "${query}": ${error.message}`);
        if (error.response) {
            console.log(`[CarWale] Status: ${error.response.status}`);
            console.log(`[CarWale] Response:`, JSON.stringify(error.response.data || '').slice(0, 500));
        }
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

                if (brand && model) {
                    results.push({ brand, model, variant, fuelType, engineType });
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
                    defaults: { name: row.brand }
                });
                brandId = brand.id;
                brandCache[brandKey] = brandId;

                if (brandCreated) {
                    stats.brandsCreated++;
                    // Fetch brand logo from CarWale and save locally
                    const logoUrl = await searchCarImageCarWale(row.brand, '', '');
                    if (logoUrl) {
                        const logoPrefix = `brand_${row.brand.toLowerCase().replace(/\s+/g, '_')}`;
                        const savedLogoPath = await downloadImage(logoUrl, logoPrefix);
                        if (savedLogoPath) {
                            await brand.update({ image: savedLogoPath });
                            stats.imagesFound++;
                        }
                    }
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
                    defaults: { brand_id: brandId, name: row.model, status: 1 }
                });
                carId = car.id;
                carCache[carKey] = carId;

                if (carCreated) {
                    stats.carsCreated++;

                    // Fetch car image from CarWale
                    const imageUrl = await searchCarImageCarWale(row.brand, row.model, row.variant);

                    const updateData = {};

                    if (imageUrl) {
                        const imgPrefix = `car_${row.brand.toLowerCase().replace(/\s+/g, '_')}_${row.model.toLowerCase().replace(/\s+/g, '_')}`;
                        const savedPath = await downloadImage(imageUrl, imgPrefix);
                        if (savedPath) {
                            updateData.image = savedPath;
                            stats.imagesFound++;
                        } else {
                            stats.imagesFailed++;
                        }
                    } else {
                        stats.imagesFailed++;
                    }


                    if (Object.keys(updateData).length > 0) {
                        await car.update(updateData);
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

            // 5. Variant - find or create (case-insensitive to avoid duplicates across imports)
            if (row.variant) {
                const variantKey = `${carId}_${row.variant.toLowerCase()}`;
                if (stats.uniqueVariants.has(variantKey)) {
                    // Already handled in this run
                    stats.variantsSkipped++;
                } else {
                    stats.uniqueVariants.add(variantKey);
                    // Case-insensitive DB check to avoid duplicates from previous imports
                    const existing = await Variant.findOne({
                        where: {
                            car_id: carId,
                            name: { [Op.like]: row.variant }
                        }
                    });
                    if (!existing) {
                        await Variant.create({
                            car_id: carId,
                            name: row.variant,
                            engine_type_id: engineTypeId,
                            fuel_type_id: fuelTypeId,
                            status: 1
                        });
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
        imagesEnabled: true, // CarWale
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
