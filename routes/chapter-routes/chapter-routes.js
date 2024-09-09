const express = require('express');
const router = express.Router();
const { createChapter } = require('../../controllers/chapter-controller/chapter-controller');

// Route to create a new member
router.post('/members', createChapter);

module.exports = router;
