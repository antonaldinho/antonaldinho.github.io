const Person = require('../models/person');

const getPersons = function(req, res) {
    Person.find({}).then(function(persons) {
        res.send(persons)
    }).catch(function(error) {
        res.status(500).send(error);
    });
};

const getPerson = function(req, res) {
    Person.findById(req.params.id).then(function(person) {
        if(!person) {
            return res.status(404).send('Person not found');
        }
        return res.send(person);
    }).catch(function(error) {
        return res.status(500).send(error);
    });
};

const createPerson = function(req, res) {
    const person = new Person(req.body);
    person.save().then(function() {
        return res.send(person);
    }).catch(function(error) {
        return res.status(400).send(error);
    });
};

const updatePerson = function(req, res) {
    const id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "father", "mother"];

    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidUpdate) {
        return res.status(400).send({
            error: "Invalid update"
        });
    }
    Person.findByIdAndUpdate(id, req.body).then(function(person) {
        if(!person) {
            return res.status(404).send();
        }
        return res.send(user);
    }).catch(function(error) {
        res.status(500).send(error);
    });
};

const deletePerson = function(req, res) {
    Person.findByIdAndDelete(req.params.id).then(function(person) {
        if(!person) {
            return res.status(404).send();
        }
        return res.send(user);
    }).catch(function(error) {
        res.status(505).send(error);
    });
};
module.exports = {
    getPersons: getPersons,
    createPerson: createPerson,
    getPerson: getPerson,
    updatePerson: updatePerson,
    deletePerson: deletePerson
};