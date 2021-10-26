const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//CONNECT WITH CLUSTER
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.urbpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const run = async () => {
    try {
        await client.connect();
        const database = client.db('jayeens_gym');
        const serviceCollection = database.collection('services');
        const reviewsCollection = database.collection('reviews');
        const instructorsCollection = database.collection('instructors');
        //GET SERVICES API
        app.get('/services', async (req, res) => {
            const cursor = serviceCollection.find({});
            const services = await cursor.toArray();
            res.json(services);
        });
        //GET SINGLE SERVICE API
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: id };
            const cursor = serviceCollection.findOne(query);
            const service = await cursor;
            res.json(service);
        });
        //GET REVIEWS API
        app.get('/reviews', async (req, res) => {
            const cursor = reviewsCollection.find({})
            const reviews = await cursor.toArray();
            res.json(reviews);
        });
        //GET INSTRUCTORS API
        app.get('/instructors', async (req, res) => {
            const cursor = instructorsCollection.find({});
            const instructors = await cursor.toArray();
            res.json(instructors);
        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('node server is running')
})
app.listen(port, () => {
    console.log('node server is running on port: ', port)
})