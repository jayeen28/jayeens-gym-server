const express = require('express');
const servicesRoute = require('./Routers/servicesRoute');
const instructorsRoute = require('./Routers/instructorsRoute');
const reviewsRoute = require('./Routers/reviewsRoute');
require('dotenv').config();
const cors = require('cors');

// const port = process.env.PORT || 5000;
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use(servicesRoute);
app.use(instructorsRoute);
app.use(reviewsRoute)
module.exports = app;