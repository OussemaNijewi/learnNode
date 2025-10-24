const http = require('http');
const fs = require('fs');

// the callback function inside createServer() 
// runs every time a request has been made to the server

const server = http.createServer((req, res) => {

    //set response packet header content type
    res.setHeader('Content-Type', 'text/html');

    //send html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});