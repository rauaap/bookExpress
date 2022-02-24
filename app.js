const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const bookRouter = require('./routes/book')
const borrowerRouter = require('./routes/borrower')
const userRouter = require('./routes/user')

const auth = require('./auth')
const database = require('./database')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(auth)
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/borrower', borrowerRouter)
app.use('/book', bookRouter)
app.use('/user', userRouter)

module.exports = app;
