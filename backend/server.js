const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use( '/static', express.static(path.join(__dirname, '../dist'), { index: false }));

app.get('*', (req, res) => // changed from '/' to * -- handles all routing
{
    res.status(200).sendFile( path.join(__dirname, '../dist', 'index.html'));
});
app.listen(port, () => 
{
    console.log( ` server listening on ${port}` );
});
