require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATABASE = process.env.DB_DATABASE
const AUTH_PASS = process.env.AUTH_PASS
const AUTH_USER = process.env.AUTH_USER

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_DATABASE,
    AUTH_USER,
    AUTH_PASS,
}
