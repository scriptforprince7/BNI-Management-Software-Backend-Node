const express = require('express');
const router = express.Router();
const { createRegion } = require('../../controllers/region-controller/region-controller');

// Route to create a new member
router.post('/region', createRegion);

module.exports = router;
