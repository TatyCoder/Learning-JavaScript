const express = require('express');

// To import 'body-parser':
const bodyParser = require('body-parser');

const app = express();

// Adding a new middleware to parse the body:
app.use(bodyParser.urlencoded({extended: false}));  // URLencoded is the form data I'll receive. Default setting: {extended: false}.

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

// Updating this middleware:
app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User';  // Setting the userName as a constant with the input "username"; or 'Unknown User' if it's undefined.
  res.send(`<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`);
});

app.listen(3000);