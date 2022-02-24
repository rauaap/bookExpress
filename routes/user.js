const routerFactory = require('./routerFactory')
const user = require('../models/user_model');

router = routerFactory(user)

module.exports = router;
