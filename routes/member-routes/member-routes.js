const express = require('express');
const router = express.Router();
const { createMember } = require('../../controllers/member-controller/member-controller');

// Route to create a new member
router.post('/members', createMember);

module.exports = router;
