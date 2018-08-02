var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();
var router = express.Router();

//conexão com o banco de dados
mongoose.connect(config.connectionString, {useNewUrlParser: true}); // Talvez surga problemas com a conexão com o banco. Tente usar o banco na máquina local.

// carregamento dos models
var Product = require('./models/product');
var Customer = require('./models/customer');
var Order = require('./models/order');

//rotas
var indexRoute = require('./routes/indexRoute');
var productsRoute = require('./routes/productsRoute');
var customerRoute = require('./routes/customerRoute');
var orderRoute = require('./routes/orderRoute');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;