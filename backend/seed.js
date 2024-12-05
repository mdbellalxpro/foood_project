// seed.js
const mongoose = require('mongoose');
const Item = require('./models/item'); // Import the Item model

mongoose.connect('mongodb://localhost:27017/searchDB', {
});

const seedItems = async () => {
  await Item.deleteMany({});
  await Item.insertMany([
    
    {
      "name": "Pizza 1",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 20,
      "image": "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Pizza 2",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 25,
      "image": "https://i.postimg.cc/B63gJNKV/pizza2.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Pizza 3",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 15,
      "image": "https://i.postimg.cc/J06ccLdf/pizza3.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Pizza 4",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 40,
      "image": "https://i.postimg.cc/BbQBK6N5/pizza4.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Berger 1",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 30,
      "image": "https://i.postimg.cc/cCsXBT1n/barger1.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Berger 2",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 40,
      "image": "https://i.postimg.cc/zfK7m4Vh/barger2.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Berger 3",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 10,
      "image": "https://i.postimg.cc/htHs5KPg/barger3.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Berger 4",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 30,
      "image": "https://i.postimg.cc/rwdgjDTQ/barger4.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },

    {
      "name": "Briyani 1",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 30,
      "image": "https://i.postimg.cc/QC0S45Vn/briyani.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Briyani 2",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 40,
      "image": "https://i.postimg.cc/gcDM294q/briyani1.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Briyani 3",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 10,
      "image": "https://i.postimg.cc/VLkKS7Vy/briyani2.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
    {
      "name": "Briyani 4",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
      "price": 30,
      "image": "https://i.postimg.cc/QxY0cp2F/briyani3.jpg",
      "rating": 4.8,
      "size": "Small",
      "weedData": "Indica"
    },
    
  ]);
  mongoose.connection.close();
};

seedItems();
