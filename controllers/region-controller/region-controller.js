const Region = require('../../modals/region/region-modal');

// Create a new member
exports.createRegion = async (req, res) => {
  try {
    const region = new Region(req.body);
    await region.save();
    res.status(201).json({
      success: true,
      data: region
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
