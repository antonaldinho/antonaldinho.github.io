const express = require('express');
const router = express.Router();

const persons = require('./controllers/persons');

router.get('/persons', persons.getPersons);
router.post('/persons', persons.createPerson);
router.get('/persons/:id', persons.getPerson);
router.patch('/persons/:id', persons.updatePerson);
router.delete('/persons/:id', persons.deletePerson);

module.exports = router;