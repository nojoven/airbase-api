const mongoclient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb');

function getId(req, res) {
    let idVal = req.query.name;
    mongoclient.connect('mongodb://localhost:27017/airbase', function (err, client) {
        if (err) {
            throw err;
        }
        client.db('airbase').collection('airports').find({_id:ObjectId(idVal)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getId;