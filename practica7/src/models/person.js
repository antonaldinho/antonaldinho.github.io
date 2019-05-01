const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    born: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    alliegance: [String],
    playedBy: String,
    titles: [String],
    father: String,
    mother: String,
    spouse: String
});


const Person = mongoose.model('Person', personSchema);
module.exports = Person;