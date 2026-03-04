const router = require('express').Router();
const { FavoriteItem, Service } = require('../models');
const { authenticate, isClient } = require('../middleware/auth.middleware');

// Get user's favourites
router.get('/', authenticate, async (req, res) => {
  try {
    const favourites = await FavoriteItem.findAll({
      where: { user_id: req.user.id, favoritable_type: 'Service' },
      order: [['created_at', 'DESC']]
    });

    const items = [];
    for (const fav of favourites) {
      const service = await Service.findByPk(fav.favoritable_id);
      items.push({
        id: fav.id,
        service_id: fav.favoritable_id,
        created_at: fav.created_at,
        service: service ? {
          id: service.id,
          name: service.title || service.name,
          title: service.title,
          slug: service.slug,
          image: service.image,
          price: service.price,
          discount_price: service.discount_price,
          duration: service.duration,
          short_description: service.short_description || (service.description ? service.description.substring(0, 150) : null),
          description: service.description,
          status: service.status
        } : null
      });
    }

    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Check if service is favourited
router.get('/check/:serviceId', authenticate, async (req, res) => {
  try {
    const fav = await FavoriteItem.findOne({
      where: {
        user_id: req.user.id,
        favoritable_type: 'Service',
        favoritable_id: req.params.serviceId
      }
    });

    res.json({ success: true, is_favourite: !!fav, favourite_id: fav ? fav.id : null });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add to favourites
router.post('/', authenticate, async (req, res) => {
  try {
    const { service_id } = req.body;

    if (!service_id) {
      return res.status(400).json({ success: false, error: 'service_id is required' });
    }

    // Check if already favourited
    const existing = await FavoriteItem.findOne({
      where: {
        user_id: req.user.id,
        favoritable_type: 'Service',
        favoritable_id: service_id
      }
    });

    if (existing) {
      return res.status(400).json({ success: false, error: 'Already in favourites' });
    }

    const fav = await FavoriteItem.create({
      user_id: req.user.id,
      favoritable_type: 'Service',
      favoritable_id: service_id
    });

    res.status(201).json({ success: true, data: fav, message: 'Added to favourites' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Remove from favourites
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const fav = await FavoriteItem.findOne({
      where: { id: req.params.id, user_id: req.user.id }
    });

    if (!fav) {
      return res.status(404).json({ success: false, error: 'Favourite not found' });
    }

    await fav.destroy();
    res.json({ success: true, message: 'Removed from favourites' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
