const express = require('express');

//express app
const app = express();

// listen for requests on locolhost port 3000
app.listen(3000);

// respond to get request
app.get('/', (req, res) => {
    res.send('<p>home page</p>');
});