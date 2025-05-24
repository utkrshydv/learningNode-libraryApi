const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/library'
const mongoURL = process.env.ATLAS_URL;
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log("Connected to MongoDB server");
})

db.on('disconnected', () => {
  console.log("Disconnected from MongoDB server");
})

db.on("error", (err) => {
  console.log(err)
})

module.exports = db;