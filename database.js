const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_DATABASE
})

module.exports = connection
