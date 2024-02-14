const MongoClient = require('mongodb').MongoClient

async function connectToMongo() {
    const client = await MongoClient.connect("mongodb://localhost:27017/sampledb")
    return client;
}

module.exports = connectToMongo; 
