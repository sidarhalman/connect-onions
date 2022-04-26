require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const path = require('path');
const app = express();

const router = require('./routes/userRoutes');

mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    () => console.log('Database connected!')
);

app.use( '/static', express.static(path.join(__dirname, '../dist'), { index: false }));

app.get('*', (req, res) => // changed from '/' to * -- handles all routing
{
    res.status(200).sendFile( path.join(__dirname, '../dist', 'index.html'));
});

app.use('/users', router);

module.exports = app;
