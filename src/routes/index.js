const express = require('express');
const router = express.Router();


app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'First Website' });
});

module.exports = router;