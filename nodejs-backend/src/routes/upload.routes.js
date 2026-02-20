const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');
const { uploadSingle, uploadMultiple } = require('../middleware/upload.middleware');
const path = require('path');
const fs = require('fs');

// Upload single file
router.post('/single', authenticate, uploadSingle('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    const subDir = path.basename(req.file.destination);
    const fileUrl = subDir === 'uploads' ? `/uploads/${req.file.filename}` : `/uploads/${subDir}/${req.file.filename}`;

    res.json({
      success: true,
      data: {
        filename: req.file.filename,
        original_name: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: fileUrl
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload multiple files
router.post('/multiple', authenticate, uploadMultiple('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No files uploaded' });
    }

    const files = req.files.map(file => ({
      filename: file.filename,
      original_name: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      url: `/uploads/${file.destination ? path.basename(file.destination) + '/' : ''}${file.filename}`
    }));

    res.json({ success: true, data: files });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload avatar
router.post('/avatar', authenticate, uploadSingle('avatar'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    const avatarUrl = `/uploads/images/${req.file.filename}`;
    const { User } = require('../models');

    await User.update({ image: avatarUrl }, { where: { id: req.user.id } });

    res.json({
      success: true,
      avatar_url: avatarUrl,
      message: 'Avatar updated successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete file
router.delete('/:filename', authenticate, async (req, res) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, '../../uploads', filename);

    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
      res.json({ success: true, message: 'File deleted' });
    } else {
      res.status(404).json({ success: false, error: 'File not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
