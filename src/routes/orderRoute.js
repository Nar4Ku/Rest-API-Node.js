var express = require('express');
var router = express.Router();
var controller = require('../controller/orderController');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;