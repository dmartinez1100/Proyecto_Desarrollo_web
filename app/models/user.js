"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name:String,
    id:String,
    password:String,
    genre:String,
    email:String,
    birthday:String,
    gym:String,
    photo:String
})

module.exports = mongoose.model('user',UserSchema);