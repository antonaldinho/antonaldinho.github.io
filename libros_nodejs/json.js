
const fs = require('fs');
/*
const book = {
    title: 'Game of thrones',
    author: 'G. R. R. Martin'
}

const bookString = JSON.stringify(book);
fs.writeFileSync('json.json', bookString);

//-------------------------------------------------------------------------

const bufferData = fs.readFileSync('json.json');
console.log(bufferData);

const parsedData = JSON.parse(bufferData);
console.log(parsedData.title);
*/

const bufferData = fs.readFileSync('user.json');
const user = JSON.parse(bufferData);
user.nombre = "Antonio Aleman";
user.age = 21;
user.mail = "antonioaleman@tec.mx";
fs.writeFileSync('user.json', JSON.stringify(user));