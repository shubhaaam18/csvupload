const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Retrieve MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', function(){
    console.log('Database connected to the server successfully!');
});

module.exports = db;
