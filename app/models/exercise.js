"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ExerciseSchema = Schema({
    name:String,
    category:String,
    description:String,
    video:String,
})

module.exports = mongoose.model('exercise',UserSchema);