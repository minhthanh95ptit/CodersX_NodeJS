var db = require('../db');


module.exports.requireAuth = async function(req, res, next){
    console.log(req.cookies.userId,req.signedCookies.userId);

    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    var user = await User.findOne({ id : signedCookies.userId });
    if(!user){
        res.redirect('/auth/login');
        return;
    }

    res.locals.user = user;
    next();

};