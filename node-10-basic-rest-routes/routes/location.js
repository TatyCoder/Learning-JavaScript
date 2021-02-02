// I  need to import Express in any file where I want to use it:
const express = require('express');

// To register different routes:
const router = express.Router();

// For now here I'll just use an in-memory storage (which will live as long as the server is running):
const locationStorage = {
  locations: []
};

// I can simply specify the kind of HTTP method I want to support, for example, a post method:
router.post('/add-location', (req, res, next) => {
  // To add a new location to the array:
  locationStorage.locations.push({
    id: Math.random(),  // This new location will receive an ID.
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  // I can use the json method to send back a JSON response:
  res.json({message: 'Stored location!'}); 
});

// Setting also a get route:
router.get('/location', (req, res, next) => {});

// To export both router.post/router.get:
module.exports = router;

/* Notes: for the post method I specify the path as the first argument and a function 
as the second argument which receives a request, a response and the next function. So 
it's like a middleware but filtered for a path and a specific HTTP method.
*/