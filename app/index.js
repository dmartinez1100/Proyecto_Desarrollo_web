'use strict'

var mongose = require('mongoose')
var app = require('./app')
var port = 3800;

mongose.Promise = global.Promise;
mongose.connect("mongodb://localhost:27017/GoUp",{useMongoClient:true})
.then(()=>{
    console.log("conexion exitosa");
    app.listen(port,()=>{
        console.log("servidor corriendoo, port = 3800, vienvenido a Go_Up!")
    })
})
.catch(err => console.log(err))
