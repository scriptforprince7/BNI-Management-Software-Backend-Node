const Member = require('../../modals/member/member-model');

// Create a new member
exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
