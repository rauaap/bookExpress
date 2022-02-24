const basicAuth = require('express-basic-auth');
const config = require('./config')

const myAuthorizer = (username, password) => {
    const userMatches = basicAuth.safeCompare(username, config.AUTH_USER)
    const passMatches = basicAuth.safeCompare(password, config.AUTH_PASS)
    return userMatches && passMatches
}

module.exports = basicAuth({'authorizer': myAuthorizer})
