const express = require('express');

//express app
const app = express();

// listen for requests on locolhost port 3000
app.listen(3000);

// respond to get request
app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page