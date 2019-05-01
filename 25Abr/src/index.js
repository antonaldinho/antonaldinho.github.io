const express = require('express');
require('./db/mongoose');
const router = require('./routes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const test = function() {
  const password = 'qwerty123456'
  const hash = bcrypt.hashSync(password, 8);

  console.log(password)
  console.log(hash)

  console.log(bcrypt.compareSync("qwerty123456", hash)) // true
  console.log(bcrypt.compareSync("not_bacon", hash)) // false
}

test()

const test2 = function() {
  const token = jwt.sign({_id: 'dummy'}, )
}
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()) // parsea a json
app.use(router)


app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})
