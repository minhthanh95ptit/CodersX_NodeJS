var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

var port = 3000;

app.get('/', function(req, res){
    res.render('index',{
        name: 'Pham Minh Thanh'
    });
})


app.get('/users', function(req, res){
    res.render('users/index',{
        users: [
            {id: 1,name: 'Pham Minh Thanh'},
            {id: 2,name: 'Pham Minh Thu'},
        ]
    });
})

app.listen(port,function(){
    console.log('Listening in port' + port);
});