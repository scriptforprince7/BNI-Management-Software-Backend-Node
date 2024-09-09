require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/member-routes/member-routes');
const chapterRoutes = require('./routes/chapter-routes/chapter-routes');
const regionRoutes = require('./routes/region-routes/region-routes');
const port = process.env.PORT || 5000;
const connectToDatabase = require('./config/database/connect-db'); // Import the connection function

const seedData = require('./datasheet');
const seedChapterData = require('./datasheet');
const seedRegionData = require('./datasheet');
const Member = require('./modals/member/member-model');
const Chapter = require('./modals/chapter/chapter-modal');
const Region = require('./modals/region/region-modal');

seedData();
seedChapterData();
seedRegionData();
// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser);
// app.use(urlencoded)
// Connect to the database
connectToDatabase().then(() => {
  // Basic route
  app.get('/', (req, res) => {
res.json("hello")
  });

  app.use(memberRoutes);
  app.use(chapterRoutes);

  // Example route
  app.get('/getmembers', async (req, res) => {
    try {
      const members = await Member.find({});
      console.log(members); // Logs the members to the console
      res.json(members); // Sends the members as a JSON response
    } catch (error) {
      console.error('Error fetching members:', error);
      res.status(500).json({ message: 'Internal server error' }); // Sends an error response if something goes wrong
    }
  });

  app.get('/getchapters', async (req, res) => {
    try {
      const chapters = await Chapter.find({});
      console.log(chapters); // Logs the members to the console
      res.json(chapters); // Sends the members as a JSON response
    } catch (error) {
      console.error('Error fetching chapter:', error);
      res.status(500).json({ message: 'Internal server error' }); // Sends an error response if something goes wrong
    }
  });

  app.get('/getregions', async (req, res) => {
    try {
      const regions = await Region.find({});
      res.status(200).json({regions}); // Sends the members as a JSON response
    } catch (error) {
      console.error('Error fetching region:', error);
      res.status(500).json({ message: 'Internal server error' }); // Sends an error response if something goes wrong
    }
  });
  

  // Start the server after the database connection is successful
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database. Server not started.", err);
});
