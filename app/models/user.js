"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name:String,
    email:String,
    image:String,
    password:String,
    gym:String,
})

module.exports = mongoose.model('user',UserSchema);