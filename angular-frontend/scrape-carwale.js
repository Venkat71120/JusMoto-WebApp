const https = require('https');
const http = require('http');
const fs = require('fs');

// All brands: current (from /api/filters) + discontinued brands found on CarWale
const brands = [
  // ── Current brands (36) ──
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
  { makeName: 'Tesla', maskingName: 'tesla' },
  { makeName: 'Aston Martin', maskingName: 'astonmartin' },
  { makeName: 'McLaren', maskingName: 'mclaren' },
  { makeName: 'Bentley', maskingName: 'bentley' },
  { makeName: 'Lotus', maskingName: 'lotus' },
  // ── Discontinued / legacy brands ──
  { makeName: 'Ford', maskingName: 'ford' },
  { makeName: 'Chevrolet', maskingName: 'chevrolet' },
  { makeName: 'Fiat', maskingName: 'fiat' },
  { makeName: 'Datsun', maskingName: 'datsun' },
  { makeName: 'Hindustan Motors', maskingName: 'hindustanmotors' },
  { makeName: 'Premier', maskingName: 'premier' },
  { makeName: 'Daewoo', maskingName: 'daewoo' },
  { makeName: 'Opel', maskingName: 'opel' },
  { makeName: 'Ssangyong', maskingName: 'ssangyong' },
  { makeName: 'Dodge', maskingName: 'dodge' },
  { makeName: 'Cadillac', maskingName: 'cadillac' },
  { makeName: 'Mitsubishi', maskingName: 'mitsubishi' },
  { makeName: 'Bugatti', maskingName: 'bugatti' },
  { makeName: 'Pagani', maskingName: 'pagani' },
  { makeName: 'DC', maskingName: 'dc' },
  { makeName: 'Caterham', maskingName: 'caterham' },
  { makeName: 'Hummer', maskingName: 'hummer' },
  { makeName: 'Chrysler', maskingName: 'chrysler' },
  { makeName: 'Alfa Romeo', maskingName: 'alfaromeo' },
  { makeName: 'Peugeot', maskingName: 'peugeot' },
  { makeName: 'Lancia', maskingName: 'lancia' },
  { makeName: 'Koenigsegg', maskingName: 'koenigsegg' },
  { makeName: 'Morgan', maskingName: 'morgan' },
  { makeName: 'Smart', maskingName: 'smart' },
  { makeName: 'Genesis', maskingName: 'genesis' },
  { makeName: 'Maybach', maskingName: 'maybach' },
  { makeName: 'Lincoln', maskingName: 'lincoln' },
  { makeName: 'Acura', maskingName: 'acura' },
  { makeName: 'Infiniti', maskingName: 'infiniti' },
  { makeName: 'Subaru', maskingName: 'subaru' },
  { makeName: 'Mazda', maskingName: 'mazda' },
  { makeName: 'GMC', maskingName: 'gmc' },
  { makeName: 'Pontiac', maskingName: 'pontiac' },
  { makeName: 'SAAB', maskingName: 'saab' },
  { makeName: 'Willys', maskingName: 'willys' },
  { makeName: 'Holden', maskingName: 'holden' },
  { makeName: 'Austin', maskingName: 'austin' },
  { makeName: 'Morris', maskingName: 'morris' },
  { makeName: 'Humber', maskingName: 'humber' },
  { makeName: 'Studebaker', maskingName: 'studebaker' },
];

// Fuel type ID mapping from CarWale /api/filters
const fuelTypeMap = {
  1: 'Petrol',
  2: 'Diesel',
  3: 'CNG',
  5: 'Electric',
  6: 'Hybrid',
};

// Fully electric brands
const electricBrands = ['byd', 'vinfast', 'tesla', 'smart'];

// EV keyword patterns for fallback detection
const evKeywords = ['electric', 'ioniq', 'e-vitara', 'e vitara', 'nexon ev', 'tiago ev', 'tigor ev',
  'curvv ev', 'punch ev', 'safari ev', 'harrier ev', 'sierra ev', 'altroz ev', 'avinya',
  'creta electric', 'atto', 'seal', 'e6', 'zs ev', 'comet ev', 'windsor ev',
  'cloud ev', 'id.4', 'id.7', 'taycan', 'i4', 'i5', 'i7', 'ix', 'ix1', 'isetta',
  'eqa', 'eqb', 'eqc', 'eqe', 'eqs', 'ev6', 'ev9', 'eletre', 'emeya',
  'model s', 'model 3', 'model x', 'model y', 'cybertruck', 'leaf'];

// Regex to match "EV" as whole word (not part of "evoque" etc.)
const evWordRegex = /\bev\b/i;

// Hybrid keyword patterns
const hybridKeywords = ['hybrid', 'phev', 'plug-in'];

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error: ${e.message}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('Timeout')); });
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

// Extract year from launchedOn/discontinuedOn date string like "11/11/2024" or "01/16/2024 00:00:00"
function extractYear(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('/');
  if (parts.length >= 3) {
    const yearPart = parts[2].split(' ')[0];
    const year = parseInt(yearPart, 10);
    if (year >= 1900 && year <= 2030) return String(year);
  }
  return '';
}

// Get fuel type: API fuelTypeId > isElectricVehicle > keyword matching > default Petrol
function getFuelType(model, brandMasking) {
  // 1. Use API fuelTypeId if available and valid
  if (model.fuelTypeId && fuelTypeMap[model.fuelTypeId]) {
    return fuelTypeMap[model.fuelTypeId];
  }
  // 2. Check isElectricVehicle flag
  if (model.isElectricVehicle) return 'Electric';

  const name = (model.modelName || model.name || '').toLowerCase();

  // 3. Full electric brands
  if (electricBrands.includes(brandMasking)) return 'Electric';
  // 4. Check for standalone "EV" word (not "evoque" etc.)
  if (evWordRegex.test(name)) return 'Electric';
  // 5. EV keywords
  for (const kw of evKeywords) {
    if (name.includes(kw)) return 'Electric';
  }
  // 6. Hybrid keywords
  for (const kw of hybridKeywords) {
    if (name.includes(kw)) return 'Hybrid';
  }
  // 7. CNG
  if (name.includes('cng')) return 'CNG';
  // 8. Diesel keywords
  if (name.includes('diesel') || name.includes('crdi') || name.includes('tdci') || name.includes('d4d')) return 'Diesel';

  return 'Petrol';
}

function processModel(model, brand, seen, rows) {
  const modelName = model.modelName || model.name || '';
  if (!modelName) return false;

  // Use makeName from API if available (e.g. Datsun under Nissan)
  const makeName = model.makeName || brand.makeName;

  // Deduplicate by brand + model name + status (so active & discontinued with same name both kept)
  const statusKey = model.status || 0;
  const dedupeKey = `${makeName}|${modelName}|${statusKey}`.toLowerCase();
  if (seen.has(dedupeKey)) return false;
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
  if (imageUrl) imageUrl = imageUrl.split('?')[0];

  const fuelType = getFuelType(model, brand.maskingName);

  // Extract model year: prefer launchedOn, fallback to discontinuedOn
  let modelYear = extractYear(model.launchedOn);
  if (!modelYear) modelYear = extractYear(model.discontinuedOn);

  // Determine status label
  let statusLabel = 'Active';
  if (model.status === 1) statusLabel = 'Upcoming';
  else if (model.status === 3) statusLabel = 'Discontinued';
  else if (model.status === 2) statusLabel = 'Active';

  rows.push({
    Make: makeName,
    Model: modelName,
    Model_Year: modelYear,
    Status: statusLabel,
    Variant: '-',
    Fuel_Type: fuelType,
    Displacement: '',
    Cylinders: '',
    Image_url: imageUrl
  });
  return true;
}

async function main() {
  const rows = [];
  const seen = new Set();
  let totalModels = 0;
  let duplicates = 0;
  let skippedBrands = 0;

  console.log(`Starting CarWale scrape for ${brands.length} brands (including discontinued)...\n`);

  for (const brand of brands) {
    const url = `https://www.carwale.com/api/makepagedata/?platformid=1&city=-1&areaid=-1&maskingName=${brand.maskingName}`;
    try {
      console.log(`Fetching ${brand.makeName}...`);
      const data = await fetchJSON(url);

      let brandCount = 0;
      const prevSize = seen.size;

      // 1. Collect from "models" array (status 1=upcoming, 2=active)
      let models = data.models || [];
      if (models.length === 0) {
        // Fallback: search for any array with modelName objects
        for (const key of Object.keys(data)) {
          if (Array.isArray(data[key]) && data[key].length > 0 && data[key][0] && data[key][0].modelName) {
            models.push(...data[key]);
          }
        }
      }
      for (const model of models) {
        if (processModel(model, brand, seen, rows)) brandCount++;
      }

      // 2. Collect from "discontinuedModels" array (status 3)
      const discModels = data.discontinuedModels || [];
      for (const model of discModels) {
        if (processModel(model, brand, seen, rows)) brandCount++;
      }

      duplicates += (models.length + discModels.length) - brandCount - (seen.size - prevSize - brandCount);
      totalModels += brandCount;

      const activeCount = models.length;
      const discCount = discModels.length;
      console.log(`  -> ${brandCount} models (${activeCount} active/upcoming + ${discCount} discontinued)`);

    } catch (err) {
      console.log(`  -> SKIP: ${err.message}`);
      skippedBrands++;
    }

    await sleep(400);
  }

  // Build CSV
  const header = 'Make,Model,Model_Year,Status,Variant,Fuel_Type,Displacement,Cylinders,Image url';
  const csvLines = rows.map(r =>
    [r.Make, r.Model, r.Model_Year, r.Status, r.Variant, r.Fuel_Type, r.Displacement, r.Cylinders, r.Image_url]
      .map(escapeCSV)
      .join(',')
  );

  const csv = header + '\n' + csvLines.join('\n') + '\n';
  const outPath = __dirname + '/Book1.csv';
  fs.writeFileSync(outPath, csv, 'utf8');

  const activeCount = rows.filter(r => r.Status === 'Active').length;
  const upcomingCount = rows.filter(r => r.Status === 'Upcoming').length;
  const discCount = rows.filter(r => r.Status === 'Discontinued').length;

  console.log(`\n========================================`);
  console.log(`Done! ${totalModels} unique models from ${brands.length - skippedBrands} brands`);
  console.log(`  Active: ${activeCount}`);
  console.log(`  Upcoming: ${upcomingCount}`);
  console.log(`  Discontinued: ${discCount}`);
  console.log(`  Skipped brands (no data): ${skippedBrands}`);
  console.log(`CSV saved to Book1.csv`);
  console.log(`========================================`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
