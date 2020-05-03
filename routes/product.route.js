var express = require('express');
var controller = require('../controllers/product.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var router = express.Router();

// router.get('/cookie', function(req, res, next){
//     res.cookie('userId',12345);
//     res.send('Hello');
// });

// router.get('/',authMiddleware.requireAuth,controller.index );
router.get('/',controller.index );


// router.get('/search',authMiddleware.requireAuth, controller.search);
router.get('/search',controller.search);

module.exports = router;