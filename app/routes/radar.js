const mongoclient = require('mongodb').MongoClient;

function getAirportsRadar(req, res) {
    let coords = req.query.coords.split(",");

    let latRange = [parseFloat(coords[0]) - 0.1, parseFloat(coords[0]) + 0.1];
    let lonRange = [parseFloat(coords[1]) - 0.1, parseFloat(coords[1]) + 0.1];


    mongoclient.connect('process.env.MONGODB_URI || "mongodb://localhost:27017/airbase', function (err, client) {
        if (err) {
            throw err;
        }
        client.db('airbase').collection('airports').find({
            $and: [{
                lat: {
                    $gt: latRange[0],
                    $lt: latRange[1]
                }, 
                lon: {
                    $gt: lonRange[0],
                    $lt: lonRange[1]
                }, 
            }]
        }).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getAirportsRadar;