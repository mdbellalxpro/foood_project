
// create schema file
const mongoose = require('mongoose');

const CrouselSchema = new mongoose.Schema({
  image: { type: String, required: true },
});

module.exports = mongoose.model('Carousel', CrouselSchema);