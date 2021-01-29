// To import 'express':
const express = require('express');

// I can simply create an app by calling express like this, like a function:
const app = express();  // This gives me an app object with a lot of features and functions provided by Express.

// Adding a middleware:
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();  // To forward the request after working on its response to the next middleware in line. 
});

// Adding another middleware, here I send the response:
app.use((req, res, next) => {
  res.send('<h1>Hello World!</h1>');  // send method is new in Express.js and doesn't exist in pure Node.js
});

// To call listen:
app.listen(3000);

/* Notes: express it's a middleware-driven framework, a middleware is just a function that gets 
the request and then can do something with it. It means that Express is all about funneling the 
incoming request through a bunch of different functions which all received the request and all 
can do something with it and each function can either stop the request and send back a response, 
at which point the request will not reach any other function thereafter (any other middleware); 
or a function forwards the request to the next function, to the next middleware in line.

I can register such a middleware by using the use method on the app object and the use method 
takes a function as an argument.

I don't call next() in the second middleware because there I'm done with the response and the request.
*/