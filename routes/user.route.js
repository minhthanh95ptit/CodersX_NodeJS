var express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate.js');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.middleware');
var multer = require('multer');

var upload = multer({ dest: './public/uploads/'});

// router.get('/cookie', function(req, res, next){
//     res.cookie('userId',12345);
//     res.send('Hello');
// });

// router.get('/',authMiddleware.requireAuth,controller.index );

// router.get('/search',authMiddleware.requireAuth, controller.search);

// router.get('/create',authMiddleware.requireAuth, controller.create);

// router.get('/:id', authMiddleware.requireAuth, controller.get);

router.get('/',controller.index );

router.get('/search',controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', 
    upload.single('avatar'),
    authMiddleware.requireAuth,
    validate.postCreate,
    controller.postCreate
);

module.exports = router;