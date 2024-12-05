
// create schema file
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: false, default: 0 }, // Rating out of 5
  size: { type: String, required: false }, // Example: "Large", "Small"
  weedData: { type: String, required: false }, // Example: "Sativa", "Indica"
});

module.exports = mongoose.model('Item', ItemSchema);
