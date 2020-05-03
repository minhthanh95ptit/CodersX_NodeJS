require('dotenv').config();

console.log(process.env.SESSION_SECRECT);
var express = require('express');
var bodyParser = require('body-parser');
var csurf = require('csurf');
var  mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var cookieParser = require('cookie-parser');
var transferRoute = require('./routes/transfer.route');

var apiProductRoute = require('./api/routes/product.route');


var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');




var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser((process.env.SESSION_SECRECT)));
app.use(sessionMiddleware);
// app.use(csurf({ cookie: true }));

app.use(express.static('public'));

app.get('/',authMiddleware.requireAuth, function(req, res){
    res.render('index',{
        name: 'Hello CodersX'
    });
})

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

app.use('/api/products', apiProductRoute);

app.listen(port,function(){
    console.log('Listening in port' + port);
});