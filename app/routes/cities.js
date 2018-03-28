const mongoclient = require('mongodb').MongoClient;

function getCity(req, res) {
    let cityName = req.query.name;
    mongoclient.connect(process.env.MONGODB_URI, function (err, client) {
        if (err) {
            throw err;
        }
        client.db('airbase').collection('airports').find({city:cityName.charAt(0).toUpperCase() + cityName.slice(1)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getCity;