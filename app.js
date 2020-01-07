const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
    'mongodb+srv://Rest:<tharaka@95>@cluster0-cqbu4.gcp.mongodb.net/test?retryWrites=true&w=majority',
     {useNewUrlParser: true},
     //{useUnifiedTopology: true },
     () => console.log('connected to DB!'));