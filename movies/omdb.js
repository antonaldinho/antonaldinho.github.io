const credentials = require('./credentials.js');
const request = require('request');
const title = 'the mask';

const omdbMovie = function(title) {
    const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=' + credentials.apikey;
    request({url: url, json: true}, function(error, response) {
        //console.log(response.body);
        const data = response.body;
        const info = {
            titulo: data.Title,
            plot: data.plot,
            rating: data.Ratings[0].Value,
            seasons: data.totalSeasons
        }
        console.log(undefined, info);
    })
}

const omdbSeason = function(title, seasonNo) {
    const url = 'http://www.omdbapi.com/?t=' + title + '&Season=' + seasonNo +'&apikey=' + credentials.apikey;
    request({url: url, json: true}, function(error, response) {
        console.log(response.body);
    })
}

module.exports = {
    omdbMovie: omdbMovie,
    omdbSeason: omdbSeason
}