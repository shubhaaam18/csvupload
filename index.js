const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
const bodyParser = require('body-parser'); // Import body parsing middleware

dotenv.config({ path: 'config/.env' });
app.use(expressLayouts);
app.use(cors()); // CORS middleware
app.use(bodyParser.urlencoded({ extended: true })); // Use body parsing middleware for URL-encoded data

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./routes/csvRoutes'));

// Server listening
app.listen(PORT, (err) => {
    if(err) console.log("Error listening on", PORT);
    console.log('Listening on port', PORT);
});
