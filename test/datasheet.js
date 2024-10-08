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
    regionName:'650f2a9e1c4a9b3af0c123a2',
    chapterName:'66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-01-01'),
    renewableDueDate: new Date('2024-01-30'),
    lastRenewableDate: new Date('2023-12-15'),
  },
  {
    firstname: 'Ankur',
    lastname: 'Adlakha',
    dob: new Date('1987-03-25'),
    phone: '2345678901',
    alternateMobileNumber: '1987654321',
    alternateEmailAddress: 'ankur@example.com',
    pincode: '234567',
    area: 'Green Park',
    state: 'New York',
    city: 'New York City',
    gstNumber: 'GST2345678901',
    companyPincode: '765432',
    companyArea: 'Soho',
    companyState: 'New York',
    companyCity: 'New York City',
    accolades: 'White Lion',
    inductionDate: new Date('2021-02-10'),
    companyCategory: 'Finance',
    membershipTimePeriod: 10,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2023-12-15'),
    renewableDueDate: new Date('2024-02-01'),
    lastRenewableDate: new Date('2023-11-10'),
  },
  {
    firstname: 'Bindiya',
    lastname: 'Adlakha',
    dob: new Date('1990-07-18'),
    phone: '3456789012',
    alternateMobileNumber: '2987654321',
    alternateEmailAddress: 'bindiya.adlakha@example.com',
    pincode: '345678',
    area: 'Bay Area',
    state: 'California',
    city: 'San Francisco',
    gstNumber: 'GST3456789012',
    companyPincode: '876543',
    companyArea: 'Palo Alto',
    companyState: 'California',
    companyCity: 'San Jose',
    accolades: 'Red Lion',
    inductionDate: new Date('2019-03-05'),
    companyCategory: 'Healthcare',
    membershipTimePeriod: 8,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-05-10'),
    renewableDueDate: new Date('2024-06-05'),
    lastRenewableDate: new Date('2023-11-25'),
  },
  {
    firstname: 'Dhananjai',
    lastname: 'Agarwal',
    dob: new Date('1982-11-20'),
    phone: '4567890123',
    alternateMobileNumber: '3987654321',
    alternateEmailAddress: 'dhananjai.agarwal@example.com',
    pincode: '456789',
    area: 'City Center',
    state: 'Texas',
    city: 'Austin',
    gstNumber: 'GST4567890123',
    companyPincode: '987654',
    companyArea: 'North Austin',
    companyState: 'Texas',
    companyCity: 'Dallas',
    accolades: 'Golden Lion',
    inductionDate: new Date('2020-07-14'),
    companyCategory: 'Real Estate',
    membershipTimePeriod: 15,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-03-15'),
    renewableDueDate: new Date('2024-04-10'),
    lastRenewableDate: new Date('2023-10-30'),
  },
  {
    firstname: 'Aman',
    lastname: 'Aggarwal',
    dob: new Date('1993-01-10'),
    phone: '5678901234',
    alternateMobileNumber: '4987654321',
    alternateEmailAddress: 'aman.aggarwal@example.com',
    pincode: '567890',
    area: 'Westend',
    state: 'Washington',
    city: 'Seattle',
    gstNumber: 'GST5678901234',
    companyPincode: '876321',
    companyArea: 'Downtown Seattle',
    companyState: 'Washington',
    companyCity: 'Seattle',
    accolades: 'Gold Club Member',
    inductionDate: new Date('2021-08-30'),
    companyCategory: 'Tech',
    membershipTimePeriod: 18,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2023-12-10'),
    renewableDueDate: new Date('2024-01-05'),
    lastRenewableDate: new Date('2023-10-15'),
  },
  {
    firstname: 'Deepak',
    lastname: 'Kumar Agrawal',
    dob: new Date('1980-05-25'),
    phone: '6789012345',
    alternateMobileNumber: '5987654321',
    alternateEmailAddress: 'deepak.agrawal@example.com',
    pincode: '678901',
    area: 'South Gate',
    state: 'Illinois',
    city: 'Chicago',
    gstNumber: 'GST6789012345',
    companyPincode: '765432',
    companyArea: 'Lincoln Park',
    companyState: 'Illinois',
    companyCity: 'Chicago',
    accolades: 'White Lion',
    inductionDate: new Date('2018-11-11'),
    companyCategory: 'Education',
    membershipTimePeriod: 9,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-04-01'),
    renewableDueDate: new Date('2024-05-01'),
    lastRenewableDate: new Date('2023-12-01'),
  },
  {
    firstname: 'Dhanush',
    lastname: 'Alva',
    dob: new Date('1989-02-14'),
    phone: '7890123456',
    alternateMobileNumber: '6987654321',
    alternateEmailAddress: 'dhanush.alva@example.com',
    pincode: '789012',
    area: 'East Village',
    state: 'Florida',
    city: 'Miami',
    gstNumber: 'GST7890123456',
    companyPincode: '543210',
    companyArea: 'Brickell',
    companyState: 'Florida',
    companyCity: 'Miami',
    accolades: 'Red Lion',
    inductionDate: new Date('2019-06-20'),
    companyCategory: 'Hospitality',
    membershipTimePeriod: 5,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2023-11-05'),
    renewableDueDate: new Date('2023-12-01'),
    lastRenewableDate: new Date('2023-09-20'),
  },
  {
    firstname: 'RAJAT',
    lastname: 'ARORA',
    dob: new Date('1995-09-09'),
    phone: '8901234567',
    alternateMobileNumber: '7987654321',
    alternateEmailAddress: 'rajat.arora@example.com',
    pincode: '890123',
    area: 'Eastwood',
    state: 'Georgia',
    city: 'Atlanta',
    gstNumber: 'GST8901234567',
    companyPincode: '654321',
    companyArea: 'Buckhead',
    companyState: 'Georgia',
    companyCity: 'Atlanta',
    accolades: 'Golden Lion',
    inductionDate: new Date('2022-05-18'),
    companyCategory: 'Entertainment',
    membershipTimePeriod: 7,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-07-01'),
    renewableDueDate: new Date('2024-08-01'),
    lastRenewableDate: new Date('2023-12-20'),
  },
  {
    firstname: 'Pretesh',
    lastname: 'Anand',
    dob: new Date('1994-04-05'),
    phone: '9012345678',
    alternateMobileNumber: '8987654321',
    alternateEmailAddress: 'pretesh.anand@example.com',
    pincode: '901234',
    area: 'Lakeview',
    state: 'Colorado',
    city: 'Denver',
    gstNumber: 'GST9012345678',
    companyPincode: '321654',
    companyArea: 'Five Points',
    companyState: 'Colorado',
    companyCity: 'Denver',
    accolades: 'Gold Club Member',
    inductionDate: new Date('2020-10-10'),
    companyCategory: 'Finance',
    membershipTimePeriod: 12,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-03-20'),
    renewableDueDate: new Date('2024-04-10'),
    lastRenewableDate: new Date('2023-11-01'),
  },
  {
    firstname: 'Amit',
    lastname: 'Arora',
    dob: new Date('1987-12-11'),
    phone: '9123456789',
    alternateMobileNumber: '9987654321',
    alternateEmailAddress: 'amit.arora@example.com',
    pincode: '912345',
    area: 'Riverside',
    state: 'Arizona',
    city: 'Phoenix',
    gstNumber: 'GST9123456789',
    companyPincode: '432165',
    companyArea: 'Old Town',
    companyState: 'Arizona',
    companyCity: 'Scottsdale',
    accolades: 'White Lion',
    inductionDate: new Date('2019-09-25'),
    companyCategory: 'Retail',
    membershipTimePeriod: 11,
    regionName: '650f2a9e1c4a9b3af0c123a2',
    chapterName: '66dee2046ab8079b5fe829d3',
    renewalDate: new Date('2024-08-30'),
    renewableDueDate: new Date('2024-09-25'),
    lastRenewableDate: new Date('2023-11-15'),
  },
];


  // const seedData = async()=>{
  //   await Member.deleteMany({});
  //   await Member.insertMany(dummyMembers);
  //   console.log("Data Inserted Successfullys");
  // }
  const dummyChapters = [
    {
      
      "chapterName": "BNI Game Changers",
      "region": "66dee2046ab8079b5fe829d2",  // Region 1
      "chapterLogo": "path/to/logoA.png",
      "eoiLink": "https://www.bniindia.li/Game-Changer-del-e",
      "memberAppLink": "https://www.bniindia.li/Game-Changers-del-e-ma",
      "chapterFees": 100,
      "oneTimeReg" : 5999,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Mike Ross",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      
      "chapterName": "Dynamo",
      "region": "66dee2046ab8079b5fe829d2",  // Region 1
      "chapterLogo": "path/to/logoB.png",
      "eoiLink": "https://www.bniindia.li/Dynamo-del-e",
      "memberAppLink": "https://www.bniindia.li/Dynamo-del-e-ma",
      "chapterFees": 150,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "inactive",
      "chapterAdmin": "Harvey Specter",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
     
      "chapterName": "Quantum",
      "region": "66dee2046ab8079b5fe829d2",  // Region 2
      "chapterLogo": "path/to/logoC.png",
      "eoiLink": "https://www.bniindia.li/Quantum-del-e",
      "memberAppLink": "https://www.bniindia.li/Quantum-del-e-ma",
      "chapterFees": 200,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Louis Litt",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Triumph",
      "region": "66dee2046ab8079b5fe829d4",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Triumph-del-n",
      "memberAppLink": "https://www.bniindia.li/Triumph-del-n-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Kinettic",
      "region": "66dee2046ab8079b5fe829d4",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Kinettic-del-n",
      "memberAppLink": "https://www.bniindia.li/Kinettic-del-n-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Marvel",
      "region": "66dee2046ab8079b5fe829d4",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Marvel-del-n",
      "memberAppLink": "https://www.bniindia.li/Marvel-del-n-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Stellar",
      "region": "66dee2046ab8079b5fe829d4",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Stellar-del-n",
      "memberAppLink": "https://www.bniindia.li/Stellar-del-n-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Amigos",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Amigos-del-w",
      "memberAppLink": "https://www.bniindia.li/Amigos-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Beyond",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Beyond-del-w",
      "memberAppLink": "https://www.bniindia.li/Beyond-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Capital",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Capital-del-w",
      "memberAppLink": "https://www.bniindia.li/Capital-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Elixir",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Elixir-del-w",
      "memberAppLink": "https://www.bniindia.li/Elixir-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Fantom",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Fantom-del-w",
      "memberAppLink": "https://www.bniindia.li/Fantom-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Iconic",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Iconic-del-w",
      "memberAppLink": "https://www.bniindia.li/Iconic-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Impulse",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Impulse-del-w",
      "memberAppLink": "https://www.bniindia.li/Impulse-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Logik",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Logik-del-w",
      "memberAppLink": "https://www.bniindia.li/Logik-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Nexus",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Nexus-del-w",
      "memberAppLink": "https://www.bniindia.li/Nexus-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI Opulence",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Opulence-del-w",
      "memberAppLink": "https://www.bniindia.li/Opulence-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "BNI UNO",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/UNO-del-w",
      "memberAppLink": "https://www.bniindia.li/UNO-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Impetus",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Impetus-del-w",
      "memberAppLink": "https://www.bniindia.li/Impetus-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Javelin",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Javelin-del-w",
      "memberAppLink": "https://www.bniindia.li/Javelin-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Prolific",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Prolific-del-w",
      "memberAppLink": "https://www.bniindia.li/Prolific-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Revenue",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Revenue-del-w",
      "memberAppLink": "https://www.bniindia.li/Revenue-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
    {
      "chapterName": "Zeal",
      "region": "66dee2046ab8079b5fe829d3",  // Region 3
      "chapterLogo": "path/to/logoD.png",
      "eoiLink": "https://www.bniindia.li/Zeal-del-w",
      "memberAppLink": "https://www.bniindia.li/Zeal-del-w-ma",
      "chapterFees": 250,
      "oneYearMembership": 35309,
      "twoYearMembership" : 56499,
      "threeYearMembership" : 123581,
      "oneYearSubtotal" : 41308,
      "twoYearSubtotal" : 62498,
      "threeYearSubtotal" : 129580,
      "newMemberGstOneYear" : 7435,
      "newMemberGstTwoYear" : 11250,
      "newMemberGstFiveYear" : 23324,
      "totalNewMembershipOneYear" : 48743,
      "totalNewMembershipTwoYear" : 73748,
      "totalNewMembershipFiveYear" : 152904,
      "renewMembershipOneYear" : 35309,
      "renewMembershipTwoYear" : 56499,
      "renewMembershipFiveYear" : 123581,
      "renewMembershipGstOneYear" : 6356,
      "renewMembershipGstTwoYear" : 10170,
      "renewMembershipGstFiveYear" : 22245,
      "renewMembershipTotalOneYear" : 41665,
      "renewMembershipTotalTwoYear" : 66669,
      "renewMembershipTotalFiveYear" : 145826,
      "status": "active",
      "chapterAdmin": "Rachel Zane",
      "createdAt": "2024-09-09T10:30:00.000Z",
      "updatedAt": "2024-09-09T10:30:00.000Z"
    },
  ];

// const seedChapterData = async()=>{
//   await Chapter.deleteMany({});
//   await Chapter.insertMany(dummyChapters);
//   console.log("Data Inserted Successfullys");
// }

const dummyRegions = [
  {
    "regionid": "650f2a9e1c4a9b3af0c123a1",
    "regionName": "Delhi East",
    "regionAdmin": "John Doe",
    "createdAt": "2024-09-09T10:00:00.000Z",
    "updatedAt": "2024-09-09T10:00:00.000Z"
  },
  {
    "regionid": "650f2a9e1c4a9b3af0c123a2",
    "regionName": "Delhi West",
    "regionAdmin": "Jane Smith",
    "createdAt": "2024-09-09T10:00:00.000Z",
    "updatedAt": "2024-09-09T10:00:00.000Z"
  },
  {
    "regionid": "650f2a9e1c4a9b3af0c123a3",
    "regionName": "Delhi North",
    "regionAdmin": "Alice Johnson",
    "createdAt": "2024-09-09T10:00:00.000Z",
    "updatedAt": "2024-09-09T10:00:00.000Z"
  }
];


// const seedRegionData = async()=>{
//   await Region.deleteMany({});
//   await Region.insertMany(dummyRegions);
//   console.log("Data Inserted Successfullys");
// }

  
  // module.exports = seedData;
  // module.exports = seedChapterData;
  // module.exports = seedRegionData;
