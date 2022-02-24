const routerFactory = require('./routerFactory')
const borrower = require('../models/borrower_model');

router = routerFactory(borrower)

module.exports = router;
