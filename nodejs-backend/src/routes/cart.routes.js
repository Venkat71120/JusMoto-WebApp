const express = require('express');
const router = express.Router();
const { authenticate, isClient } = require('../middleware/auth.middleware');
const { UserCartItem, Service, ServiceAddon, ServiceCar, Category } = require('../models');
const { formatError } = require('../utils/formatError');

// Get cart items
router.get('/', authenticate, isClient, async (req, res) => {
  try {
    const cartItems = await UserCartItem.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: Service,
          as: 'service',
          include: [
            { model: Category, as: 'category', attributes: ['id', 'name'] }
          ]
        }
      ],
      order: [['created_at', 'DESC']]
    });

    // Calculate totals
    let subTotal = 0;
    const items = cartItems.map(item => {
      const itemData = item.toJSON();
      const itemTotal = (parseFloat(itemData.price) * itemData.quantity) + parseFloat(itemData.addon_total || 0);
      subTotal += itemTotal;
      return {
        ...itemData,
        item_total: itemTotal
      };
    });

    res.json({
      success: true,
      data: {
        items,
        sub_total: subTotal,
        item_count: items.length
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Add item to cart
router.post('/', authenticate, isClient, async (req, res) => {
  try {
    const { service_id, car_id, variant_id, quantity = 1, addons } = req.body;

    // Validate service
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    // Check if already in cart
    const existingItem = await UserCartItem.findOne({
      where: {
        user_id: req.user.id,
        item_id: service_id,
        car_id: car_id || null,
        variant_id: variant_id || null
      }
    });

    if (existingItem) {
      // Update quantity
      await existingItem.update({
        quantity: existingItem.quantity + quantity
      });

      return res.json({ success: true, data: existingItem, message: 'Cart updated' });
    }

    // Get price (check for car-specific pricing)
    let price = parseFloat(service.price);
    if (service.discount_price && parseFloat(service.discount_price) > 0) {
      price = parseFloat(service.discount_price);
    }

    if (variant_id || car_id) {
      const where = { service_id };
      if (variant_id) where.variant_id = variant_id;
      else if (car_id) where.car_id = car_id;

      const serviceCar = await ServiceCar.findOne({ where });
      if (serviceCar) {
        price = serviceCar.discount_price
          ? parseFloat(serviceCar.discount_price)
          : parseFloat(serviceCar.price);
      }
    }

    // Calculate addon total
    let addonTotal = 0;
    if (addons && addons.length > 0) {
      const addonRecords = await ServiceAddon.findAll({
        where: { id: addons, service_id }
      });
      addonTotal = addonRecords.reduce((sum, addon) => sum + parseFloat(addon.price), 0);
    }

    // Create cart item
    const cartItem = await UserCartItem.create({
      user_id: req.user.id,
      item_id: service_id,
      item_type: service.type === 1 ? 'product' : 'service',
      car_id,
      variant_id,
      quantity,
      price,
      addons: addons || [],
      addon_total: addonTotal
    });

    res.status(201).json({ success: true, data: cartItem, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Update cart item
router.put('/:id', authenticate, isClient, async (req, res) => {
  try {
    const { quantity, addons } = req.body;

    const cartItem = await UserCartItem.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!cartItem) {
      return res.status(404).json({ success: false, error: 'Cart item not found' });
    }

    const updateData = {};

    if (quantity !== undefined) {
      if (quantity <= 0) {
        await cartItem.destroy();
        return res.json({ success: true, message: 'Item removed from cart' });
      }
      updateData.quantity = quantity;
    }

    if (addons !== undefined) {
      const addonRecords = await ServiceAddon.findAll({
        where: { id: addons, service_id: cartItem.item_id }
      });
      updateData.addons = addons;
      updateData.addon_total = addonRecords.reduce((sum, addon) => sum + parseFloat(addon.price), 0);
    }

    await cartItem.update(updateData);

    res.json({ success: true, data: cartItem, message: 'Cart updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Remove item from cart
router.delete('/:id', authenticate, isClient, async (req, res) => {
  try {
    const deleted = await UserCartItem.destroy({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Cart item not found' });
    }

    res.json({ success: true, message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Clear cart
router.delete('/', authenticate, isClient, async (req, res) => {
  try {
    await UserCartItem.destroy({
      where: { user_id: req.user.id }
    });

    res.json({ success: true, message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get cart count
router.get('/count', authenticate, isClient, async (req, res) => {
  try {
    const count = await UserCartItem.count({
      where: { user_id: req.user.id }
    });

    res.json({ success: true, data: { count } });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
