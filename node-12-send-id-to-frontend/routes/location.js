const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  // Generating my ID here and store it in a constant:
  const id = Math.random();
  locationStorage.locations.push({
    id: id,  // Refering to the ID constant here.
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  res.json({message: 'Stored location!', locId: id});  // Sending the ID back in the response.
});

router.get('/location', (req, res, next) => {});

module.exports = router;

/* Notes: sending back the ID to the client (the frontend) so that on the client, I can encode it in the URL.
*/