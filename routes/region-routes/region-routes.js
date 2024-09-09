const express = require('express');
const router = express.Router();
const { createRegion,getRegions } = require('../../controllers/region-controller/region-controller');

// Route to create a new member
router.post('/createregion', createRegion);
router.get('/getregions', getRegions)

module.exports = router;
