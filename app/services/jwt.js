"use strict"

var jwt = require("jwt-simple")
var moment = require("moment")
var secret = "gymsus123"

function createToken(user){
    var payload = {
        sub: user._id,
        name: user.name,
        genre:user.genre,
        gym:user.gym,
        birthday:user.birthday,
        email:user.email,
        iat:moment().unix(),
        exp:moment("30","days").unix()
    }
    return jwt.encode(payload,secret)
}

module.exports = {createToken}