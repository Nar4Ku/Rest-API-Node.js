var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.get = async () => {
    var res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getById = async (id) => {
    var res = await Product.findById(id);
    return res;
}

exports.getBySlug = async (slug) => {
    var res = await Product.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.getByTag = async (tag) => {
    var res = await Product.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id);
}