const http = require('http');

// the callback function inside createServer() 
// runs every time a request has been made to the server

const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});