const express = require('express');
const router = express.Router();
const { createMember,getMembers } = require('../../controllers/member-controller/member-controller');

// Route to create a new member
router.post('/members', createMember);
router.get('/getmembers',getMembers)
module.exports = router;
