var express = require('express');
var bodyParser = require('body-parser');
var low = require('lowdb');
var shortid = require('shortid');
var app = express();


var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);

db.defaults({users: []})
    .write();

var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function(req, res){
    res.render('index',{
        name: 'Hello CodersX'
    });
})


app.get('/users', function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
    });
})

app.get('/users/search', function(req, res){
    var q = req.query.q;

    var matchUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;    
    });

    res.render('users/index',{
        users: matchUsers
    });
});


app.get('/users/create', function(req, res){
    res.render('users/create');
});

app.get('/users/:id', function(req, res){
  //  var id = parseInt(req.params.id); //parseInt khi so sanh id voi so
     var id = req.params.id;
     console.log(req);
 //   console.log(typeof id);
    var user = db.get('users').find({ id: id}).value();
    
    console.log(user);
    res.render('users/view',{
        user: user
    })
})


app.post('/users/create', function(req, res){
    console.log(req.body);
    req.body.id = shortid.generate();
    db.get('users')//Khong can .value() khi post
    .push(req.body)
    .write()
    
    //create xong thi chuyen huong sang trang Users
    res.redirect('/users');
});

app.listen(port,function(){
    console.log('Listening in port' + port);
});