var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = (page - 1) * perPage + perPage;

    var coutProduct = db.get('products').value().length;
    console.log(coutProduct);
    var lastPage = Math.round(coutProduct / perPage);

    console.log(lastPage);

    res.render('products/index',{
        products: db.get('products').value().slice(start,end),
        
    });
};


module.exports.search = function(req, res){
    var q = req.query.q;

    var matchproducts = db.get('products').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    
    });

    res.render('products/index',{
        products: matchproducts
    });
};
