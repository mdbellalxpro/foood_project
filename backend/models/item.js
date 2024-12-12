
// create schema file
const mongoose = require('mongoose');

const productData = new mongoose.Schema({
  name:  { type: String, required:true},
  description: { type: String, required: true},
  price: { type: Number },
  image: { type: String, required: true},
  rating: { type: Number,},
  size: { type: Number},
  weedData: { type: Number},
});

module.exports = mongoose.model('Item', productData);

