var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

exports.create = async (data) => {
    var customer = new Customer(data)
    await customer.save();
}