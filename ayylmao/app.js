const omdb = require('./omdb.js')

const title = 'Eternalsunshine of the spotless mind'

omdb.omdbMovie(title, function(error, response) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(response);
        //omdb.omdbSeason(response.title, response.seasons, function(eror, response))
    }
})

omdb.omdbMovie(title);