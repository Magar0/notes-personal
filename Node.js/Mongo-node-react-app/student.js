const connectToMongo = require('./mongo/index')
const express = require('express');

const router = express.Router()

router.get("/", async (req, res) => {
    const client = await connectToMongo();
    console.log(client);
    const db = client.db();
    const result = await db.collection("student").find({}, { projection: { name: 1, age: 1, _id: 0 } }).toArray()
    console.log(result);
    res.status(200).json(result);
})

router.post("/", async (req, res) => {
    const client = await connectToMongo();
    const db = client.db();      //if db not mention in string, db("sampledb")
    db.collection("student").insertOne(req.body);
    res.send(201);
})


module.exports = router;