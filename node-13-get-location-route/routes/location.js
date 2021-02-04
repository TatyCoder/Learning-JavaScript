const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  res.json({ message: 'Stored location!', locId: id });
});

// By adding a colon here and then any identifier of my choice, I tell Express.js that I have a dynamic segment:
router.get('/location/:lid', (req, res, next) => {
  // To retrieve the locationId:
  const locationId = +req.params.lid;  // This will be the data which is part of the URL. + converts the string to a number.
  // To get the location by that ID:
  const location = locationStorage.locations.find(loc => {
    return loc.id === locationId;  // This returns true if I find the right location.
  });
  if (!location) {  // If location is falsy I return an error response to the frontend.
    return res.status(404).json({ message: 'Not found!' });
  }
  res.json({ address: location.address, coordinates: location.coords });  // To send the response of my location data.
});

module.exports = router;
