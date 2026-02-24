const { sequelize } = require('../src/config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');

    // Add missing columns to user_cart_items table
    const alterQueries = [
      "ALTER TABLE user_cart_items ADD COLUMN item_type VARCHAR(50) DEFAULT 'service' AFTER item_id",
      "ALTER TABLE user_cart_items ADD COLUMN car_id BIGINT(20) UNSIGNED NULL AFTER item_type",
      "ALTER TABLE user_cart_items ADD COLUMN variant_id BIGINT(20) UNSIGNED NULL AFTER car_id",
      "ALTER TABLE user_cart_items ADD COLUMN addons TEXT NULL AFTER price",
      "ALTER TABLE user_cart_items ADD COLUMN addon_total DECIMAL(10,2) DEFAULT 0.00 AFTER addons"
    ];

    for (const query of alterQueries) {
      try {
        await sequelize.query(query);
        const col = query.match(/ADD COLUMN (\w+)/)[1];
        console.log('Added column:', col);
      } catch (err) {
        if (err.original && err.original.code === 'ER_DUP_FIELDNAME') {
          const col = query.match(/ADD COLUMN (\w+)/)[1];
          console.log('Column already exists:', col);
        } else {
          console.error('Error:', err.original ? err.original.message : err.message);
        }
      }
    }

    // Verify
    const [results] = await sequelize.query('DESCRIBE user_cart_items');
    console.log('\nFinal table structure:');
    results.forEach(r => console.log('  ' + r.Field + ' (' + r.Type + ')'));

    console.log('\nDone!');
  } catch (err) {
    console.error('ERROR:', err.message);
  }
  process.exit(0);
})();
