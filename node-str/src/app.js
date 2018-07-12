const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexão banco
mongoose.connect('mongodb://naraku:thcatim12@ds133601.mlab.com:33601/ndstr');

// carrega os models
const Product = require('./models/product');

//rotas
const indexRoute = require('./routes/indexRoute');
const productsRoute = require('./routes/productsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/',indexRoute);
app.use('/products', productsRoute);

module.exports = app;