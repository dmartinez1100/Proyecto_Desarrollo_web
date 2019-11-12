"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ReceiptSchema = Schema({
    name:String,
    description:String,
    ingredients:String,
})

module.exports = mongoose.model('receipt',UserSchema);