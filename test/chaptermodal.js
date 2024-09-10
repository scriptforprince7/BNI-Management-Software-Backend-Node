// const mongoose = require('mongoose');

// // Define the Chapter Schema
// const ChapterSchema = new mongoose.Schema({
//   chapterName: {
//     type: String,
//     required: true
//   },
//   region: {
// <<<<<<< HEAD
//     type: mongoose.Schema.Types.ObjectId,  // Reference to the Region model
//     ref: 'Region',
//     required: true
// =======
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Region',  // Reference to the Region model
//     required: true  // Ensures that every chapter is linked to a region
// >>>>>>> 6c10b7f0d8d15235e3bb209795f1a2043c2566a6
//   },
//   chapterLogo: {
//     type: String,  // URL or file path to the chapter logo
//     required: false
//   },
//   eoiLink: {
//     type: String, 
//     required: false
//   },
//   memberAppLink: {
//     type: String,
//     required: false
//   },
//   oneTimeReg: {
//     type: Number,
//     default : "5999",
//     required: true
//   },
//   oneYearMembership: {
//     type: Number,
//     default : "35309",
//     required: true
//   },
//   twoYearMembership: {
//     type: Number,
//     default : "56499",
//     required: true
//   },
//   threeYearMembership: {
//     type: Number,
//     default : "123581",
//     required: true
//   },
//   oneYearSubtotal: {
//     type: Number,
//     default : "41308",
//     required: true
//   },
//   twoYearSubtotal: {
//     type: Number,
//     default : "62498",
//     required: true
//   },
//   threeYearSubtotal: {
//     type: Number,
//     default : "129580",
//     required: true
//   },
//   newMemberGstOneYear: {
//     type: Number,
//     default : "7435",
//     required: true
//   },
//   newMemberGstTwoYear: {
//     type: Number,
//     default : "11250",
//     required: true
//   },
//   newMemberGstFiveYear: {
//     type: Number,
//     default : "23324",
//     required: true
//   },
//   totalNewMembershipOneYear: {
//     type: Number,
//     default : "48743",
//     required: true
//   },
//   totalNewMembershipTwoYear: {
//     type: Number,
//     default : "73748",
//     required: true
//   },
//   totalNewMembershipFiveYear: {
//     type: Number,
//     default : "152904",
//     required: true
//   },
//   renewMembershipOneYear: {
//     type: Number,
//     default : "35309",
//     required: true
//   },
//   renewMembershipTwoYear: {
//     type: Number,
//     default : "56499",
//     required: true
//   },
//   renewMembershipFiveYear: {
//     type: Number,
//     default : "123581",
//     required: true
//   },
//   renewMembershipGstOneYear: {
//     type: Number,
//     default : "6356",
//     required: true
//   },
//   renewMembershipGstTwoYear: {
//     type: Number,
//     default : "10170",
//     required: true
//   },
//   renewMembershipGstFiveYear: {
//     type: Number,
//     default : "22245",
//     required: true
//   },
//   renewMembershipTotalOneYear: {
//     type: Number,
//     default : "41665",
//     required: true
//   },
//   renewMembershipTotalTwoYear: {
//     type: Number,
//     default : "66669",
//     required: true
//   },
//   renewMembershipTotalFiveYear: {
//     type: Number,
//     default : "145826",
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['active', 'inactive'],
//     default: 'active'
//   },
//   chapterAdmin: {
//     type: String,  // Can be a name or a reference to a user model
//     required: true
//   }
// }, {
//   timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
// });

// // Create and export the Chapter model
// const Chapter = mongoose.model('Chapter', ChapterSchema);
// module.exports = Chapter;
