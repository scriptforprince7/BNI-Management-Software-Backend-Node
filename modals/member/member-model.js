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
    type: String,
  },
  alternateEmailAddress: {
    type: String,
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
    type: String,
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
    type: mongoose.Schema.Types.ObjectId,,
    ref: 'Region',
  },
  chapterName: {
    type:mongoose.Schema.Types.ObjectId,,
    ref: 'Chapter',
  },
  accolades: {
    type: String,
    enum: ['White Lion', 'Blue Lion', 'Red Lion', 'Golden Lion', 'Gold Club Member'],
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
    type: Number, // You can specify the time period in months or years
    required: true,
  },
  renewalDate: {
    type: Date,
    required: true,
  },
  renewableDueDate: {
    type: Date,
  },
  lastRenewableDate: {
    type: Date,
  },
}, {
  timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
});

// Create the model from the schema
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
