const mongoose = require('mongoose');

// Define the Chapter Schema
const ChapterSchema = new mongoose.Schema({
  chapterName: {
    type: String,
    required: true
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',  // Reference to the Region model
    required: true  // Ensures that every chapter is linked to a region
  },
  chapterLogo: {
    type: String,  // URL or file path to the chapter logo
    required: false
  },
  chapterFees: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  chapterAdmin: {
    type: String,  // Can be a name or a reference to a user model
    required: true
  }
}, {
  timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
});

// Create and export the Chapter model
const Chapter = mongoose.model('Chapter', ChapterSchema);
module.exports = Chapter;
