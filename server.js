const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','home.html')); 
});

const bookRoutes = require('./routes/bookRoutes');

app.use('/book', bookRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Listening to 3000')
})