/**
 * Seed Script for JusMoto Database
 *
 * Seeds the database with:
 *   1. Car brands (hardcoded list of popular Indian market brands)
 *   2. Car models per brand (hardcoded)
 *   3. Indian states (from CountriesNow API)
 *   4. Indian cities per state (from CountriesNow API)
 *
 * Usage:
 *   node src/scripts/seed-data.js
 *
 * Run from the nodejs-backend directory.
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const https = require('https');
const http = require('http');
const { sequelize, State, City, Brand, Car } = require('../models');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Make an HTTP(S) request and return parsed JSON.
 * Supports both GET and POST (POST when `body` is provided).
 */
function fetchJson(url, body = null) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const transport = parsedUrl.protocol === 'https:' ? https : http;

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: body ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    if (body) {
      const payload = JSON.stringify(body);
      options.headers['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = transport.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(new Error(`Failed to parse JSON response from ${url}: ${err.message}`));
        }
      });
    });

    req.on('error', (err) => reject(err));

    // Set a generous timeout for slow APIs
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error(`Request to ${url} timed out`));
    });

    if (body) {
      req.write(JSON.stringify(body));
    }

    req.end();
  });
}

/**
 * Sleep for a given number of milliseconds.
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Data: Brands & Car Models
// ---------------------------------------------------------------------------

const brandNames = [
  'Maruti Suzuki',
  'Hyundai',
  'Tata',
  'Mahindra',
  'Kia',
  'Toyota',
  'Honda',
  'MG',
  'Skoda',
  'Volkswagen',
  'Renault',
  'Nissan',
  'Jeep',
  'Citroen',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Ford',
  'Chevrolet',
  'Fiat',
];

const carModels = {
  'Maruti Suzuki': [
    'Swift', 'Baleno', 'Dzire', 'Alto', 'WagonR', 'Brezza', 'Ertiga',
    'Celerio', 'S-Presso', 'XL6', 'Ignis', 'Ciaz', 'Grand Vitara',
    'Jimny', 'Fronx', 'Invicto',
  ],
  'Hyundai': [
    'Creta', 'Venue', 'i20', 'i10 Nios', 'Verna', 'Tucson', 'Alcazar',
    'Aura', 'Exter', 'Ioniq 5',
  ],
  'Tata': [
    'Nexon', 'Punch', 'Harrier', 'Safari', 'Altroz', 'Tiago', 'Tigor',
    'Nano', 'Curvv',
  ],
  'Mahindra': [
    'Thar', 'XUV700', 'Scorpio N', 'XUV400', 'XUV300', 'Bolero',
    'Bolero Neo', 'Marazzo', 'XUV 3XO',
  ],
  'Kia': ['Seltos', 'Sonet', 'Carens', 'EV6', 'Carnival'],
  'Toyota': [
    'Fortuner', 'Innova Crysta', 'Innova Hycross', 'Glanza',
    'Urban Cruiser Hyryder', 'Camry', 'Vellfire', 'Hilux',
  ],
  'Honda': ['City', 'Amaze', 'Elevate', 'WR-V'],
  'MG': ['Hector', 'Astor', 'ZS EV', 'Gloster', 'Comet EV'],
  'Skoda': ['Kushaq', 'Slavia', 'Superb', 'Kodiaq', 'Octavia'],
  'Volkswagen': ['Taigun', 'Virtus', 'Tiguan'],
  'Renault': ['Kwid', 'Kiger', 'Triber'],
  'Nissan': ['Magnite', 'Kicks', 'X-Trail'],
  'Jeep': ['Compass', 'Meridian', 'Wrangler', 'Grand Cherokee'],
  'Citroen': ['C3', 'C3 Aircross', 'C5 Aircross'],
  'BMW': [
    '3 Series', '5 Series', 'X1', 'X3', 'X5', 'X7', 'iX',
    '2 Series Gran Coupe',
  ],
  'Mercedes-Benz': [
    'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE',
    'A-Class Limousine', 'EQS',
  ],
  'Audi': ['A4', 'A6', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
  'Ford': ['EcoSport', 'Endeavour', 'Figo', 'Aspire', 'Freestyle'],
  'Chevrolet': ['Beat', 'Cruze', 'Spark', 'Tavera', 'Trailblazer'],
  'Fiat': ['Punto', 'Linea', 'Avventura', 'Urban Cross'],
};

// ---------------------------------------------------------------------------
// Year helpers
// ---------------------------------------------------------------------------

/**
 * Return a random year string between 2020 and 2025 (inclusive).
 */
function randomYear() {
  const min = 2020;
  const max = 2025;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

// ---------------------------------------------------------------------------
// Seed functions
// ---------------------------------------------------------------------------

async function seedBrands() {
  console.log('\n--- Seeding Brands ---');
  let created = 0;
  let skipped = 0;

  for (const name of brandNames) {
    const [, wasCreated] = await Brand.findOrCreate({
      where: { name },
      defaults: { name, image: null },
    });

    if (wasCreated) {
      created++;
      console.log(`  [+] Created brand: ${name}`);
    } else {
      skipped++;
      console.log(`  [=] Skipped (exists): ${name}`);
    }
  }

  console.log(`Brands done. Created: ${created}, Skipped: ${skipped}`);
}

async function seedCars() {
  console.log('\n--- Seeding Car Models ---');
  let created = 0;
  let skipped = 0;

  // Load all brands into a name -> id map
  const allBrands = await Brand.findAll();
  const brandMap = {};
  for (const b of allBrands) {
    brandMap[b.name] = b.id;
  }

  for (const [brandName, models] of Object.entries(carModels)) {
    const brandId = brandMap[brandName];
    if (!brandId) {
      console.log(`  [!] Brand not found in DB, skipping models for: ${brandName}`);
      continue;
    }

    for (const modelName of models) {
      const year = randomYear();

      const [, wasCreated] = await Car.findOrCreate({
        where: { name: modelName, brand_id: brandId },
        defaults: {
          brand_id: brandId,
          name: modelName,
          image: null,
          Year: year,
        },
      });

      if (wasCreated) {
        created++;
        console.log(`  [+] Created car: ${brandName} - ${modelName} (${year})`);
      } else {
        skipped++;
        console.log(`  [=] Skipped (exists): ${brandName} - ${modelName}`);
      }
    }
  }

  console.log(`Car models done. Created: ${created}, Skipped: ${skipped}`);
}

async function seedStates() {
  console.log('\n--- Seeding Indian States ---');
  let created = 0;
  let skipped = 0;

  const apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';

  console.log('  Fetching states from CountriesNow API...');
  let response;
  try {
    response = await fetchJson(apiUrl, { country: 'India' });
  } catch (err) {
    console.error('  [!] Failed to fetch states from API:', err.message);
    console.log('  Skipping state seeding.');
    return;
  }

  if (!response || !response.data || !response.data.states) {
    console.error('  [!] Unexpected API response structure. Skipping state seeding.');
    console.error('  Response:', JSON.stringify(response).substring(0, 500));
    return;
  }

  const states = response.data.states;
  console.log(`  Found ${states.length} states from API.`);

  for (const stateData of states) {
    const stateName = stateData.name;
    const stateCode = stateData.state_code || null;

    const [, wasCreated] = await State.findOrCreate({
      where: { state: stateName },
      defaults: {
        state: stateName,
        state_code: stateCode,
        status: 1,
      },
    });

    if (wasCreated) {
      created++;
      console.log(`  [+] Created state: ${stateName} (${stateCode})`);
    } else {
      skipped++;
      console.log(`  [=] Skipped (exists): ${stateName}`);
    }
  }

  console.log(`States done. Created: ${created}, Skipped: ${skipped}`);
}

async function seedCities() {
  console.log('\n--- Seeding Indian Cities ---');
  let totalCreated = 0;
  let totalSkipped = 0;

  // Load all states from DB
  const allStates = await State.findAll();
  if (allStates.length === 0) {
    console.log('  [!] No states found in the database. Seed states first.');
    return;
  }

  console.log(`  Processing cities for ${allStates.length} states...`);

  const apiUrl = 'https://countriesnow.space/api/v0.1/countries/state/cities';

  for (let i = 0; i < allStates.length; i++) {
    const stateRecord = allStates[i];
    const stateName = stateRecord.state;
    const stateId = stateRecord.id;

    console.log(`\n  [${i + 1}/${allStates.length}] Fetching cities for: ${stateName}`);

    let response;
    try {
      response = await fetchJson(apiUrl, { country: 'India', state: stateName });
    } catch (err) {
      console.error(`    [!] Failed to fetch cities for ${stateName}: ${err.message}`);
      // Add delay before continuing to next state
      await sleep(200);
      continue;
    }

    if (!response || !response.data || !Array.isArray(response.data)) {
      console.log(`    [!] No city data returned for ${stateName}. Skipping.`);
      await sleep(200);
      continue;
    }

    const cities = response.data;
    let created = 0;
    let skipped = 0;

    for (const cityName of cities) {
      if (!cityName || typeof cityName !== 'string' || cityName.trim() === '') {
        continue;
      }

      const [, wasCreated] = await City.findOrCreate({
        where: { city: cityName.trim(), state_id: stateId },
        defaults: {
          state_id: stateId,
          city: cityName.trim(),
          status: 1,
        },
      });

      if (wasCreated) {
        created++;
      } else {
        skipped++;
      }
    }

    totalCreated += created;
    totalSkipped += skipped;
    console.log(`    Cities for ${stateName}: Created ${created}, Skipped ${skipped} (Total in response: ${cities.length})`);

    // Small delay to avoid rate limiting
    await sleep(200);
  }

  console.log(`\nCities done. Total created: ${totalCreated}, Total skipped: ${totalSkipped}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  try {
    console.log('===========================================');
    console.log('  JusMoto Database Seed Script');
    console.log('===========================================');
    console.log(`  Date: ${new Date().toISOString()}`);
    console.log(`  Database: ${process.env.DB_DATABASE || 'jusmoto'}`);
    console.log(`  Host: ${process.env.DB_HOST || 'localhost'}`);
    console.log('');

    // Test DB connection
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // 1. Brands (no API dependency)
    await seedBrands();

    // 2. Car models (depends on brands)
    await seedCars();

    // 3. States (API call)
    await seedStates();

    // 4. Cities (API calls, depends on states)
    await seedCities();

    console.log('\n===========================================');
    console.log('  All data seeded successfully!');
    console.log('===========================================');

    process.exit(0);
  } catch (err) {
    console.error('\n[FATAL] Seed error:', err);
    process.exit(1);
  }
}

main();
