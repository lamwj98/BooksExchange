const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;
let apiRoutes = require("./routes/apiRoutes");
require('dotenv').config()

mongoose.connect(
  process.env.MONGO_URL, 
  {
      dbName: process.env.DB_NAME
  }
);

var db = mongoose.connection;
if(!db) {
    console.log("Error connecting db")
} else {
  console.log("Db connected successfully")
}

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use('/api', apiRoutes);

app.listen(port,() => console.log(`Server listening at port ${port}`));