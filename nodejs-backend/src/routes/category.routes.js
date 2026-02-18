const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { Category, SubCategory, Service } = require('../models');
const { Op } = require('sequelize');
const { paginate, paginationResponse, createSlug } = require('../utils/helpers');

// Get all categories (public)
router.get('/', async (req, res) => {
  try {
    const { status, is_featured, search } = req.query;

    const where = {};
    if (status !== undefined) where.status = status;
    if (is_featured !== undefined) where.is_featured = is_featured;
    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }

    const categories = await Category.findAll({
      where,
      include: [
        { model: SubCategory, as: 'subCategories', where: { status: 1 }, required: false }
      ],
      order: [['order', 'ASC'], ['name', 'ASC']]
    });

    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get category by ID or slug
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const isNumeric = /^\d+$/.test(id);

    const category = await Category.findOne({
      where: isNumeric ? { id } : { slug: id },
      include: [
        { model: SubCategory, as: 'subCategories', where: { status: 1 }, required: false }
      ]
    });

    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get services by category
router.get('/:id/services', async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 15 } = req.query;
    const pagination = paginate(page, limit);

    const isNumeric = /^\d+$/.test(id);
    const category = await Category.findOne({
      where: isNumeric ? { id } : { slug: id }
    });

    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    const { rows, count } = await Service.findAndCountAll({
      where: { category_id: category.id, status: 1, is_published: 1 },
      include: ['category', 'subCategory'],
      ...pagination,
      order: [['created_at', 'DESC']]
    });

    res.json(paginationResponse(rows, count, pagination.page, pagination.limit));
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin routes
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, description, image, icon, status, is_featured, order } = req.body;

    const category = await Category.create({
      name,
      slug: createSlug(name),
      description,
      image,
      icon,
      status: status ?? 1,
      is_featured: is_featured ?? 0,
      order: order ?? 0
    });

    res.status(201).json({ success: true, data: category, message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    const { name, description, image, icon, status, is_featured, order } = req.body;

    await category.update({
      name: name ?? category.name,
      slug: name ? createSlug(name) : category.slug,
      description: description ?? category.description,
      image: image ?? category.image,
      icon: icon ?? category.icon,
      status: status ?? category.status,
      is_featured: is_featured ?? category.is_featured,
      order: order ?? category.order
    });

    res.json({ success: true, data: category, message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }

    // Check if category has services
    const serviceCount = await Service.count({ where: { category_id: category.id } });
    if (serviceCount > 0) {
      return res.status(400).json({ success: false, error: 'Cannot delete category with services' });
    }

    await category.destroy();

    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Subcategories
router.get('/:categoryId/subcategories', async (req, res) => {
  try {
    const subcategories = await SubCategory.findAll({
      where: { category_id: req.params.categoryId, status: 1 },
      order: [['name', 'ASC']]
    });

    res.json({ success: true, data: subcategories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/:categoryId/subcategories', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, description, image, status } = req.body;

    const subcategory = await SubCategory.create({
      category_id: req.params.categoryId,
      name,
      slug: createSlug(name),
      description,
      image,
      status: status ?? 1
    });

    res.status(201).json({ success: true, data: subcategory, message: 'Subcategory created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
