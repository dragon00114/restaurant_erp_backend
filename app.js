
const express = require('express');
const app = express();


// const bodyParser = require('body-parser');
const cors = require('cors');
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes');
app.use(routes);

module.exports = app;
