#!/usr/bin/env node
/**
 * Seed all 196 cars from the Stanford Cars archive dataset.
 * Run: node scripts/seed-archive-cars.js
 */
const path = require('path');
const fs = require('fs');

// Bootstrap the app models
const { Brand, Car, Variant, EngineType, FuelType } = require('../src/models');

async function main() {
  const results = { engineTypes: 0, fuelTypes: 0, brands: 0, cars: 0, variants: 0, errors: [] };

  const archivePath = path.join(__dirname, '../../archive/car_data/car_data/train');
  if (!fs.existsSync(archivePath)) {
    console.error('Archive folder not found at:', archivePath);
    process.exit(1);
  }

  // Create cars image directory
  const carImgDir = path.join(__dirname, '../uploads/media/cars');
  if (!fs.existsSync(carImgDir)) fs.mkdirSync(carImgDir, { recursive: true });

  // Seed Engine Types
  const engineTypeNames = ['Inline-4', 'Inline-5', 'Inline-6', 'V6', 'V8', 'V10', 'V12', 'W12', 'W16', 'Flat-4', 'Flat-6', 'Electric Motor'];
  const engineTypeMap = {};
  for (const name of engineTypeNames) {
    const [et, created] = await EngineType.findOrCreate({ where: { name }, defaults: { name } });
    engineTypeMap[name] = et.id;
    if (created) results.engineTypes++;
  }
  console.log(`Engine types: ${results.engineTypes} created`);

  // Seed Fuel Types
  const fuelTypeData = [
    { name: 'Petrol', image: 1 }, { name: 'Diesel', image: 2 }, { name: 'Electric', image: 3 },
    { name: 'Hybrid', image: 4 }, { name: 'Plug-in Hybrid', image: 5 }
  ];
  const fuelTypeMap = {};
  for (const ft of fuelTypeData) {
    const [record, created] = await FuelType.findOrCreate({ where: { name: ft.name }, defaults: ft });
    fuelTypeMap[ft.name] = record.id;
    if (created) results.fuelTypes++;
  }
  console.log(`Fuel types: ${results.fuelTypes} created`);

  // Known brands (sorted longest-first for multi-word matching)
  const knownBrands = [
    'AM General', 'Aston Martin', 'Land Rover', 'Mercedes-Benz', 'Rolls-Royce',
    'Chevrolet', 'Chrysler', 'Lamborghini', 'Mitsubishi', 'Volkswagen',
    'Cadillac', 'Bentley', 'Bugatti', 'Ferrari', 'Hyundai', 'Infiniti',
    'Lincoln', 'Maybach', 'McLaren', 'Plymouth', 'Porsche', 'Toyota',
    'Daewoo', 'Fisker', 'HUMMER', 'Jaguar', 'Nissan', 'Spyker', 'Suzuki',
    'Acura', 'Dodge', 'Eagle', 'Honda', 'Isuzu', 'Mazda', 'Scion', 'Tesla', 'Volvo',
    'Audi', 'FIAT', 'Ford', 'Jeep', 'MINI', 'BMW', 'GMC', 'Geo', 'Ram', 'Buick',
    'smart'
  ];

  // Engine type overrides by exact directory name
  const engineOverrides = {
    'Tesla Model S Sedan 2012': 'Electric Motor', 'Nissan Leaf Hatchback 2012': 'Electric Motor',
    'Aston Martin Virage Convertible 2012': 'V12', 'Aston Martin Virage Coupe 2012': 'V12',
    'Ferrari FF Coupe 2012': 'V12',
    'Lamborghini Aventador Coupe 2012': 'V12', 'Lamborghini Diablo Coupe 2001': 'V12', 'Lamborghini Reventon Coupe 2008': 'V12',
    'Maybach Landaulet Convertible 2012': 'V12',
    'Rolls-Royce Phantom Drophead Coupe Convertible 2012': 'V12', 'Rolls-Royce Ghost Sedan 2012': 'V12', 'Rolls-Royce Phantom Sedan 2012': 'V12',
    'Bugatti Veyron 16.4 Convertible 2009': 'W16', 'Bugatti Veyron 16.4 Coupe 2009': 'W16',
    'Bentley Continental Supersports Conv. Convertible 2012': 'W12', 'Bentley Continental GT Coupe 2012': 'W12',
    'Bentley Continental GT Coupe 2007': 'W12', 'Bentley Continental Flying Spur Sedan 2007': 'W12',
    'Audi R8 Coupe 2012': 'V10', 'Audi S6 Sedan 2011': 'V10',
    'Lamborghini Gallardo LP 570-4 Superleggera 2012': 'V10',
    'Audi RS 4 Convertible 2008': 'V8', 'Audi V8 Sedan 1994': 'V8', 'Audi S4 Sedan 2007': 'V8',
    'Bentley Arnage Sedan 2009': 'V8', 'Bentley Mulsanne Sedan 2011': 'V8',
    'Buick Rainier SUV 2007': 'V8',
    'Cadillac CTS-V Sedan 2012': 'V8', 'Cadillac Escalade EXT Crew Cab 2007': 'V8',
    'Chevrolet Corvette Convertible 2012': 'V8', 'Chevrolet Corvette ZR1 2012': 'V8',
    'Chevrolet Corvette Ron Fellows Edition Z06 2007': 'V8',
    'Chevrolet Camaro Convertible 2012': 'V8', 'Chevrolet Tahoe Hybrid SUV 2012': 'V8',
    'Chevrolet Silverado 1500 Hybrid Crew Cab 2012': 'V8',
    'Chevrolet Silverado 2500HD Regular Cab 2012': 'V8',
    'Chevrolet Silverado 1500 Classic Extended Cab 2007': 'V8',
    'Chevrolet Silverado 1500 Extended Cab 2012': 'V8',
    'Chevrolet Silverado 1500 Regular Cab 2012': 'V8',
    'Chevrolet Avalanche Crew Cab 2012': 'V8', 'Chevrolet TrailBlazer SS 2009': 'V8',
    'Chevrolet Monte Carlo Coupe 2007': 'V8', 'Chevrolet Express Cargo Van 2007': 'V8',
    'Chevrolet Express Van 2007': 'V8',
    'Chrysler 300 SRT-8 2010': 'V8', 'Chrysler Aspen SUV 2009': 'V8',
    'Dodge Ram Pickup 3500 Crew Cab 2010': 'V8', 'Dodge Ram Pickup 3500 Quad Cab 2009': 'V8',
    'Dodge Challenger SRT8 2011': 'V8', 'Dodge Charger Sedan 2012': 'V8',
    'Dodge Charger SRT-8 2009': 'V8', 'Dodge Durango SUV 2012': 'V8', 'Dodge Durango SUV 2007': 'V8',
    'Dodge Magnum Wagon 2008': 'V8',
    'Ferrari California Convertible 2012': 'V8', 'Ferrari 458 Italia Convertible 2012': 'V8', 'Ferrari 458 Italia Coupe 2012': 'V8',
    'Ford F-450 Super Duty Crew Cab 2012': 'V8', 'Ford Mustang Convertible 2007': 'V8',
    'Ford Expedition EL SUV 2009': 'V8', 'Ford GT Coupe 2006': 'V8',
    'Ford F-150 Regular Cab 2012': 'V8', 'Ford F-150 Regular Cab 2007': 'V8',
    'GMC Yukon Hybrid SUV 2012': 'V8', 'GMC Savana Van 2012': 'V8',
    'HUMMER H3T Crew Cab 2010': 'V8', 'HUMMER H2 SUT Crew Cab 2009': 'V8',
    'Hyundai Genesis Sedan 2012': 'V8', 'Infiniti QX56 SUV 2011': 'V8',
    'Jaguar XK XKR 2012': 'V8',
    'Land Rover Range Rover SUV 2012': 'V8', 'Land Rover LR2 SUV 2012': 'Inline-6',
    'Lincoln Town Car Sedan 2011': 'V8',
    'Mercedes-Benz S-Class Sedan 2012': 'V8', 'Mercedes-Benz SL-Class Coupe 2009': 'V8',
    'Porsche Panamera Sedan 2012': 'V8',
    'Ram C/V Cargo Van Minivan 2012': 'V6',
    'Spyker C8 Convertible 2009': 'V8', 'Spyker C8 Coupe 2009': 'V8',
    'Toyota Sequoia SUV 2012': 'V8',
    'Chevrolet Traverse SUV 2012': 'V6', 'Chevrolet Impala Sedan 2007': 'V6',
    'Chevrolet Malibu Sedan 2007': 'V6', 'Chevrolet Malibu Hybrid Sedan 2010': 'V6',
    'Chrysler Sebring Convertible 2010': 'V6', 'Chrysler Town and Country Minivan 2012': 'V6',
    'Chrysler Crossfire Convertible 2008': 'V6',
    'Dodge Journey SUV 2012': 'V6', 'Dodge Dakota Crew Cab 2010': 'V6', 'Dodge Dakota Club Cab 2007': 'V6',
    'Dodge Caravan Minivan 1997': 'V6',
    'Ford Edge SUV 2012': 'V6', 'Ford Freestar Minivan 2007': 'V6', 'Ford E-Series Wagon Van 2012': 'V6',
    'GMC Terrain SUV 2012': 'V6', 'GMC Acadia SUV 2012': 'V6', 'GMC Canyon Extended Cab 2012': 'Inline-4',
    'Honda Odyssey Minivan 2012': 'V6', 'Honda Odyssey Minivan 2007': 'V6',
    'Honda Accord Coupe 2012': 'V6', 'Honda Accord Sedan 2012': 'V6',
    'Hyundai Santa Fe SUV 2012': 'V6', 'Hyundai Veracruz SUV 2012': 'V6', 'Hyundai Azera Sedan 2012': 'V6',
    'Isuzu Ascender SUV 2008': 'V6', 'Mazda Tribute SUV 2011': 'V6',
    'Mercedes-Benz 300-Class Convertible 1993': 'Inline-6',
    'Nissan NV Passenger Van 2012': 'V6',
    'Toyota Camry Sedan 2012': 'V6', 'Toyota 4Runner SUV 2012': 'V6',
    'Audi 100 Sedan 1994': 'Inline-5', 'Audi 100 Wagon 1994': 'Inline-5', 'Audi TT RS Coupe 2012': 'Inline-5',
    'BMW ActiveHybrid 5 Sedan 2012': 'Inline-6', 'BMW 1 Series Convertible 2012': 'Inline-6',
    'BMW 1 Series Coupe 2012': 'Inline-6', 'BMW 3 Series Sedan 2012': 'Inline-6',
    'BMW 3 Series Wagon 2012': 'Inline-6', 'BMW 6 Series Convertible 2007': 'Inline-6',
    'BMW X5 SUV 2007': 'Inline-6', 'BMW X6 SUV 2012': 'Inline-6', 'BMW M3 Coupe 2012': 'V8',
    'BMW M5 Sedan 2010': 'V10', 'BMW M6 Convertible 2010': 'V10',
    'BMW X3 SUV 2012': 'Inline-6', 'BMW Z4 Convertible 2012': 'Inline-6',
    'Buick Verano Sedan 2012': 'Inline-4',
    'Chevrolet HHR SS 2010': 'Inline-4', 'Chevrolet Cobalt SS 2010': 'Inline-4', 'Chevrolet Sonic Sedan 2012': 'Inline-4',
    'Dodge Caliber Wagon 2012': 'Inline-4', 'Dodge Caliber Wagon 2007': 'Inline-4',
    'Dodge Sprinter Cargo Van 2009': 'Inline-5',
    'Ford Focus Sedan 2007': 'Inline-4', 'Ford Fiesta Sedan 2012': 'Inline-4', 'Ford Ranger SuperCab 2011': 'Inline-4',
    'Mercedes-Benz Sprinter Van 2012': 'Inline-4',
    'Nissan Juke Hatchback 2012': 'Inline-4', 'Nissan 240SX Coupe 1998': 'Inline-4',
    'Volvo 240 Sedan 1993': 'Inline-4',
  };

  // Fuel type overrides (default = Petrol)
  const fuelOverrides = {
    'Tesla Model S Sedan 2012': 'Electric', 'Nissan Leaf Hatchback 2012': 'Electric',
    'BMW ActiveHybrid 5 Sedan 2012': 'Hybrid',
    'Chevrolet Silverado 1500 Hybrid Crew Cab 2012': 'Hybrid',
    'Chevrolet Tahoe Hybrid SUV 2012': 'Hybrid',
    'Chevrolet Malibu Hybrid Sedan 2010': 'Hybrid',
    'Fisker Karma Sedan 2012': 'Plug-in Hybrid',
    'GMC Yukon Hybrid SUV 2012': 'Hybrid',
    'Hyundai Sonata Hybrid Sedan 2012': 'Hybrid',
    'Mercedes-Benz Sprinter Van 2012': 'Diesel',
    'Dodge Sprinter Cargo Van 2009': 'Diesel',
    'Ford F-450 Super Duty Crew Cab 2012': 'Diesel',
    'Chevrolet Silverado 2500HD Regular Cab 2012': 'Diesel',
  };

  // Brand default engine types
  const brandEngineDefaults = {
    'AM General': 'V8', 'Acura': 'V6', 'Aston Martin': 'V8', 'Audi': 'Inline-4',
    'BMW': 'Inline-6', 'Bentley': 'W12', 'Bugatti': 'W16', 'Buick': 'V6',
    'Cadillac': 'V6', 'Chevrolet': 'V6', 'Chrysler': 'V6', 'Daewoo': 'Inline-4',
    'Dodge': 'V6', 'Eagle': 'Inline-4', 'FIAT': 'Inline-4', 'Ferrari': 'V8',
    'Fisker': 'Inline-4', 'Ford': 'V6', 'GMC': 'V6', 'Geo': 'Inline-4',
    'HUMMER': 'V8', 'Honda': 'Inline-4', 'Hyundai': 'Inline-4', 'Infiniti': 'V6',
    'Isuzu': 'Inline-4', 'Jaguar': 'V8', 'Jeep': 'V6', 'Lamborghini': 'V10',
    'Land Rover': 'V8', 'Lincoln': 'V8', 'MINI': 'Inline-4', 'Maybach': 'V12',
    'Mazda': 'Inline-4', 'McLaren': 'V8', 'Mercedes-Benz': 'V6', 'Mitsubishi': 'Inline-4',
    'Nissan': 'Inline-4', 'Plymouth': 'Inline-4', 'Porsche': 'Flat-6', 'Ram': 'V8',
    'Rolls-Royce': 'V12', 'Scion': 'Inline-4', 'Spyker': 'V8', 'Suzuki': 'Inline-4',
    'Tesla': 'Electric Motor', 'Toyota': 'Inline-4', 'Volkswagen': 'Inline-4',
    'Volvo': 'Inline-5', 'smart': 'Inline-4'
  };

  // Read archive directories
  const dirs = fs.readdirSync(archivePath).filter(d =>
    fs.statSync(path.join(archivePath, d)).isDirectory()
  ).sort();

  console.log(`Found ${dirs.length} car directories in archive`);

  for (const dirName of dirs) {
    try {
      // Parse brand
      let brand = null, rest = null;
      for (const b of knownBrands) {
        if (dirName.startsWith(b + ' ')) {
          brand = b; rest = dirName.substring(b.length + 1).trim(); break;
        }
        if (dirName.toLowerCase().startsWith(b.toLowerCase() + ' ')) {
          brand = b; rest = dirName.substring(b.length + 1).trim(); break;
        }
      }
      if (!brand || !rest) { results.errors.push(`Brand parse fail: ${dirName}`); continue; }

      // Parse year and model
      const tokens = rest.split(' ');
      const year = tokens.pop();
      const modelName = tokens.join(' ');
      if (!modelName || !year || !/^\d{4}$/.test(year)) { results.errors.push(`Parse fail: ${dirName}`); continue; }

      // Create brand
      const [brandRecord, brandCreated] = await Brand.findOrCreate({
        where: { name: brand }, defaults: { name: brand, image: 0 }
      });
      if (brandCreated) results.brands++;

      // Copy first image
      const carDir = path.join(archivePath, dirName);
      const images = fs.readdirSync(carDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();
      let imagePath = null;

      if (images.length > 0) {
        const slug = dirName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
        const destFile = `${slug}.jpg`;
        const destPath = path.join(carImgDir, destFile);
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(path.join(carDir, images[0]), destPath);
        }
        imagePath = `cars/${destFile}`;
      }

      // Create car
      const [carRecord, carCreated] = await Car.findOrCreate({
        where: { name: modelName, brand_id: brandRecord.id },
        defaults: { brand_id: brandRecord.id, name: modelName, image: imagePath, Year: year, status: 1 }
      });
      if (!carCreated && !carRecord.image && imagePath) {
        await carRecord.update({ image: imagePath });
      }
      if (carCreated) results.cars++;

      // Determine engine and fuel type
      const engineName = engineOverrides[dirName] || brandEngineDefaults[brand] || 'Inline-4';
      const fuelName = fuelOverrides[dirName] || (brand === 'Tesla' ? 'Electric' : 'Petrol');
      const engineTypeId = engineTypeMap[engineName] || engineTypeMap['Inline-4'];
      const fuelTypeId = fuelTypeMap[fuelName] || fuelTypeMap['Petrol'];

      // Create variant
      const variantDisplayName = `${modelName} ${year}`;
      const [, varCreated] = await Variant.findOrCreate({
        where: { car_id: carRecord.id, name: variantDisplayName },
        defaults: { car_id: carRecord.id, name: variantDisplayName, engine_type_id: engineTypeId, fuel_type_id: fuelTypeId, status: 1 }
      });
      if (varCreated) results.variants++;

      process.stdout.write('.');
    } catch (err) {
      results.errors.push(`${dirName}: ${err.message}`);
    }
  }

  console.log('\n\n=== Seed Results ===');
  console.log(`Brands:       ${results.brands} created`);
  console.log(`Cars:         ${results.cars} created`);
  console.log(`Variants:     ${results.variants} created`);
  console.log(`Engine Types: ${results.engineTypes} created`);
  console.log(`Fuel Types:   ${results.fuelTypes} created`);
  if (results.errors.length > 0) {
    console.log(`\nErrors (${results.errors.length}):`);
    results.errors.forEach(e => console.log(`  - ${e}`));
  }
  console.log('\nDone!');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
