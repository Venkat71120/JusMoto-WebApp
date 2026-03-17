/**
 * Remap orphaned variants to new car IDs.
 *
 * Old cars (IDs 1-553) were deleted and new cars (IDs 554+) were uploaded.
 * 898 variants still reference old car_ids. This script:
 * 1. Loads cars_backup.json to get old_car_id -> car_name mapping
 * 2. Queries current cars from DB to get car_name -> new_car_id mapping
 * 3. Updates each variant's car_id to the new matching car
 *
 * Run on EC2: node remap-variants.js
 */

require('dotenv').config({ path: __dirname + '/.env' });
const { Sequelize, QueryTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(
  process.env.DB_DATABASE || process.env.DB_NAME || 'jusmoto',
  process.env.DB_USERNAME || process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    timezone: '+05:30'
  }
);

function normalize(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[\s\-_]+/g, ' ')
    .trim();
}

async function main() {
  await sequelize.authenticate();
  console.log('DB connected.\n');

  // 1. Load backup to get old car_id -> car name mapping
  const backupPath = path.join(__dirname, 'cars_backup.json');
  const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  console.log(`Backup: ${backup.length} old cars loaded`);

  // Build old_id -> name map
  const oldIdToName = {};
  for (const car of backup) {
    oldIdToName[car.id] = car.name;
  }

  // 2. Get all current cars from DB
  const currentCars = await sequelize.query(
    'SELECT id, brand_id, name FROM cars ORDER BY id',
    { type: QueryTypes.SELECT }
  );
  console.log(`Current DB: ${currentCars.length} cars`);

  // Build normalized name -> new car_id map
  // New cars from CarWale have names like "Fronx", "C-Class"
  // Old cars had names like "Maruti Suzuki Fronx", "Mercedes-Benz C-Class"
  const newNameToId = {};
  for (const car of currentCars) {
    const norm = normalize(car.name);
    newNameToId[norm] = car.id;
  }

  // Also get brands for old cars to help with matching
  const brands = await sequelize.query(
    'SELECT id, name FROM brands ORDER BY id',
    { type: QueryTypes.SELECT }
  );
  const brandIdToName = {};
  for (const b of brands) {
    brandIdToName[b.id] = b.name;
  }

  // 3. Get all orphaned variants
  const variants = await sequelize.query(
    `SELECT id, car_id, name FROM variants WHERE car_id NOT IN (SELECT id FROM cars)`,
    { type: QueryTypes.SELECT }
  );
  console.log(`Orphaned variants: ${variants.length}\n`);

  // 4. Build mapping: old_car_id -> new_car_id
  const oldToNew = {};
  const unmapped = new Set();

  for (const oldCar of backup) {
    const oldName = normalize(oldCar.name);

    // Try exact match first (old name = new name)
    if (newNameToId[oldName]) {
      oldToNew[oldCar.id] = newNameToId[oldName];
      continue;
    }

    // Old names often had "Brand Model" format, new names just "Model"
    // Try stripping the brand prefix
    const oldBrand = brandIdToName[oldCar.brand_id];
    if (oldBrand) {
      const brandNorm = normalize(oldBrand);
      let modelOnly = oldName;

      // Try removing brand name prefix
      if (modelOnly.startsWith(brandNorm + ' ')) {
        modelOnly = modelOnly.substring(brandNorm.length + 1).trim();
      }
      // Try removing brand name with hyphen (e.g. "mercedes-benz" -> "mercedes benz")
      const brandVariants = [
        brandNorm,
        brandNorm.replace(/ /g, '-'),
        brandNorm.replace(/-/g, ' '),
      ];
      for (const bv of brandVariants) {
        if (modelOnly.startsWith(bv + ' ')) {
          modelOnly = modelOnly.substring(bv.length + 1).trim();
          break;
        }
      }

      if (newNameToId[modelOnly]) {
        oldToNew[oldCar.id] = newNameToId[modelOnly];
        continue;
      }

      // Try partial match - find a new car whose name contains the old model name or vice versa
      let found = false;
      for (const [newName, newId] of Object.entries(newNameToId)) {
        if (newName === modelOnly || newName.includes(modelOnly) || modelOnly.includes(newName)) {
          oldToNew[oldCar.id] = newId;
          found = true;
          break;
        }
      }
      if (found) continue;
    }

    unmapped.add(oldCar.id);
  }

  console.log(`Car ID mapping: ${Object.keys(oldToNew).length} mapped, ${unmapped.size} unmapped\n`);

  // 5. Update variants
  let updated = 0, skipped = 0, noMapping = 0;
  const unmappedVariants = [];

  for (const variant of variants) {
    const newCarId = oldToNew[variant.car_id];
    if (newCarId) {
      await sequelize.query(
        'UPDATE variants SET car_id = ? WHERE id = ?',
        { replacements: [newCarId, variant.id] }
      );
      updated++;
    } else {
      noMapping++;
      unmappedVariants.push({
        variantId: variant.id,
        variantName: variant.name,
        oldCarId: variant.car_id,
        oldCarName: oldIdToName[variant.car_id] || 'UNKNOWN'
      });
    }
  }

  console.log(`\n========================================`);
  console.log(`Updated: ${updated} variants`);
  console.log(`No mapping found: ${noMapping} variants`);
  console.log(`========================================\n`);

  if (unmappedVariants.length > 0) {
    console.log('Unmapped variants (old car not found in new cars):');
    const grouped = {};
    for (const v of unmappedVariants) {
      const key = v.oldCarName;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(v.variantName);
    }
    for (const [carName, variants] of Object.entries(grouped)) {
      console.log(`  ${carName}: ${variants.length} variants (${variants.slice(0, 3).join(', ')}${variants.length > 3 ? '...' : ''})`);
    }
  }

  // Verify
  const remaining = await sequelize.query(
    'SELECT COUNT(*) as cnt FROM variants WHERE car_id NOT IN (SELECT id FROM cars)',
    { type: QueryTypes.SELECT }
  );
  console.log(`\nVerification: ${remaining[0].cnt} variants still orphaned`);

  await sequelize.close();
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
