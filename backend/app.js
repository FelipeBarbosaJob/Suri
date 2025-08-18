const express = require('express');
const cors = require('cors');
const boletoRoutes = require('./routes/boletoRoutes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', boletoRoutes);

module.exports = app;
