/**
 * Second pass: remap remaining orphaned variants with fuzzy matching.
 * Also deletes truly unmappable variants (US-only cars, test data).
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

function norm(name) {
  return (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Known manual mappings: old car name -> new car name in DB
const MANUAL_MAP = {
  'Brv': 'BR-V',
  'Kona Electric': 'New Kona',
  'Montere': 'Montero',
  'Db 11': 'DB11',
  'Leaf Hatchback': 'Leaf',
  'Odyssey Minivan': 'Odyssey',
  'Lancer Sedan': 'Lancer',
  'Ghost Sedan': 'Ghost',
  'Aventador Coupe': 'Aventador',
  'Liberty SUV': 'Liberty',
  'Edge SUV': 'Edge',
  'Focus Sedan': 'Focus',
  'Charger Sedan': 'Charger',
  'Journey SUV': 'Journey',
  'Terrain SUV': 'Terrain',
  'Traverse SUV': 'Traverse',
  'Santa Fe SUV': 'Santa Fe',
  'Corolla Sedan': 'Corolla',
  'Tribute SUV': 'Tribute',
  'Diablo Coupe': 'Diablo',
};

async function main() {
  await sequelize.authenticate();
  console.log('DB connected.\n');

  // Load backup
  const backup = JSON.parse(fs.readFileSync(path.join(__dirname, 'cars_backup.json'), 'utf8'));
  const oldIdToName = {};
  backup.forEach(c => { oldIdToName[c.id] = c.name; });

  // Get current cars
  const currentCars = await sequelize.query('SELECT id, name FROM cars', { type: QueryTypes.SELECT });
  const carByNorm = {};
  const carByName = {};
  currentCars.forEach(c => {
    carByNorm[norm(c.name)] = c.id;
    carByName[c.name.toLowerCase()] = c.id;
  });

  // Get orphaned variants
  const orphans = await sequelize.query(
    'SELECT id, car_id, name FROM variants WHERE car_id NOT IN (SELECT id FROM cars)',
    { type: QueryTypes.SELECT }
  );
  console.log(`Orphaned variants to process: ${orphans.length}\n`);

  let updated = 0, deleted = 0, stillOrphaned = 0;

  // Group by old car_id
  const byOldCar = {};
  orphans.forEach(v => {
    if (!byOldCar[v.car_id]) byOldCar[v.car_id] = [];
    byOldCar[v.car_id].push(v);
  });

  for (const [oldCarId, variants] of Object.entries(byOldCar)) {
    const oldName = oldIdToName[oldCarId] || '';
    let newCarId = null;

    // 1. Check manual map
    if (MANUAL_MAP[oldName]) {
      const mapped = MANUAL_MAP[oldName];
      newCarId = carByName[mapped.toLowerCase()] || carByNorm[norm(mapped)];
    }

    // 2. Try stripping suffixes like "Sedan", "SUV", "Hatchback" etc
    if (!newCarId) {
      const stripped = oldName.replace(/\s+(Sedan|SUV|Hatchback|Coupe|Convertible|Minivan|Van|Cab|Pickup|Hybrid|Wagon|Crew Cab|Extended Cab|Regular Cab|SuperCab|Quad Cab|EL|SS|GS|IPL|SRT-8|Abarth)$/i, '').trim();
      newCarId = carByNorm[norm(stripped)];

      // Also try just the first word if it's a known model
      if (!newCarId) {
        const parts = stripped.split(' ');
        if (parts.length > 1) {
          newCarId = carByNorm[norm(parts[0])] || carByNorm[norm(parts.slice(0, 2).join(' '))];
        }
      }
    }

    // 3. Fuzzy: find a car whose normalized name is contained in or contains old name
    if (!newCarId) {
      const oldNorm = norm(oldName);
      for (const [cNorm, cId] of Object.entries(carByNorm)) {
        if (cNorm.length >= 3 && (oldNorm.includes(cNorm) || cNorm.includes(oldNorm))) {
          newCarId = cId;
          break;
        }
      }
    }

    if (newCarId) {
      for (const v of variants) {
        await sequelize.query('UPDATE variants SET car_id = ? WHERE id = ?', { replacements: [newCarId, v.id] });
        updated++;
      }
      console.log(`[MAPPED] "${oldName}" (${variants.length} variants) -> car_id ${newCarId}`);
    } else if (!oldName || oldName === 'ddd') {
      // Delete test/junk data
      for (const v of variants) {
        await sequelize.query('DELETE FROM variants WHERE id = ?', { replacements: [v.id] });
        deleted++;
      }
      console.log(`[DELETE] "${oldName || 'UNKNOWN'}" (${variants.length} variants) - junk/test data`);
    } else {
      stillOrphaned += variants.length;
      console.log(`[SKIP]  "${oldName}" (${variants.length} variants) - no match in new cars`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Updated: ${updated}`);
  console.log(`Deleted (junk): ${deleted}`);
  console.log(`Still orphaned: ${stillOrphaned}`);
  console.log(`========================================`);

  // Final verification
  const remaining = await sequelize.query(
    'SELECT COUNT(*) as c FROM variants WHERE car_id NOT IN (SELECT id FROM cars)',
    { type: QueryTypes.SELECT }
  );
  console.log(`\nFinal orphan count: ${remaining[0].c}`);

  await sequelize.close();
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
