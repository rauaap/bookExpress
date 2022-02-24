const bookRouter = require('express').Router();

bookRouter.use('/', (req, res) => {
    res.status(200).json({hello: 'world'})
})

module.exports = bookRouter
