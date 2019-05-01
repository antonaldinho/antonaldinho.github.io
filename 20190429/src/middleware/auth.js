
const auth = function(req, res, next) {
  const token = req.header('Authorization')
  console.log('token de header')
  console.log(token)
  next()
}

module.exports = auth