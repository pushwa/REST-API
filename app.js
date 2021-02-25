const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv/config');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Import middleware
const postsRoutes = require('./routes/posts');

// Use middleware
app.use('/posts', postsRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);

app.listen(3000);
