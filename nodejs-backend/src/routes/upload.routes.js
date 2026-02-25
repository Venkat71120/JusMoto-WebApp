const express = require('express');
const router = express.Router();
const fs = require('fs');
const { authenticate } = require('../middleware/auth.middleware');
const { uploadSingle, uploadMultiple, cleanTemp } = require('../middleware/upload.middleware');
const { uploadToS3, generateS3Key } = require('../config/s3');

// Upload single file
router.post('/single', authenticate, ...uploadSingle('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const file = req.file;
    const folder = file.mimetype.startsWith('image/') ? 'images' : 'documents';
    const s3Key = generateS3Key(folder, file.originalname);
    const buffer = fs.readFileSync(file.path);
    const url = await uploadToS3(buffer, s3Key, file.mimetype);
    cleanTemp(file.path);

    res.json({
      success: true,
      data: {
        filename: s3Key,
        original_name: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        url
      }
    });
  } catch (error) {
    if (req.file) cleanTemp(req.file.path);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload multiple files
router.post('/multiple', authenticate, ...uploadMultiple('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) return res.status(400).json({ success: false, error: 'No files uploaded' });

    const files = [];
    for (const file of req.files) {
      const folder = file.mimetype.startsWith('image/') ? 'images' : 'documents';
      const s3Key = generateS3Key(folder, file.originalname);
      const buffer = fs.readFileSync(file.path);
      const url = await uploadToS3(buffer, s3Key, file.mimetype);
      cleanTemp(file.path);
      files.push({ filename: s3Key, original_name: file.originalname, mimetype: file.mimetype, size: file.size, url });
    }

    res.json({ success: true, data: files });
  } catch (error) {
    if (req.files) req.files.forEach(f => cleanTemp(f.path));
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload avatar
router.post('/avatar', authenticate, ...uploadSingle('avatar'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const file = req.file;
    const s3Key = generateS3Key('avatars', file.originalname);
    const buffer = fs.readFileSync(file.path);
    const avatarUrl = await uploadToS3(buffer, s3Key, file.mimetype);
    cleanTemp(file.path);

    const { User } = require('../models');
    await User.update({ image: avatarUrl }, { where: { id: req.user.id } });

    res.json({ success: true, avatar_url: avatarUrl, message: 'Avatar updated successfully' });
  } catch (error) {
    if (req.file) cleanTemp(req.file.path);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
