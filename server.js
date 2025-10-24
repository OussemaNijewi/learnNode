const http = require('http');

// the callback function inside createServer() 
// runs every time a request has been made to the server

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, Oussema');
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});