const http = require('http');

// Now also working with the request object:
const server = http.createServer((request, response) => {
  let body = [];  // Using a variable and not a constant because I'm going to add the data to this array.
  request.on('data', chunk => {  // To set a listener I use the on() method.
    body.push(chunk);  // This adds chunks of data to the body array.
  });
  request.on('end', () => {  // To use when I'm done receiving data.
    body = Buffer.concat(body).toString();  // To convert the chunks of data into a normal string.
    console.log(body);  // Logs in Command Prompt: username=Taty
    let userName = 'Unknown User';
    if (body) {  // If body is truthy.
      userName = body.split('=')[1];  // To take the second element of the resulting array which is the user name.
    }
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);

/* Notes: using <form> & <button> to send back HTML code which includes something that allows the user to send me a request. 
I want to have the default behavior of sending a form, so that when a button is pressed, the request is sent to the server.

The 'data' is an event that Node.js knows. And there I need to provide a second argument: chunk, which is a function that 
should execute when this event occurs.

Moving the response code into the request.on 'end' listener so that I don't send a response before I'm done parsing the data. 
*/