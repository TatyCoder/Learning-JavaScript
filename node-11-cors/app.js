const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

// Adding extra headers:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  // The star means that any other server can send a request.
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');  // Because I have post and get routes. The add location request has a method of Options.
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Here I define which headers the client might send.
  next();  // I should call next here so that the request is able to continue to the locationRoutes.
});

app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName
//   });
// });

app.listen(3000);

/* Notes: always on the backend when I have CORS issues, I have to set some extra headers 
that signal to the browser that I'm allowing access from the other page (the frontend).
*/