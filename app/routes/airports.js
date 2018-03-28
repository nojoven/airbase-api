const mongoclient = require('mongodb').MongoClient;

function getAllAirports(req, res) {
  mongoclient.connect(process.env.MONGODB_URI, function (err, client) {
    if (err) {
      throw err;
    }
    client.db('airbase').collection('airports').find().toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
}

module.exports = getAllAirports;