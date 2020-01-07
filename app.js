const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.listen(3000);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//Connect To DB
mongoose.connect(
      process.env.DB_CONNECTION,
     {useNewUrlParser: true},
     //{useUnifiedTopology: true },
     () => console.log('connected to DB!'));