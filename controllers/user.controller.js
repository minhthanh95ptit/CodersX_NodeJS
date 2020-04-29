var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
    });
};


module.exports.search = function(req, res){
    var q = req.query.q;

    var matchUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    
    });

    res.render('users/index',{
        users: matchUsers
    });
};

module.exports.create = function(req, res){
    console.log(req.cookies);
    res.render('users/create');
};

module.exports.get = function(req, res){
    //  var id = parseInt(req.params.id); //parseInt khi so sanh id voi so
       var id = req.params.id;
      
   //   console.log(typeof id);
      var user = db.get('users').find({ id: id}).value();
      
      console.log(user);
      res.render('users/view',{
          user: user
      });
  };

  module.exports.postCreate = function(req, res){
    console.log(req.body);
    req.body.id = shortid.generate();
    
    db.get('users')//Khong can .value() khi post
    .push(req.body)
    .write()
    
    //create xong thi chuyen huong sang trang Users
    res.redirect('/users');
   };