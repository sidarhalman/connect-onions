require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser =  require('body-parser');
const app = express();

const userRouter = require('./routes/userRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);

module.exports = app;
