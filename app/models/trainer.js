"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var TrainerSchema = Schema({
    name:String,
    speciality:String,
    gym:{type:Schema.ObjectId,ref:'Gym'},
    photo:String,
})

module.exports = mongoose.model('trainer',UserSchema);