const Chapter = require("./modals/chapter/chapter-modal");
const Member = require("./modals/member/member-model");
const Region = require("./modals/region/region-modal");

const dummyMembers = [
    {
      firstname: 'John',
      lastname: 'Doe',
      dob: new Date('1985-06-15'),
      phone: '1234567890',
      alternateMobileNumber: '0987654321',
      alternateEmailAddress: 'john.doe@example.com',
      pincode: '123456',
      area: 'Downtown',
      state: 'California',
      city: 'Los Angeles',
      gstNumber: 'GST1234567890',
      companyPincode: '654321',
      companyArea: 'Uptown',
      companyState: 'California',
      companyCity: 'San Francisco',
      accolades: 'Gold Club Member',
      inductionDate: new Date('2020-01-01'),
      companyCategory: 'Tech',
      membershipTimePeriod: 12,
      regionName:'66deba227148a47fe236aed3',
      chapterName:'66deba990cb376ec1b3b1f5c',
      renewalDate: new Date('2024-01-01'),
      renewableDueDate: new Date('2024-01-30'),
      lastRenewableDate: new Date('2023-12-15'),
    },
    // Add 9 more similar objects with different values
    {
      firstname: 'Jane',
      lastname: 'Smith',
      dob: new Date('1990-03-25'),
      phone: '2345678901',
      alternateMobileNumber: '1098765432',
      alternateEmailAddress: 'jane.smith@example.com',
      pincode: '234567',
      area: 'Midtown',
      state: 'New York',
      city: 'New York',
      gstNumber: 'GST2345678901',
      companyPincode: '765432',
      companyArea: 'East Side',
      companyState: 'New York',
      companyCity: 'Brooklyn',
      accolades: 'Golden Lion',
      regionName:'66deba227148a47fe236aed5',
      chapterName:'66deba990cb376ec1b3b1f5d',
      inductionDate: new Date('2019-05-15'),
      companyCategory: 'Retail',
      membershipTimePeriod: 24,
      renewalDate: new Date('2025-05-15'),
      renewableDueDate: new Date('2025-06-15'),
      lastRenewableDate: new Date('2024-05-01'),
    },
    // 8 more dummy entries similar to the above format
  ];

  const seedData = async()=>{
    await Member.deleteMany({});
    await Member.insertMany(dummyMembers);
    console.log("Data Inserted Successfullys");
  }


const dummyChapters = [
  {
    chapterName: 'North Region Chapter',
    region: '66deba227148a47fe236aed3',
    chapterLogo: 'https://example.com/logos/north-chapter.png',
    chapterFees: 100,
    status: 'active',
    chapterAdmin: 'John Doe'
  },

  {
    chapterName: 'East Region Chapter',
    region: '66deba227148a47fe236aed4',
    chapterLogo: 'https://example.com/logos/east-chapter.png',
    chapterFees: 120,
    status: 'active',
    chapterAdmin: 'Alice Johnson'
  },
 
];



const dummyRegions = [
  {
    regionName: 'North',
    regionAdmin: 'Emily Davis'
  },
  {
    regionName: 'South',
    regionAdmin: 'Michael Wilson'
  },
  {
    regionName: 'East',
    regionAdmin: 'Sarah Lee'
  },
  {
    regionName: 'West',
    regionAdmin: 'David Clark'
  }
];



  
  module.exports = seedData;
  // module.exports = seedChapterData;
  // module.exports = seedRegionData;
