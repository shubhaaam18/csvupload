// Importing mongoose library
const mongoose = require('mongoose');

// Defining the schema for the CSV model
const csvSchema = new mongoose.Schema({
  // Defining schema for the filename field
  filename: {
    type: String, // Filename is of type String
    required: true, // Filename is required
  },
  // Defining schema for the header_row field
  header_row: {
    type: [Object], // header_row is an array of objects
  },
  // Defining schema for the data_rows field
  data_rows: {
    type: [Object], // data_rows is an array of objects
  },
}, {
  timestamps: true, // Adding timestamps for createdAt and updatedAt
});

// Creating and exporting the CSV model using the schema defined above
module.exports = mongoose.model('CSV', csvSchema);
