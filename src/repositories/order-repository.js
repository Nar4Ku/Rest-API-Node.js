var mongoose = require('mongoose');
var Order = mongoose.model('Order');

exports.get = async (data) => {
    var res = await Order
        .find({}, 'number status custumer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}
exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}