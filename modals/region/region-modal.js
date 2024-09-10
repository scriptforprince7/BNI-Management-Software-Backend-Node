const mongoose = require('mongoose');

// Define the Region Schema
const ModalSchema = new mongoose.Schema({
  regionName: {
    type: String,
    required: true
  },
  regionAdmin: {
    type: String,  // Assuming this is a name or could be a reference to another model
    required: true
  }
}, {
  timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
});

// Create and export the Region model
const Region = mongoose.model('Region', ModalSchema);
module.exports = Region;
