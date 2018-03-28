const mongoclient = require('mongodb').MongoClient;

function getCountry(req, res) {
    let countryName = req.query.name;
    mongoclient.connect("mongodb://heroku_8618v047:s1s95q848cfnk2gi07ksuri2ov@ds119018.mlab.com:19018/heroku_8618v047", function (err, client) {
        if (err) {
            throw err;
        }
        client.db('heroku_8618v047').collection('airports').find({country:countryName.charAt(0).toUpperCase() + countryName.slice(1)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getCountry;