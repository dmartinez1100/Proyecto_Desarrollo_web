"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ItemSchema = Schema({
    category:String,
    name:String,
    price:Double,
    video:String,
})

module.exports = mongoose.model('item',UserSchema);