require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected with server.'))
    .catch(() => console.log('MongoDB connection error'))

app.listen(port, () => console.log('Node server is running on PORT =>', port))