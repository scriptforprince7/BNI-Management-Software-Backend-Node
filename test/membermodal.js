const mongoose = require('mongoose');

// Define the schema for the Member model
const memberSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  alternateMobileNumber: {
    type: String, // Optional field for alternate mobile number
  },
  alternateEmailAddress: {
    type: String,  // Optional field for alternate email address
    lowercase: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String, // Optional GST Number
  },
  companyPincode: {
    type: String,
    required: true,
  },
  companyArea: {
    type: String,
    required: true,
  },
  companyState: {
    type: String,
    required: true,
  },
  companyCity: {
    type: String,
    required: true,
  },
  regionName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',  // Reference to Region model
    required: true, // Ensuring the region reference is required
  },
  chapterName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',  // Reference to Chapter model
    required: true,  // Ensuring the chapter reference is required
  },
  accolades: {
    type: String,
    enum: ['White Lion', 'Blue Lion', 'Red Lion', 'Golden Lion', 'Gold Club Member'],  // Enum for accolades
  },
  inductionDate: {
    type: Date,
    required: true,
  },
  companyCategory: {
    type: String,
    required: true,
  },
  membershipTimePeriod: {
    type: Number,  // Number representing months or years
    required: true,
  },
  renewalDate: {
    type: Date,
    required: true,
  },
  renewableDueDate: {
    type: Date,  // Optional field for renewable due date
  },
  lastRenewableDate: {
    type: Date,  // Optional field for last renewable date
  },
}, {
  timestamps: true,  // Automatically create `createdAt` and `updatedAt`
});

// Create the model from the schema
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
