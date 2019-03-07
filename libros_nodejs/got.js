const book = require('./asoiaf.js');
const libros = book.loadBooks
console.log(libros);

book.addBook('A Game of Thrones', 'GRRM', 'enero', 38);