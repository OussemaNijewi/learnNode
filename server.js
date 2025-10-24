const http = require('http');

// the callback function inside createServer() 
// runs every time a request has been made to the server

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello, Oussema</h1>');
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});