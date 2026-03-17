const https = require('https');
const http = require('http');
const fs = require('fs');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location.startsWith('http') ? res.headers.location : `https://www.carwale.com${res.headers.location}`;
        return fetchHTML(loc).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function escapeCSV(val) {
  if (!val) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// Extract og:image from HTML
function extractOGImage(html) {
  // Try og:image
  let m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (!m) m = html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (m && m[1] && m[1].startsWith('http')) return m[1].split('?')[0];

  // Try any car image from aeplcdn
  m = html.match(/https:\/\/imgd\.aeplcdn\.com\/[^\s"']+\.(jpg|jpeg|png|webp|avif)/i);
  if (m) return m[0].split('?')[0];

  return null;
}

// Build CarWale URL masking name from make/model
function toMasking(name) {
  return name.toLowerCase()
    .replace(/\s*\[.*?\]\s*/g, '') // remove [year] brackets
    .replace(/[^a-z0-9]+/g, '')    // remove special chars, keep alphanumeric
    .trim();
}

async function main() {
  const csvPath = __dirname + '/Book1.csv';
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.trim().split('\n');
  const header = lines[0];

  // Parse CSV rows
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    // Simple CSV parse (handles quoted fields)
    const row = [];
    let inQuotes = false, field = '';
    for (const ch of lines[i]) {
      if (ch === '"') { inQuotes = !inQuotes; continue; }
      if (ch === ',' && !inQuotes) { row.push(field); field = ''; continue; }
      field += ch;
    }
    row.push(field);
    rows.push(row);
  }

  // Header: Make,Model,Model_Year,Status,Variant,Fuel_Type,Displacement,Cylinders,Image url
  // Index:   0     1      2        3       4       5          6            7         8

  const missing = [];
  for (let i = 0; i < rows.length; i++) {
    const img = (rows[i][8] || '').trim();
    if (!img || !img.startsWith('http')) {
      missing.push(i);
    }
  }

  console.log(`Total rows: ${rows.length}, Missing images: ${missing.length}\n`);

  let fixed = 0, failed = 0;

  for (const idx of missing) {
    const make = rows[idx][0];
    const model = rows[idx][1];
    const makeMask = toMasking(make);
    const modelMask = toMasking(model);

    // Try multiple URL patterns
    const urls = [
      `https://www.carwale.com/${makeMask}-cars/${modelMask}/`,
      `https://www.carwale.com/${makeMask}-cars/${modelMask}/images/`,
    ];

    let imageUrl = null;
    for (const url of urls) {
      try {
        const { status, body } = await fetchHTML(url);
        if (status === 200) {
          imageUrl = extractOGImage(body);
          if (imageUrl) break;
        }
      } catch (e) { /* ignore */ }
    }

    if (imageUrl) {
      rows[idx][8] = imageUrl;
      fixed++;
      console.log(`[FIXED] ${make} ${model} -> ${imageUrl.substring(0, 80)}...`);
    } else {
      failed++;
      console.log(`[MISS]  ${make} ${model}`);
    }

    await sleep(300);
  }

  // Rebuild CSV
  const csvLines = rows.map(r => r.map(escapeCSV).join(','));
  const csv = header + '\n' + csvLines.join('\n') + '\n';
  fs.writeFileSync(csvPath, csv, 'utf8');

  console.log(`\n========================================`);
  console.log(`Fixed: ${fixed}, Still missing: ${failed}`);
  console.log(`CSV updated.`);
  console.log(`========================================`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
