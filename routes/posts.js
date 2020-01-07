const express = require ('express');
const router = express.Router();

app.get('/posts', (req, res) => {
    res.send('we are on posts');
});

app.get('/specific', (req, res) => {
    res.send('we are on specific posts');
});

module.exports = router;