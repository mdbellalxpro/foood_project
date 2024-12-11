require("dotenv").config();
const mongoose = require("mongoose");
const Carousel = require("./models/carousel");

// Get the MongoDB URI from the .env file
const uri = process.env.MONGO_URI;

// Data to seed
const carouselData = [
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },
  {
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
  },

];


// Seed function
async function carouselDatabase() {
  try {
    // Connect to the MongoDB Atlas database
    await mongoose.connect(uri);
    console.log(" Connected MongoDB carousel Data");

    // Clear the collection (optional)
    await Carousel.deleteMany({});
    console.log("Existing data cleared");

    // Insert seed data
    const result = await Carousel.insertMany(carouselData);
    console.log(
      `${result.length} documents inserted into 'carouselData' database!`
    );

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
    console.log("Database connection closed");
  }
}

// run SeedDatabse 
carouselDatabase();
