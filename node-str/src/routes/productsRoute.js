var express = require('express');
var router = express.Router();
var controller = require('../controller/productsController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;