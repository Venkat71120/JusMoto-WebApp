const router = require('express').Router();
const express = require('express');

// Payment gateway webhooks
router.use('/payment', require('./payment.webhooks'));

module.exports = router;
