const credentials = require('./credentials.js')
const request = require('request')

var temporada = ''
const omdbMovie = function( title, callback ) {
  const url = 'http://www.omdbapi.com/?t=' + title + 
  '&apikey=' + credentials.apikey
  request({ url, json: true }, function(error, response ) {
    if(error) {
      callback('Service unavailable', undefined);
    }
    else if (response.body.Response == false) {
      callback(response.body.Error, undefined);
    }
    else {
      const data = response.body
      const info = {
        title: data.Title,
        plot: data.Plot,
        rating: data.Ratings[0].Value,
        seasons: data.totalSeasons
      }
      callback(undefined, info);
      //omdbSeason(title, info.seasons) 
    }
  })
}

const omdbSeason = function( title, seasonNo ) {
  const url = 'http://www.omdbapi.com/?t=' + title + 
  '&Season=' + seasonNo +
  '&apikey=' + credentials.apikey 
  request({ url, json: true }, function(error, response ) {
    console.log(response.body)
  })
}


module.exports = {
  omdbMovie: omdbMovie,
  omdbSeason: omdbSeason
}





