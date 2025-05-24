const mongoose = require('mongoose');

const bookItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  publishedYear:{
    type: Number,
    required: true,
    min: 1450
  },
  copiesSold:{
    type: Number,
    default: 0,
    min: 0
  },
  genres: [{
    type: String,
    enum: ['funny','fiction', 'non-fiction', 'mystery','fantasy', 
      'romance', 'sci-fi', 'biography', 'history', 'thriller', 'self-help']
  }],
  isbn: {
    type: String, 
    required: true
  }, 
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
}, { timestamps: true});

const BookItem = mongoose.model('BookItem', bookItemSchema, 'books');

module.exports = BookItem;