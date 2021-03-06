//Codigo por Jose Antonio Aleman
//A01196565
//Desarrollo de Aplicaciones Web
const weather = require('./weather.js');
const path = require('path');
const express = require('express');

const app = express();

const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.send({
        response: 'Welcome to the Antonio Ultimate Weather API'
    })
})
app.get('/weather', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(!req.query.city) {
        return res.send({
            error: 'Parameter city not found'
        })
    }
    else {
        weather.getCoordinates(req.query.city, function(error, response) {
            if(error) {
                return res.send({
                    error: error
                })
            }
            else {
                const latitude = response.lat;
                const longitude = response.long;
                const place = response.place;
                
                weather.getForecast(latitude, longitude, function(error, response) {
                    if(error) {
                        return res.send({
                            error: error
                        })
                    }
                    else {
                        const forecast = 'Actualmente esta a ' + response.temperature + '°C' + ' y ' + response.summary + '. Hay un ' + response.precipitation + '% de probablidad de lluvia.';
                        res.send({
                            location: place,
                            weather: forecast
                        })
                    }
                })
            }
        })
    }
})

app.listen(3000, function() {
    console.log('up and running')
})