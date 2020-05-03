var mongoose = require('mongoose');

var tranferSchema = new mongoose.Schema({
    amount: Number,
    accountId: String,
    userId: String

});

var Tranfer = mongoose.model('Tranfer', tranferSchema, 'tranfers');

module.exports = Tranfer;