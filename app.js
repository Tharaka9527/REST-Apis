const express = require('express');
const app = express();

app.listen(3000);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

app.get('/posts', (req, res) => {
    res.send('we are on posts');
});