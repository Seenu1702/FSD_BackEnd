//import the http library

const http = require('http');

//create a simple web server

const app = http.createServer((request, response) =>{
    response.writeHead(200, { 'content-Type' : 'text/plain'});
    response.end('Hello World!');

});

const PORT = 3001;
//make the server to listen the http requests
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
