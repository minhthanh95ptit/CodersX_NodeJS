var Product = require('../models/product.model');
var shortid = require('shortid');

module.exports.index = async function(req, res){
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = (page - 1) * perPage + perPage;

    var coutProduct = await Product.count();
    
    console.log(coutProduct);
    var lastPage = Math.round(coutProduct / perPage);

    console.log(lastPage);

    var products = await Product.find();
    res.render('products/index',{
        products: products.slice(start,end),
        firstPage: '1',
        page: page,
        lastPage: lastPage
    });
 
};


module.exports.search = async function(req, res){
    var q = req.query.q;
    var products = await Product.find();

    var matchproducts = products.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    
    });

    res.render('products/index',{
        products: matchproducts
    });
};
