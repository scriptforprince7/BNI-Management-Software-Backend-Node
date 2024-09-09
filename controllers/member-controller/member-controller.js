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

exports.getMembers = async (req, res) => {
  try {
    // Fetch members with populated chapterName and regionName
    const members = await Member.find({})
      .populate('chapterName')  // Populate chapterName field with Chapter data
      .populate('regionName');  // Populate regionName field with Region data

    // Send the response with the members' data
    res.status(201).json({
      success: true,
      data: members
    });
  } catch (error) {
    // Handle errors
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
