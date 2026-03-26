const express = require('express');
const router = express.Router();
const { Offer, OfferService, Service } = require('../models');
const { Op } = require('sequelize');
const { formatError } = require('../utils/formatError');

// Get active offers
router.get('/', async (req, res) => {
  try {
    const now = new Date();

    const offers = await Offer.findAll({
      where: {
        status: 1,
        expires_at: { [Op.gte]: now }
      },
      include: [
        {
          model: OfferService,
          as: 'offerServices',
          include: [
            { model: Service, as: 'service', attributes: ['id', 'title', 'slug', 'image', 'price'] }
          ]
        }
      ],
      order: [['created_at', 'DESC']]
    });

    res.json({ success: true, data: offers });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get offer details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const isNumeric = /^\d+$/.test(id);

    const offer = await Offer.findOne({
      where: isNumeric ? { id } : { slug: id },
      include: [
        {
          model: OfferService,
          as: 'offerServices',
          include: [
            { model: Service, as: 'service', where: { status: 1 }, required: false }
          ]
        }
      ]
    });

    if (!offer) {
      return res.status(404).json({ success: false, error: 'Offer not found' });
    }

    res.json({ success: true, data: offer });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Get services in an offer
router.get('/:id/services', async (req, res) => {
  try {
    const { id } = req.params;

    const offerServices = await OfferService.findAll({
      where: { offer_id: id },
      include: [
        {
          model: Service,
          as: 'service',
          where: { status: 1, is_published: 1 },
          include: ['category']
        }
      ]
    });

    const services = offerServices.map(os => {
      const service = os.service.toJSON();
      // Calculate discounted price
      const discountedPrice = parseFloat(service.price) * (1 - (os.offer?.offer_percentage || 0) / 100);
      return {
        ...service,
        original_price: service.price,
        discounted_price: discountedPrice.toFixed(2)
      };
    });

    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
