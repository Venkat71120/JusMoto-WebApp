const https = require('https');
const http = require('http');
const fs = require('fs');

// All brands from CarWale /api/filters
const brands = [
  { makeName: 'Maruti Suzuki', maskingName: 'marutisuzuki' },
  { makeName: 'Tata', maskingName: 'tata' },
  { makeName: 'Mahindra', maskingName: 'mahindra' },
  { makeName: 'Hyundai', maskingName: 'hyundai' },
  { makeName: 'Toyota', maskingName: 'toyota' },
  { makeName: 'Kia', maskingName: 'kia' },
  { makeName: 'Skoda', maskingName: 'skoda' },
  { makeName: 'BMW', maskingName: 'bmw' },
  { makeName: 'Nissan', maskingName: 'nissan' },
  { makeName: 'Renault', maskingName: 'renault' },
  { makeName: 'Mercedes-Benz', maskingName: 'mercedes-benz' },
  { makeName: 'MG', maskingName: 'mg' },
  { makeName: 'Volkswagen', maskingName: 'volkswagen' },
  { makeName: 'Honda', maskingName: 'honda' },
  { makeName: 'Land Rover', maskingName: 'landrover' },
  { makeName: 'Citroen', maskingName: 'citroen' },
  { makeName: 'Audi', maskingName: 'audi' },
  { makeName: 'Jeep', maskingName: 'jeep' },
  { makeName: 'BYD', maskingName: 'byd' },
  { makeName: 'Vinfast', maskingName: 'vinfast' },
  { makeName: 'Porsche', maskingName: 'porsche' },
  { makeName: 'Volvo', maskingName: 'volvo' },
  { makeName: 'Lexus', maskingName: 'lexus' },
  { makeName: 'Ferrari', maskingName: 'ferrari' },
  { makeName: 'Mini', maskingName: 'mini' },
  { makeName: 'Lamborghini', maskingName: 'lamborghini' },
  { makeName: 'Force Motors', maskingName: 'forcemotors' },
  { makeName: 'Jaguar', maskingName: 'jaguar' },
  { makeName: 'Rolls-Royce', maskingName: 'rolls-royce' },
  { makeName: 'Isuzu', maskingName: 'isuzu' },
  { makeName: 'Maserati', maskingName: 'maserati' },
  { makeName: 'Aston Martin', maskingName: 'astonmartin' },
  { makeName: 'McLaren', maskingName: 'mclaren' },
  { makeName: 'Bentley', maskingName: 'bentley' },
  { makeName: 'Lotus', maskingName: 'lotus' },
];

// Fully electric brands - all their models are Electric
const electricBrands = ['byd', 'vinfast', 'tesla'];

// Known electric model keywords
const evKeywords = [' ev', 'electric', 'ioniq', 'e-vitara', 'e vitara', 'nexon ev', 'tiago ev', 'tigor ev',
  'curvv ev', 'punch ev', 'safari ev', 'harrier ev', 'sierra ev', 'altroz ev', 'avinya',
  'creta electric', 'atto', 'seal', 'eal', 'e6', 'zs ev', 'comet ev', 'windsor ev',
  'cloud ev', 'id.4', 'id.7', 'taycan', 'i4', 'i5', 'i7', 'ix', 'ix1', 'isetta',
  'eqa', 'eqb', 'eqc', 'eqe', 'eqs', 'ev6', 'ev9', 'eletre', 'emeya'];

// Known hybrid keywords
const hybridKeywords = ['hybrid', 'phev', 'plug-in'];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error: ${e.message}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error(`Timeout for ${url}`)); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function escapeCSV(val) {
  if (!val) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function guessFuelType(modelName, brandMasking) {
  const name = modelName.toLowerCase();

  // Full electric brands
  if (electricBrands.includes(brandMasking)) return 'Electric';

  // Check EV keywords
  for (const kw of evKeywords) {
    if (name.includes(kw)) return 'Electric';
  }

  // Check hybrid
  for (const kw of hybridKeywords) {
    if (name.includes(kw)) return 'Hybrid';
  }

  // CNG
  if (name.includes('cng')) return 'CNG';

  return 'Petrol';
}

async function main() {
  const rows = [];
  const seen = new Set(); // Track duplicates by "brand|model"
  let totalModels = 0;
  let duplicates = 0;

  console.log('Starting CarWale scrape for all Indian car brands...\n');

  for (const brand of brands) {
    const url = `https://www.carwale.com/api/makepagedata/?platformid=1&city=-1&areaid=-1&maskingName=${brand.maskingName}`;
    try {
      console.log(`Fetching ${brand.makeName}...`);
      const data = await fetch(url);

      let models = data.models || data.newModels || data.modelList || [];
      if (models.length === 0) {
        const allKeys = Object.keys(data);
        for (const key of allKeys) {
          if (Array.isArray(data[key]) && data[key].length > 0 && data[key][0].modelName) {
            models.push(...data[key]);
          }
        }
      }

      let brandModelCount = 0;
      for (const model of models) {
        const modelName = model.modelName || model.name || '';
        if (!modelName) continue;

        // Deduplicate by brand + model name
        const dedupeKey = `${brand.makeName}|${modelName}`.toLowerCase();
        if (seen.has(dedupeKey)) {
          duplicates++;
          continue;
        }
        seen.add(dedupeKey);

        // Build image URL
        let imageUrl = '';
        if (model.imagePath) {
          imageUrl = model.imagePath.startsWith('http')
            ? model.imagePath
            : `https://imgd.aeplcdn.com/664x374${model.imagePath}`;
        } else if (model.hostUrl && model.originalImgPath) {
          imageUrl = model.hostUrl + model.originalImgPath;
        }
        // Remove query params
        if (imageUrl) imageUrl = imageUrl.split('?')[0];

        const fuelType = guessFuelType(modelName, brand.maskingName);

        rows.push({
          Make: brand.makeName,
          Model: modelName,
          Variant: '-',
          Fuel_Type: fuelType,
          Displacement: '',
          Cylinders: '',
          Image_url: imageUrl
        });
        brandModelCount++;
      }

      totalModels += brandModelCount;
      console.log(`  -> ${brandModelCount} models`);
    } catch (err) {
      console.log(`  -> ERROR: ${err.message}`);
    }

    await sleep(500);
  }

  // Build CSV
  const header = 'Make,Model,Variant,Fuel_Type,Displacement,Cylinders,Image url';
  const csvLines = rows.map(r =>
    [r.Make, r.Model, r.Variant, r.Fuel_Type, r.Displacement, r.Cylinders, r.Image_url]
      .map(escapeCSV)
      .join(',')
  );

  const csv = header + '\n' + csvLines.join('\n') + '\n';
  const outPath = __dirname + '/Book1.csv';
  fs.writeFileSync(outPath, csv, 'utf8');

  console.log(`\nDone! ${totalModels} unique models from ${brands.length} brands`);
  console.log(`Duplicates removed: ${duplicates}`);
  console.log(`CSV saved to Book1.csv`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
