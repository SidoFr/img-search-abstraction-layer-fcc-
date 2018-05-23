const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers/controllers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// search url
app.get('/api/search/*', controllers.getImages);
// search for most recent search
app.get('/api/latest', controllers.getLatest);


module.exports = app;