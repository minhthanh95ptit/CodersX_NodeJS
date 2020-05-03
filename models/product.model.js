var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    // Nho la k co field Id dau vi Mongo tu sinh Id

    name: String,
    image: String,
    description: String,

});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;