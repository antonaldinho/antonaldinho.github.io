const omdb = require('./omdb.js');
const title = 'game of thrones';

omdb.omdbMovie(title);
omdb.omdbSeason(title, 1);