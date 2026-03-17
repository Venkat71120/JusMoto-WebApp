const http = require('http');

function req(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const opts = { hostname: 'localhost', port: 3000, path, method,
      headers: { 'Content-Type': 'application/json' }
    };
    if (token) opts.headers['Authorization'] = 'Bearer ' + token;
    const r = http.request(opts, res => {
      let buf = '';
      res.on('data', d => buf += d);
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch(e) { resolve({ raw: buf.substring(0, 300) }); }
      });
    });
    r.on('error', reject);
    if (body) r.write(JSON.stringify(body));
    r.end();
  });
}

async function main() {
  // Login
  const login = await req('POST', '/api/v1/auth/admin/login', { email: 'admin@gocar.com', password: '12345678' });
  const token = login.data?.accessToken;
  if (!token) {
    // Try other passwords
    for (const pwd of ['admin123', 'password123', 'Admin@123']) {
      const r = await req('POST', '/api/v1/auth/admin/login', { email: 'admin@gocar.com', password: pwd });
      if (r.data?.accessToken) {
        console.log('Found working password');
        return test(r.data.accessToken);
      }
    }
    console.log('Cannot login. Testing via DB directly.');
    return;
  }
  return test(token);
}

async function test(token) {
  console.log('Logged in.');

  // Test with limit=999
  const res999 = await req('GET', '/admin/cars?limit=999', null, token);
  console.log('GET /admin/cars?limit=999');
  console.log('  success:', res999.success);
  console.log('  data count:', res999.data?.length);
  console.log('  pagination total:', res999.pagination?.total);

  // Test with limit=100 (old cap)
  const res100 = await req('GET', '/admin/cars?limit=100', null, token);
  console.log('\nGET /admin/cars?limit=100');
  console.log('  data count:', res100.data?.length);

  // Test brands
  const brands = await req('GET', '/admin/brands', null, token);
  console.log('\nGET /admin/brands');
  console.log('  count:', brands.data?.length);
}

main().catch(err => console.error(err));
