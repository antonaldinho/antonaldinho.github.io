const express = require('express')
const User = require('./models/user')
const router = express.Router()

const users = require('./controllers/users.js')
const auth = require('./middleware/auth')

router.get('/users/:id', users.getUser)
router.get('/users', auth, users.getUsers)
router.post('/users/login', users.login)
router.post('/users', users.createUser)
router.patch('/users/:id', users.updateUser)
router.delete('/users/:id', users.deleteUser)

module.exports = router

