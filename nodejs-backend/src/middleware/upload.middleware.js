const multer = require('multer');

// Memory storage — files held in buffer, uploaded directly to S3
const storage = multer.memoryStorage();

// File filter
const fileFilter = (req, file, cb) => {
  console.log('Multer fileFilter - file received:', {
    originalname: file.originalname,
    mimetype: file.mimetype
  });

  const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
  const allowedDocTypes = [
    'application/pdf', 
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/octet-stream' // Sometimes seen from mobile
  ];

  if (allowedImageTypes.includes(file.mimetype) || allowedDocTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type (${file.mimetype}). Only images and documents are allowed.`), false);
  }
};

// Multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
});

// Upload error handler
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum size is 10MB. (MULTER_DEBUG)' });
    }
    return res.status(400).json({ error: `${err.message} (MULTER_DEBUG)` });
  }
  if (err) return res.status(400).json({ error: `${err.message} (MULTER_DEBUG)` });
  next();
};

module.exports = {
  upload,
  handleUploadError,
  uploadSingle: (fieldName) => [upload.single(fieldName), handleUploadError],
  uploadMultiple: (fieldName, maxCount = 10) => [upload.array(fieldName, maxCount), handleUploadError],
  uploadFields: (fields) => [upload.fields(fields), handleUploadError]
};
