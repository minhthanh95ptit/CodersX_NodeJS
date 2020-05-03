var shortid = require('shortid');

var Trafer = require('../models/tranfer.model');

module.exports.create = function(req, res, next) {
  res.render('transfer/create', {
    csrfToken: req.csrfToken()
  });
};

module.exports.postCreate = async function(req, res, next) {
  var data = {
    id: shortid.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId: req.signedCookies.userId
  };
  
  await Trafer.create(data);
  res.redirect('/transfer/create');
};