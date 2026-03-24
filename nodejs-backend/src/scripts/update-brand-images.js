/**
 * Update Brand Images Script
 *
 * Updates all brand records in the DB with logo image URLs.
 *
 * Usage:
 *   node src/scripts/update-brand-images.js
 *
 * Run from the nodejs-backend directory.
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { sequelize } = require('../config/database');
const Brand = require('../models/Brand');

// Brand name → logo URL mapping (Wikimedia Commons PNG thumbnails)
const brandLogos = {
  'Acura': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Acura_logo.svg/200px-Acura_logo.svg.png',
  'AM General': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/AM_General_logo.svg/200px-AM_General_logo.svg.png',
  'Aston Martin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aston_Martin_Logo_2022.svg/200px-Aston_Martin_Logo_2022.svg.png',
  'Audi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png',
  'Austin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Austin_cars_logo.svg/200px-Austin_cars_logo.svg.png',
  'Bentley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bentley_logo.svg/200px-Bentley_logo.svg.png',
  'BMW': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
  'Bugatti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bugatti_logo.svg/200px-Bugatti_logo.svg.png',
  'Buick': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Buick_logo.svg/200px-Buick_logo.svg.png',
  'BYD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/BYD_Auto_Logo.svg/200px-BYD_Auto_Logo.svg.png',
  'Cadillac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cadillac_logo.svg/200px-Cadillac_logo.svg.png',
  'Caterham': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Caterham_Cars_logo.svg/200px-Caterham_Cars_logo.svg.png',
  'Chevrolet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chevrolet_logo.svg/200px-Chevrolet_logo.svg.png',
  'Chrysler': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chrysler_logo.svg/200px-Chrysler_logo.svg.png',
  'Citroen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Citro%C3%ABn_logo_2022.svg/200px-Citro%C3%ABn_logo_2022.svg.png',
  'Daewoo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Daewoo_Motor_logo.svg/200px-Daewoo_Motor_logo.svg.png',
  'Datsun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Datsun_logo.svg/200px-Datsun_logo.svg.png',
  'Dodge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dodge_logo.svg/200px-Dodge_logo.svg.png',
  'Ferrari': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ferrari-Logo.svg/200px-Ferrari-Logo.svg.png',
  'FIAT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo_%282020%29.svg/200px-Fiat_Automobiles_logo_%282020%29.svg.png',
  'Fisker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fisker_Inc._logo.svg/200px-Fisker_Inc._logo.svg.png',
  'Force Motors': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Force_Motors_Logo.svg/200px-Force_Motors_Logo.svg.png',
  'Ford': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/200px-Ford_Motor_Company_Logo.svg.png',
  'GMC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/GMC_logo.svg/200px-GMC_logo.svg.png',
  'Honda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/200px-Honda_logo.svg.png',
  'HUMMER': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hummer_logo.svg/200px-Hummer_logo.svg.png',
  'Hyundai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png',
  'Infiniti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Infiniti_logo.svg/200px-Infiniti_logo.svg.png',
  'Isuzu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Isuzu_logo.svg/200px-Isuzu_logo.svg.png',
  'Jaguar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jaguar_2012_logo.svg/200px-Jaguar_2012_logo.svg.png',
  'Jeep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jeep_logo.svg/200px-Jeep_logo.svg.png',
  'Kia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.png/200px-Kia-logo.png',
  'Lamborghini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lamborghini_Logo.svg/200px-Lamborghini_Logo.svg.png',
  'Land Rover': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Land_Rover_logo2.svg/200px-Land_Rover_logo2.svg.png',
  'Lexus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lexus_division_emblem.svg/200px-Lexus_division_emblem.svg.png',
  'Lincoln': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lincoln_Motor_Company_logo.svg/200px-Lincoln_Motor_Company_logo.svg.png',
  'Lotus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lotus_Cars_logo.svg/200px-Lotus_Cars_logo.svg.png',
  'Mahendira': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Mahindra_%26_Mahindra_Logo.svg/200px-Mahindra_%26_Mahindra_Logo.svg.png',
  'Mahindra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Mahindra_%26_Mahindra_Logo.svg/200px-Mahindra_%26_Mahindra_Logo.svg.png',
  'Maruti Suzuki': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png',
  'Maserati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Maserati_logo.svg/200px-Maserati_logo.svg.png',
  'Maybach': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Maybach_Logo.svg/200px-Maybach_Logo.svg.png',
  'Mazda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mazda_Motor_logo.svg/200px-Mazda_Motor_logo.svg.png',
  'McLaren': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/McLaren_Automotive_logo.svg/200px-McLaren_Automotive_logo.svg.png',
  'Mercedes-Benz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_combined_logo_including_text.svg/200px-Mercedes-Benz_combined_logo_including_text.svg.png',
  'MG': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/MG_Motor_logo.png/200px-MG_Motor_logo.png',
  'MINI': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/MINI_logo.svg/200px-MINI_logo.svg.png',
  'Mitsubishi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/200px-Mitsubishi_logo.svg.png',
  'Nissan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/200px-Nissan_2020_logo.svg.png',
  'Opel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Opel_logo.svg/200px-Opel_logo.svg.png',
  'Peugeot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Peugeot_logo_2021.svg/200px-Peugeot_logo_2021.svg.png',
  'Porsche': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Porsche_logo.svg/200px-Porsche_logo.svg.png',
  'Ram': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ram_Trucks_logo.svg/200px-Ram_Trucks_logo.svg.png',
  'Renault': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Text.svg/200px-Renault_2021_Text.svg.png',
  'Rolls-Royce': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rolls-Royce_Motor_Cars_logo.svg/200px-Rolls-Royce_Motor_Cars_logo.svg.png',
  'Scion': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Scion_logo.svg/200px-Scion_logo.svg.png',
  'Skoda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Skoda_Auto_logo_%282022%29.svg/200px-Skoda_Auto_logo_%282022%29.svg.png',
  'smart': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Smart_Automobile_logo.svg/200px-Smart_Automobile_logo.svg.png',
  'Subaru': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Subaru_logo.svg/200px-Subaru_logo.svg.png',
  'Suzuki': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png',
  'Tata': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png',
  'Tesla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/200px-Tesla_Motors.svg.png',
  'Toyota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png',
  'Vinfast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/VinFast_logo.svg/200px-VinFast_logo.svg.png',
  'Volkswagen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png',
  'Volvo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Volvo_Cars_2020.svg/200px-Volvo_Cars_2020.svg.png',
};

async function main() {
  try {
    console.log('===========================================');
    console.log('  Update Brand Images');
    console.log('===========================================');

    await sequelize.authenticate();
    console.log('Database connected.\n');

    // Alter image column from INT to VARCHAR if needed (legacy Laravel schema)
    const [cols] = await sequelize.query("SHOW COLUMNS FROM brands WHERE Field = 'image'");
    if (cols.length && cols[0].Type && cols[0].Type.toLowerCase().includes('int')) {
      console.log('Altering image column from INT to VARCHAR(500)...');
      await sequelize.query('ALTER TABLE brands MODIFY COLUMN image VARCHAR(500) NULL');
      console.log('Column altered successfully.\n');
    }

    const brands = await Brand.findAll();
    console.log(`Found ${brands.length} brands in DB.`);

    // List brands without logo mapping
    const unmapped = brands.filter(b => !brandLogos[b.name]).map(b => b.name);
    if (unmapped.length > 0) {
      console.log(`\nBrands without logo mapping (${unmapped.length}): ${unmapped.join(', ')}\n`);
    }

    let updated = 0;
    let skipped = 0;
    let notFound = 0;

    for (const brand of brands) {
      const logoUrl = brandLogos[brand.name];

      if (!logoUrl) {
        console.log(`  [?] No logo URL mapped for: ${brand.name} (id=${brand.id})`);
        notFound++;
        continue;
      }

      if (brand.image === logoUrl) {
        console.log(`  [=] Already up to date: ${brand.name}`);
        skipped++;
        continue;
      }

      await Brand.update({ image: logoUrl }, { where: { id: brand.id } });
      console.log(`  [+] Updated: ${brand.name} → ${logoUrl}`);
      updated++;
    }

    console.log('\n===========================================');
    console.log(`  Done! Updated: ${updated}, Skipped: ${skipped}, No URL: ${notFound}`);
    console.log('===========================================');

    process.exit(0);
  } catch (err) {
    console.error('\n[FATAL] Error:', err.message);
    process.exit(1);
  }
}

main();
