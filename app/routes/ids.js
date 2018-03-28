const mongoclient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb');

function getId(req, res) {
    let idVal = req.query.name;
    mongoclient.connect(process.env.MONGODB_URI, function (err, client) {
        if (err) {
            throw err;
        }
        client.db('heroku_8618v047').collection('airports').find({_id:ObjectId(idVal)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    });
}

module.exports = getId;