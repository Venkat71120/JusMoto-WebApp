const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { PaymentGateway, Tax, DeliveryCharge, StaticOption } = require('../models');

// ─── GET /payment-gateway-list (Laravel-compatible) ─────────────────
router.get('/payment-gateway-list', async (req, res) => {
  try {
    const dbGateways = await PaymentGateway.findAll({
      where: { status: 1 },
      attributes: ['id', 'name', 'slug', 'image', 'status', 'test_mode']
    });

    const gateways = dbGateways.map(g => ({
      id: g.id,
      name: g.slug || g.name.toLowerCase().replace(/\s+/g, '_'),
      description: '',
      image: g.image || '',
      status: g.status,
      test_mode: g.test_mode,
      credentials: ''
    }));

    // Add PayZapp if not in DB
    if (!gateways.find(g => g.name === 'payzapp')) {
      gateways.unshift({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 1,
        name: 'payzapp',
        description: 'UPI, Cards, Net Banking & Wallets',
        image: '',
        status: 1,
        test_mode: 0,
        credentials: ''
      });
    }

    // Add wallet
    if (!gateways.find(g => g.name === 'wallet')) {
      gateways.push({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 2,
        name: 'wallet',
        description: 'Pay using wallet balance',
        image: '',
        status: 1,
        test_mode: 0,
        credentials: ''
      });
    }

    // Add COD
    const codOption = await StaticOption.findOne({ where: { option_name: 'cash_on_delivery' } });
    if (codOption && codOption.option_value) {
      gateways.push({
        id: gateways.length > 0 ? Math.max(...gateways.map(g => g.id)) + 1 : 3,
        name: 'cash_on_delivery',
        description: '',
        image: '',
        status: 1,
        test_mode: 1,
        credentials: ''
      });
    }

    res.json({ data: gateways });
  } catch (error) {
    res.json({ data: [
      { id: 1, name: 'payzapp', description: 'UPI, Cards, Net Banking & Wallets', image: '', status: 1, test_mode: 0, credentials: '' },
      { id: 2, name: 'wallet', description: 'Pay using wallet balance', image: '', status: 1, test_mode: 0, credentials: '' },
      { id: 3, name: 'cash_on_delivery', description: '', image: '', status: 1, test_mode: 1, credentials: '' }
    ]});
  }
});

// ─── Helper: get tax rate based on location ─────────────────────────
async function getTaxRate(outlet_id, state_id, city_id) {
  // Try city-level tax first
  if (city_id) {
    const cityTax = await Tax.findOne({ where: { city_id, status: 1 } });
    if (cityTax) return parseFloat(cityTax.tax_percentage);
  }
  // Then state-level
  if (state_id) {
    const stateTax = await Tax.findOne({ where: { state_id, status: 1, city_id: null } });
    if (stateTax) return parseFloat(stateTax.tax_percentage);
  }
  // Fallback to global setting
  const globalTax = await StaticOption.findOne({ where: { option_name: 'tax_rate_by_country' } });
  return globalTax ? parseFloat(globalTax.option_value || 0) : 0;
}

// ─── Helper: get delivery charge based on location ──────────────────
async function getDeliveryCharge(outlet_id, state_id, city_id) {
  // Try city-level first
  if (city_id) {
    const cityCharge = await DeliveryCharge.findOne({ where: { city_id, status: 1 } });
    if (cityCharge) return parseFloat(cityCharge.charge);
  }
  // Then state-level
  if (state_id) {
    const stateCharge = await DeliveryCharge.findOne({ where: { state_id, status: 1, city_id: null } });
    if (stateCharge) return parseFloat(stateCharge.charge);
  }
  // Fallback to global
  const globalCharge = await StaticOption.findOne({ where: { option_name: 'delivery_charge' } });
  return globalCharge ? parseFloat(globalCharge.option_value || 0) : 0;
}

// ─── POST /client/tax-info (Laravel-compatible) ─────────────────────
router.post('/client/tax-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const taxRate = await getTaxRate(outlet_id, state_id, city_id);
    res.json({ tax_info: taxRate });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ─── POST /client/delivery-charge-info (Laravel-compatible) ─────────
router.post('/client/delivery-charge-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const charge = await getDeliveryCharge(outlet_id, state_id, city_id);

    const chargeSys = await StaticOption.findOne({ where: { option_name: 'delivery_charge_system' } });
    res.json({
      delivery_charge_system: chargeSys ? chargeSys.option_value : 'flat',
      delivery_charge: charge
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ─── POST /client/tax-delivery-charge-info (Laravel-compatible) ─────
router.post('/client/tax-delivery-charge-info', authenticate, isClient, async (req, res) => {
  try {
    const { outlet_id, state_id, city_id } = req.body;
    const taxRate = await getTaxRate(outlet_id, state_id, city_id);
    const charge = await getDeliveryCharge(outlet_id, state_id, city_id);

    const chargeSys = await StaticOption.findOne({ where: { option_name: 'delivery_charge_system' } });
    res.json({
      tax_info: taxRate,
      delivery_charge: charge,
      delivery_charge_system: chargeSys ? chargeSys.option_value : 'flat'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
