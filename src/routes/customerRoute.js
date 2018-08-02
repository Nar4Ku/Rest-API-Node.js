var express = require('express');
var router = express.Router();
var controller = require('../controller/customerController');

router.post('/', controller.post);

module.exports = router;