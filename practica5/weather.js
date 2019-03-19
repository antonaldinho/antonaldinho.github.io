//Codigo por Jose Antonio Aleman
//A01196565
//Desarrollo de Aplicaciones Web
const request = require('request');
const credentials = require('./credentials.js');

/*
const getCoordinates = function(parameter) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ parameter + '.json?access_token=' + credentials.coordKey;
    request({url: url, json: true}, function(error, response) {
        //console.log(response.body.features[0].center[0]);
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        const coordinates = latitude + ',' + longitude;
        getForecast(coordinates);
    });
}

const getForecast = function(coord) {
    const url = 'https://api.darksky.net/forecast/' + credentials.darkskyKey + '/' + coord + '?exclude=[minutely, hourly, daily]&lang=es&units=si';
    request({url: url, json: true}, function(error, response) {
        const data = response.body.currently;
        console.log('Actualmente esta a ' + data.temperature + '°C' + ' y ' + data.summary + '. Hay un ' + data.precipProbability + '% de probablidad de lluvia.');
    });
}
*/

function getForecast (coord) {
    const url = 'https://api.darksky.net/forecast/' + credentials.darkskyKey + '/' + coord + '?exclude=[minutely, hourly, daily]&lang=es&units=si';
    request({url: url, json: true}, function(error, response) {
        const data = response.body.currently;
        console.log('Actualmente esta a ' + data.temperature + '°C' + ' y ' + data.summary + '. Hay un ' + data.precipProbability + '% de probablidad de lluvia.');
    });
}

function getCoordinates (callback, parameter) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ parameter + '.json?access_token=' + credentials.coordKey;
    request({url: url, json: true}, function(error, response) {
        //console.log(response.body.features[0].center[0]);
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        const coordinates = latitude + ',' + longitude;
        callback(coordinates);
    });
}

const getWeather = function(city) {
    getCoordinates(getForecast, city);
}

module.exports = {
    getWeather: getWeather
}