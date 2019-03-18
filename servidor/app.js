const path = require('path');
const express = require('express');
var app = express();

const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));


app.get('/about', function(req, res) {
    res.send('About');
});

app.get('/contactanos', function(req, res) {
    res.send('contactanos bro');
});

app.listen(3000, function() {
    console.log('up and running');
});