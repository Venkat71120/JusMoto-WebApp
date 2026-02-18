const express = require('express');
const router = express.Router();
const { authenticate, isAdmin, optionalAuth } = require('../middleware/auth.middleware');
const { Service, Category, SubCategory, ServiceInclude, ServiceExclude, ServiceAddon, ServiceCar, Review, User, Offer, OfferService, Car, Variant } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, createSlug } = require('../utils/helpers');

// Get all services (public)
router.get('/', optionalAuth, async (req, res) => {
  try {
    const {
      category_id, sub_category_id, type, is_featured,
      min_price, max_price, search, sort_by, sort_order,
      page = 1, limit = 15
    } = req.query;

    const pagination = paginate(page, limit);
    const where = { status: 1, is_published: 1 };

    if (category_id) where.category_id = category_id;
    if (sub_category_id) where.sub_category_id = sub_category_id;
    if (type !== undefined) where.type = type;
    if (is_featured !== undefined) where.is_featured = is_featured;

    if (min_price || max_price) {
      where.price = {};
      if (min_price) where.price[Op.gte] = min_price;
      if (max_price) where.price[Op.lte] = max_price;
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    let order = [['created_at', 'DESC']];
    if (sort_by) {
      const direction = sort_order?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
      order = [[sort_by, direction]];
    }

    const { rows, count } = await Service.findAndCountAll({
      where,
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] },
        { model: SubCategory, as: 'subCategory', attributes: ['id', 'name', 'slug'] },
        { model: Review, as: 'reviews', attributes: ['rating'] }
      ],
      ...pagination,
      order
    });

    // Calculate average ratings
    const servicesWithRatings = rows.map(service => {
      const data = service.toJSON();
      const ratings = data.reviews || [];
      data.average_rating = ratings.length > 0
        ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
        : 0;
      data.review_count = ratings.length;
      delete data.reviews;
      return data;
    });

    res.json({
      success: true,
      ...paginationResponse(servicesWithRatings, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get featured services
router.get('/featured', async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const services = await Service.findAll({
      where: { status: 1, is_published: 1, is_featured: 1 },
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] }
      ],
      limit: parseInt(limit),
      order: [['created_at', 'DESC']]
    });

    res.json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get service by ID or slug
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const isNumeric = /^\d+$/.test(id);

    const service = await Service.findOne({
      where: isNumeric ? { id } : { slug: id },
      include: [
        { model: Category, as: 'category' },
        { model: SubCategory, as: 'subCategory' },
        { model: ServiceInclude, as: 'includes' },
        { model: ServiceExclude, as: 'excludes' },
        { model: ServiceAddon, as: 'addons', where: { status: 1 }, required: false },
        {
          model: ServiceCar,
          as: 'serviceCars',
          include: [
            { model: Car, as: 'car' },
            { model: Variant, as: 'variant' }
          ]
        },
        {
          model: Review,
          as: 'reviews',
          include: [{ model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] }],
          limit: 10,
          order: [['created_at', 'DESC']]
        },
        {
          model: OfferService,
          as: 'offerServices',
          include: [{ model: Offer, as: 'offer' }],
          required: false
        }
      ]
    });

    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    // Calculate average rating
    const serviceData = service.toJSON();
    const ratings = serviceData.reviews || [];
    serviceData.average_rating = ratings.length > 0
      ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
      : 0;
    serviceData.review_count = ratings.length;

    // Calculate price with active offer
    let finalPrice = parseFloat(serviceData.price);
    if (serviceData.discount_price && parseFloat(serviceData.discount_price) > 0) {
      finalPrice = parseFloat(serviceData.discount_price);
    }

    // Check for active offers
    const activeOffer = serviceData.offerServices?.find(os =>
      os.offer && os.offer.status === 1 && new Date(os.offer.expires_at) >= new Date()
    );

    if (activeOffer) {
      const discount = (parseFloat(serviceData.price) * parseFloat(activeOffer.offer.offer_percentage)) / 100;
      finalPrice = parseFloat(serviceData.price) - discount;
      serviceData.active_offer = {
        id: activeOffer.offer.id,
        title: activeOffer.offer.title,
        percentage: activeOffer.offer.offer_percentage
      };
    }

    serviceData.final_price = finalPrice;

    res.json({ success: true, data: serviceData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get service price for specific car/variant
router.get('/:id/price', async (req, res) => {
  try {
    const { car_id, variant_id } = req.query;

    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    let price = parseFloat(service.price);
    let discountPrice = service.discount_price ? parseFloat(service.discount_price) : null;

    // Check for car-specific pricing
    if (variant_id || car_id) {
      const where = { service_id: service.id };
      if (variant_id) where.varient_id = variant_id;
      else if (car_id) where.car_id = car_id;

      const serviceCar = await ServiceCar.findOne({ where });
      if (serviceCar) {
        if (serviceCar.price) price = parseFloat(serviceCar.price);
        if (serviceCar.discount_price) discountPrice = parseFloat(serviceCar.discount_price);
      }
    }

    res.json({
      success: true,
      data: {
        price,
        discount_price: discountPrice,
        final_price: discountPrice || price
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get service reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const { page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const { rows, count } = await Review.findAndCountAll({
      where: { service_id: req.params.id, status: 1 },
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'image'] }
      ],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      ...paginationResponse(rows, count, pagination.page, pagination.limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const {
      category_id, sub_category_id, title, description, image, gallery_images,
      video_url, price, discount_price, unit, is_featured, status, is_published,
      max_qty, type, duration, includes, excludes, addons
    } = req.body;

    const service = await Service.create({
      admin_id: req.admin.id,
      category_id,
      sub_category_id,
      title,
      slug: createSlug(title),
      description,
      image,
      gallery_images: gallery_images || [],
      video_url,
      price,
      discount_price,
      unit,
      is_featured: is_featured ?? 0,
      status: status ?? 1,
      is_published: is_published ?? 0,
      published_at: is_published ? new Date() : null,
      max_qty,
      type: type ?? 0,
      duration
    });

    // Add includes
    if (includes && includes.length > 0) {
      await ServiceInclude.bulkCreate(
        includes.map(text => ({ service_id: service.id, include_text: text }))
      );
    }

    // Add excludes
    if (excludes && excludes.length > 0) {
      await ServiceExclude.bulkCreate(
        excludes.map(text => ({ service_id: service.id, exclude_text: text }))
      );
    }

    // Add addons
    if (addons && addons.length > 0) {
      await ServiceAddon.bulkCreate(
        addons.map(addon => ({ service_id: service.id, title: addon.title, price: addon.price }))
      );
    }

    res.status(201).json({ success: true, data: service, message: 'Service created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    const { title, ...updateData } = req.body;

    if (title) {
      updateData.title = title;
      updateData.slug = createSlug(title);
    }

    if (updateData.is_published && !service.is_published) {
      updateData.published_at = new Date();
    }

    await service.update(updateData);

    res.json({ success: true, data: service, message: 'Service updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    // Delete related data
    await ServiceInclude.destroy({ where: { service_id: service.id } });
    await ServiceExclude.destroy({ where: { service_id: service.id } });
    await ServiceAddon.destroy({ where: { service_id: service.id } });
    await ServiceCar.destroy({ where: { service_id: service.id } });

    await service.destroy();

    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Manage service car pricing
router.post('/:id/car-pricing', authenticate, isAdmin, async (req, res) => {
  try {
    const { car_id, variant_id, price, discount_price } = req.body;

    const serviceCar = await ServiceCar.create({
      service_id: req.params.id,
      car_id,
      varient_id: variant_id,
      price,
      discount_price
    });

    res.status(201).json({ success: true, data: serviceCar, message: 'Car pricing added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id/car-pricing/:carPricingId', authenticate, isAdmin, async (req, res) => {
  try {
    const serviceCar = await ServiceCar.findByPk(req.params.carPricingId);

    if (!serviceCar) {
      return res.status(404).json({ success: false, error: 'Car pricing not found' });
    }

    await serviceCar.update(req.body);

    res.json({ success: true, data: serviceCar, message: 'Car pricing updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
