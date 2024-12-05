require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const itemRoutes = require('./routes/search.js')
const cors = require('cors'); 
const app = express();

// midleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/searchDB', {
    
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));
  

// Use routes
app.use('/api/items', itemRoutes);



// server runnig put
const port = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;
app.listen(port, () => console.log(`Server run http://localhost:${port}`));

