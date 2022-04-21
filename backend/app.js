require('../.node_modules/dotenv/lib/main').config();
const express = require('../.node_modules/express');
const morgan = require('../.node_modules/morgan');
const bodyParser =  require('../.node_modules/body-parser');
const app = express();

const userRouter = require('./routes/userRoutes');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);

module.exports = app;
