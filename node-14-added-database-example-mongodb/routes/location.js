const express = require('express');
// To import 'MongoDB':
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();

// To use a real database, I need a connection URL:
const url =
  'mongodb+srv://maximilian:MfwKGzkrovQHJGbf@cluster0-ntrwp.mongodb.net/locations?retryWrites=true&w=majority';

// I need to create a Mongo client:
const client = new MongoClient(url);

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();  // I don't need an ID anymore, because MongoDB will create an ID automatically.
  client.connect(function(err, client) {
    const db = client.db('locations');  // Here I get access to the database.

    // Insert a single document:
    db.collection('user-locations').insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng }
      },
      function(err, r) {
        // if (err) {}  // Not checking errors to make it simple.
        console.log(r);  // Logs the result.
        res.json({ message: 'Stored location!', locId: r.insertedId });  // That's what I want to send back to the client.
      }
    );
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng }
  // });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;

  client.connect(function(err, client) {
    const db = client.db('locations');

    // Find a single document:
    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectId(locationId)
      },
      function(err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

module.exports = router;
