const auth = function(req, res, next) {
    const token = req.header('Authorization');
}

module.exports = {
    auth: auth
}