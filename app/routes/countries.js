const mongoclient = require('mongodb').MongoClient;

function getCountry(req, res) {
    let countryName = req.query.name;
    mongoclient.connect('process.env.MONGODB_URI || "mongodb://localhost:27017/airbase', function (err, client) {
        if (err) {
            throw err;
        }
        client.db('airbase').collection('airports').find({country:countryName.charAt(0).toUpperCase() + countryName.slice(1)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getCountry;