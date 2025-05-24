const express = require('express');
const router = express.Router();
const BookList = require('../models/BooksList');

// normal get and post requests

router.post('/', async (req, res) => {
  try{
    const data = req.body;
    const newBook = new BookList(data);
    const savedBook = await newBook.save();console.log('book saved');
    res.status(201).json(savedBook);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.get('/', async (req, res) => {
  try{
    const data = await BookList.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//delete, put and get requests based on isbn code

router.delete('/isbn/:isbn', async (req, res) =>{
  try{
    const isbnCode = req.params.isbn;
    const deletedBook = await BookList.findOneAndDelete({isbn: isbnCode});

    if(!deletedBook){
      return res.status(404).json({error: 'Book not found'})
    }

    res.json({message: 'Book Deleted Succesfully'});
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.get('/isbn/:isbn', async (req, res) => {
  try{
    const isbnCode = req.params.isbn;
    const book = await BookList.findOne({isbn: isbnCode});
    if(!book){
      return res.status(404).json({error: 'Book not found'});
    }
    res.status(200).json(book);
  } catch(err){
    console.log(err);
    res.status(500).json({error: "internal Server Error"});
  }
})

router.put('/isbn/:isbn', async (req, res) => {
  try{
    const isbnCode = req.params.isbn;
    const updatedBookData = req.body;

    const updatedBook = await BookList.findOneAndUpdate({isbn: isbnCode}, updatedBookData, {
      new: true,
      runValidators: true
    });

    if(!updatedBook){
      return res.status(404).json({error: 'person not found'})
    }

   res.status(200).json(updatedBook);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

//get request on genre to filter by genre

router.get('/genre/:genre', async (req, res) => {
  try{
    const genre = req.params.genre;
    const response = await BookList.find({genres: genre});

    if( response.length === 0){
      return res.status(404).json({error: 'No book found in that genre'})
    }
    console.log("response fetched");
    res.status(200).json(response);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

//get request to filter by rating

router.get('/rating/:rating', async (req, res) => {
  try{
    const rating = Number(req.params.rating);
    const response = await BookList.find({ rating: {$gte: rating} });

    if ( response.length === 0 ){
      return res.status(404).json({error: 'No Books found'});
    }

    res.status(200).json(response);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//search filter using regex (learning for the first time)

router.get('/search/:search', async (req, res) => {
 try{
  const search = req.params.search;
  const regex = new RegExp(search.split(" ").join(".*"), 'i');
  const result = await BookList.find({name: {$regex: regex}});

  if( result.length === 0) {
    return res.status(404).json({ error: 'No books found'})
  }

  res.status(200).json(result);
} catch(err){
  console.log(err);
  res.status(500).json({ error: 'Internal Server Error'})
}
})

module.exports = router;