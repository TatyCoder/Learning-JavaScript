const express = require('express');
const bodyParser = require('body-parser');

// // To import the file where both router.post/router.get are:
const locationRoutes = require('./routes/location');  // Here I can omit the file extension (.js).

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// Now exchanging and parsing JSON data:
app.use(bodyParser.json());

// I need to register a new middleware to tell Express that it should consider these location routes:
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
