const express = require('express');
const router = express.Router();
const { createChapter,getChapters } = require('../../controllers/chapter-controller/chapter-controller');

// Route to create a new member
router.post('/createchapter', createChapter);
router.get('/getchapters', getChapters);
module.exports = router;
