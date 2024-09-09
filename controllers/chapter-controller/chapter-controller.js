const Chapter = require('../../modals/chapter/chapter-modal');

// Create a new member
exports.createChapter = async (req, res) => {
  try {
    const chapter = new Chapter(req.body);
    await chapter.save();
    res.status(201).json({
      success: true,
      data: chapter
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getChapters = async (req, res) => {
  try {
    // Fetch all chapters and populate the 'region' field with Region data
    const chapters = await Chapter.find({}).populate('region');

    // Send the response with the fetched chapters
    res.status(201).json({
      success: true,
      data: chapters
    });
  } catch (error) {
    // Handle errors and send appropriate response
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
