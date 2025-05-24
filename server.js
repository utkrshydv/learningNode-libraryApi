const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const db = require('./db');

app.use(express.json());

let isReady = false;

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  if (!isReady) {
    return res.send('Waking up... Please wait.');
  }
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Wait for DB connection before enabling routes and starting server
db.on('connected', () => {
  isReady = true;

  const bookRoutes = require('./routes/bookRoutes');
  app.use('/book', bookRoutes);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
