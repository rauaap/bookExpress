const routerFactory = require('./routerFactory')
const book = require('../models/book_model');

router = routerFactory(book)

module.exports = router;
