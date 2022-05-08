require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const path = require('path');

const router = require('./routes/userRoutes');

const app = express();

mongoose.connect(
    `mongodb://localhost:27017/${ process.env.DB_NAME }`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    () => console.log('Database connected!')
);
app.use(bodyParser.json());

app.use('/users', router);

app.use( '/static', express.static(path.join(__dirname, '../dist'), { index: false }));

app.get('*', (req, res) => // changed from '/' to * -- handles all routing
{
    res.status(200).sendFile( path.join(__dirname, '../dist', 'index.html'));
});

module.exports = app;
