const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');  // This explains to the browser which kind of data is attached.
  response.write('<h1>Hello there!</h1>');  // Using HTML, with tags.
  response.end();
});

server.listen(3000);

/* Notes: the setHeader method takes two arguments: the first argument is the header identifier and the 
second argument is the value for that header. This is how I set headers in the server side Javascript. */