const { sequelize } = require('../src/config/database');
const { UserCartItem, Service } = require('../src/models');

(async () => {
  try {
    await sequelize.authenticate();

    // Check table structure
    const [results] = await sequelize.query('DESCRIBE user_cart_items');
    console.log('Table columns:');
    results.forEach(r => console.log('  ' + r.Field + ' (' + r.Type + ', Null:' + r.Null + ', Default:' + r.Default + ')'));

    // Try creating a cart item
    const service = await Service.findByPk(18);
    if (!service) {
      console.log('Service 18 not found');
      process.exit(0);
    }
    console.log('\nService found:', service.id, service.title, 'price:', String(service.price));

    const item = await UserCartItem.create({
      user_id: 6,
      item_id: 18,
      item_type: 'service',
      car_id: null,
      variant_id: null,
      quantity: 1,
      price: service.discount_price || service.price,
      addons: [],
      addon_total: 0
    });
    console.log('\nCreated cart item:', item.id);

    // Clean up
    await item.destroy();
    console.log('Cleaned up');
  } catch (err) {
    console.error('ERROR:', err.message);
    if (err.original) {
      console.error('SQL Error:', err.original.message);
      console.error('SQL:', err.sql);
    }
  }
  process.exit(0);
})();
