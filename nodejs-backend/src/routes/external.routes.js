const express = require('express');
const router = express.Router();
const axios = require('axios');

// Proxy route for external service details
router.get('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bearerToken = process.env.EXTERNAL_API_BEARER_TOKEN;
    const baseUrl = process.env.EXTERNAL_API_BASE_URL || 'https://jusmoto.blackitechs.in/api/v1/admin';

    if (!bearerToken) {
      console.warn('EXTERNAL_API_BEARER_TOKEN is not set in .env');
      return res.status(500).json({ success: false, error: 'Authorization token not configured locally' });
    }

    console.log(`Proxying request for service ID: ${id} to ${baseUrl}/services/${id}`);

    const response = await axios.get(`${baseUrl}/services/${id}`, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    let data = error.response ? error.response.data : { error: 'Internal Server Error during proxy' };
    
    console.error('External API Proxy Error:', data);

    if (status === 401) {
      console.error('ERROR: The EXTERNAL_API_BEARER_TOKEN in .env is invalid or expired.');
      data = { 
        success: false, 
        error: 'External API Unauthorized: The bearer token is invalid or expired. Please update EXTERNAL_API_BEARER_TOKEN in your .env file.',
        hint: 'You may need to log in to https://jusmoto.blackitechs.in/api/v1/admin/login to get a fresh token.'
      };
    }
    
    res.status(status).json(data);
  }
});

module.exports = router;