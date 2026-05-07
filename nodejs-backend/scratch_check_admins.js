const { Admin } = require('./src/models');
const { testConnection } = require('./src/config/database');

async function check() {
  try {
    await testConnection();
    const admins = await Admin.findAll({ 
      attributes: ['id', 'name', 'email', 'is_franchise', 'role', 'status'],
      raw: true 
    });
    console.log('--- ADMINS IN DB ---');
    console.log(JSON.stringify(admins, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

check();
