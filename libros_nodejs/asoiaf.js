//funciones que vamos a exportar
const fs = require('fs');

const loadBooks = function() {
    try {
        const bufferData = fs.readFileSync('json.json');
        const parsedData = JSON.parse(bufferData);
        return parsedData;
    }
    catch (err) {
        return [];
    }
}

const saveBooks = function(books) {
    const dataJSON = JSON.stringify(books);
    fs.writeFileSync('json.json', dataJSON);
}

const addBook = function(title, author, date, chapters) {
    const books = loadBooks();
    const duplicateBooks = books.filter(function (book) {
        return book.title === title;
    });
    if(duplicateBooks.length === 0) {
        books.push({
            title: title,
            author: author,
            date: date,
            chapters: chapters
        })
        saveBooks(books);
        console.log(`"${title}" by ${author} was already saved!`)
    }
}


module.exports = {
    loadBooks: loadBooks,
    addBook: addBook,
    saveBooks, saveBooks
}