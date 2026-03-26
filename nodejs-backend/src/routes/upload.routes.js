const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');
const { uploadSingle, uploadMultiple } = require('../middleware/upload.middleware');
const { uploadToS3, generateS3Key } = require('../config/s3');
const { formatError } = require('../utils/formatError');

// Upload single file
router.post('/single', authenticate, ...uploadSingle('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const file = req.file;
    const folder = file.mimetype.startsWith('image/') ? 'images' : 'documents';
    const s3Key = generateS3Key(folder, file.originalname);
    const url = await uploadToS3(file.buffer, s3Key, file.mimetype);

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
    res.status(500).json({ success: false, error: formatError(error) });
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
      const url = await uploadToS3(file.buffer, s3Key, file.mimetype);
      files.push({ filename: s3Key, original_name: file.originalname, mimetype: file.mimetype, size: file.size, url });
    }

    res.json({ success: true, data: files });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

// Upload avatar
router.post('/avatar', authenticate, ...uploadSingle('avatar'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const file = req.file;
    const s3Key = generateS3Key('avatars', file.originalname);
    const avatarUrl = await uploadToS3(file.buffer, s3Key, file.mimetype);

    const { User } = require('../models');
    await User.update({ image: avatarUrl }, { where: { id: req.user.id } });

    res.json({ success: true, avatar_url: avatarUrl, message: 'Avatar updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: formatError(error) });
  }
});

module.exports = router;
