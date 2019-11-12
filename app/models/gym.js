"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var GymSchema = Schema({
    name:String,
    location:String,
})

module.exports = mongoose.model('gym',UserSchema);