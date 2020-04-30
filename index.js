require('dotenv').config();

console.log(process.env.SESSION_SECRECT);
var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cookieParser = require('cookie-parser');
var authMiddleware = require('./middlewares/auth.middlewares');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser((process.env.SESSION_SECRECT)));

app.use(express.static('public'));

app.get('/',authMiddleware.requireAuth, function(req, res){
    res.render('index',{
        name: 'Hello CodersX'
    });
})

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port,function(){
    console.log('Listening in port' + port);
});