var User = require('../models/user.model');
var shortid = require('shortid');

module.exports.index = async function(req, res){

    var users = await User.find();
    res.render('users/index',{
        users: users
    });
};


module.exports.search = async function(req, res){
    var q = req.query.q;

    var users = User.find();
    var matchUsers = users.filter(function(user){
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

module.exports.get = async function(req, res){
    //  var id = parseInt(req.params.id); //parseInt khi so sanh id voi so
       var id = req.params.id;
      
   //   console.log(typeof id);
    var user = await User.findOne({ id });
      
      console.log(user);
      res.render('users/view',{
          user: user
      });
  };

  module.exports.postCreate = async function(req, res){
    console.log(req.body);
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    var users = await User.find();

    // db.get('users')//Khong can .value() khi post
    // .push(req.body)
    // .write()
    await users.create(req.body);
    
    //create xong thi chuyen huong sang trang Users
    res.redirect('/users');
   };