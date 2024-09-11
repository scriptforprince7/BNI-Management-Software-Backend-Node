require('dotenv').config(); // Ensure dotenv is loaded before anything else
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connectToDatabase = require('./config/database/connect-db'); // Import the connection function
const  seedChapterData=require('./datasheet')
const app = express();

const allowedOrigins = [
  'https://bnipayments.nidmm.org',
  'http://localhost:5173',
  'http://103.169.86.3:5001',
  'https://bnipayments.nidmm.org'
];

// Define CORS middleware configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's undefined (e.g., direct access)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Access denied'));
    }
  },
};

app.use(cors(corsOptions)); // Use the CORS middleware with the specified options
app.use(express.json()); // Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets'))); // Serve static files from 'assets' directory

connectToDatabase(); // Connect to the database
// seedChapterData();
// seedData();
const Member = require('./modals/member/member-model');
const Chapter = require('./modals/chapter/chapter-modal');
const Region = require('./modals/region/region-modal');
const memberRoutes = require('./routes/member-routes/member-routes');
const chapterRoutes = require('./routes/chapter-routes/chapter-routes');
const regionRoutes = require('./routes/region-routes/region-routes');

app.use('/api', memberRoutes);
app.use('/api', chapterRoutes);
app.use('/api', regionRoutes);

app.get('/api', (req, res) => {
  res.json(`Server is running on ${PORT} smoothly`);
});

const PORT = process.env.PORT || 5000;

// Start the Express server and listen for incoming requests on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
