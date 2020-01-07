const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.listen(3000);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

app.get('/posts', (req, res) => {
    res.send('we are on posts');
});

//Connect To DB
mongoose.connect(
      process.env.DB_CONNECTION,
     {useNewUrlParser: true},
     //{useUnifiedTopology: true },
     () => console.log('connected to DB!'));