const mongoclient = require('mongodb').MongoClient;

function getAllAirports(req, res) {
  mongoclient.connect('mongodb://localhost:27017/airbase', function(err, client) {
    if (err) {
      throw err;
    }
    client.db('airbase').collection('airports').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
}

module.exports = getAllAirports;