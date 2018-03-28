const mongoclient = require('mongodb').MongoClient;

function getAllAirports(req, res) {
  mongoclient.connect("mongodb://heroku_8618v047:s1s95q848cfnk2gi07ksuri2ov@ds119018.mlab.com:19018/heroku_8618v047", function (err, client) {
    if (err) {
      throw err;
    }
    client.db('heroku_8618v047').collection('airports').find().toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
}

module.exports = getAllAirports;