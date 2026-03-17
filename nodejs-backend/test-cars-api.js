/**
 * Quick test: Login as admin, fetch cars with limit=999, check the response.
 */
const http = require('http');

function post(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({ hostname: 'localhost', port: 3000, path, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': data.length }
    }, res => {
      let buf = '';
      res.on('data', d => buf += d);
      res.on('end', () => resolve(JSON.parse(buf)));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function get(path, token) {
  return new Promise((resolve, reject) => {
    const req = http.request({ hostname: 'localhost', port: 3000, path, method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    }, res => {
      let buf = '';
      res.on('data', d => buf += d);
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); }
        catch(e) { resolve({ raw: buf.substring(0, 500) }); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  // Login
  const login = await post('/api/v1/auth/admin/login', { email: 'admin@gocar.com', password: 'password' });
  const token = login.token || login.data?.accessToken || login.data?.token;
  if (!token) {
    console.log('Login failed:', JSON.stringify(login).substring(0, 500));
    return;
  }
  console.log('Login OK, token:', token.substring(0, 30) + '...');

  // Test GET /admin/cars?limit=5
  const cars = await get('/admin/cars?limit=5', token);
  console.log('\nGET /admin/cars?limit=5');
  console.log('Success:', cars.success);
  console.log('Total:', cars.pagination?.total);
  if (cars.data) {
    cars.data.slice(0, 3).forEach(c => {
      console.log('  id:', c.id, 'name:', c.name, 'brand:', c.brand?.name, 'image:', (c.image || '').substring(0, 50));
    });
  } else {
    console.log('Response:', JSON.stringify(cars).substring(0, 300));
  }

  // Test GET /admin/cars?limit=999 (what variant form uses)
  const allCars = await get('/admin/cars?limit=999', token);
  console.log('\nGET /admin/cars?limit=999');
  console.log('Success:', allCars.success);
  console.log('Total:', allCars.pagination?.total);
  console.log('Data count:', allCars.data?.length);

  // Test GET /admin/brands
  const brands = await get('/admin/brands', token);
  console.log('\nGET /admin/brands');
  console.log('Success:', brands.success);
  console.log('Brand count:', brands.data?.length);

  // Test GET /admin/fuel-types
  const fuelTypes = await get('/admin/fuel-types', token);
  console.log('\nGET /admin/fuel-types');
  console.log('Success:', fuelTypes.success);
  console.log('Count:', fuelTypes.data?.length);

  // Test GET /admin/engine-types
  const engineTypes = await get('/admin/engine-types', token);
  console.log('\nGET /admin/engine-types');
  console.log('Success:', engineTypes.success);
  console.log('Count:', engineTypes.data?.length);
}

main().catch(err => console.error('Error:', err));
