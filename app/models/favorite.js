"user strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var FavoriteSchema = Schema({
    user:{type:Schema.ObjectId,ref:'User'},
    exercise:{type:Schema.ObjectId,ref:'Exercise'},
    item:{type:Schema.ObjectId,ref:'Item'},
    receipt:{type:Schema.ObjectId,ref:'Receipt'},
})

module.exports = mongoose.model('favorite',UserSchema);