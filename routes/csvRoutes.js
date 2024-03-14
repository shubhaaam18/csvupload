// Importing the required modules
const express = require('express'); // Importing Express.js framework
const router = express.Router(); // Creating a router instance from Express.js
const multer = require('multer'); // Importing Multer for handling file uploads

// Importing controller modules
const homeController = require('../controllers/home_controller'); // Importing home controller
const csvController = require('../controllers/csv_controller'); // Importing CSV controller

// Configuring Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Setting the destination directory for uploaded files

// Routes definition
router.get('/', homeController.home); // Route for the home page
router.get('/csv/:id', csvController.view); // Route for viewing a CSV file
router.post('/upload', upload.single('csv'), csvController.upload); // Route for uploading a CSV file

// Exporting the router
module.exports = router;
