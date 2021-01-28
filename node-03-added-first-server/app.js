// The 'http' module it's a module that allows me to work with HttpRequests: 
const http = require('http');

// To create a server:
const server = http.createServer((request, response) => {
  response.write('hello there!');  // To write some data to the response.
  response.end();  // This will send back the response.
});

// With the server created, I need to call listen() on it:
server.listen(3000);

/* Notes: the createServer method requires a request listener, which is a function that  
triggers for every incoming request. This request listener function takes two arguments  
which are passed in automatically by Node.js: a request object and a response object. 

listen() is required to start the server, it takes the port on which I want to listen. */