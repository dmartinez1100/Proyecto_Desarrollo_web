'use strict'

var User = require("../models/user")
var bcrypt = require("bcrypt")
var token = require("../services/jwt")
var pagination = require("mongoose-pagination")

function home(req,res){
    res.status(200).send({
        message: "Bienvenido al home de GoUp"
    })
}

function pruebas(req,res){
    res.status(200).send({
        message:"hola a la ruta de pruebas de GoUp"
    })
}

//sign up
function SaveUser(req,res){
    var params = req.body;
    var user = new User();
    //console.log(params)

    if(params.name && params.password){
        if(!params.email)return res.status(200).send({message:"Te falto un email, ¿como haras log in despues?"})
        user.name = params.name;
        user.id = params.id;
        user.genre = params.genre;
        user.email = params.email;
        user.birthday = params.birthday;
        user.gym = params.gym;
        user.photo = params.photo;
        bcrypt.hash(params.password,5,(err,hash)=>{
            user.password = hash;
            console.log("Constraseña: ",hash)
            user.save((err,userStored)=>{
                if(err){res.status(500).send({message:"error al almacenar datos"})}
                if(userStored){return res.status(200).send({user})}
                else{return res.status(404).send({message:"algo fallo, ni idea que es"})}
            })
        })
    }
    else{
        return res.status(200).send({message:"No te podemos registrar a GoUp si no envias por lo menos un usuario y una contraseña"})
    }
}
//log in
function LogIn(req,res){
    var params = req.body;
    var email = params.email;
    var password = params.password;
    if(!params.email)return res.status(404).send({message:"No ingresaste email"})
    if(!params.password)return res.status(404).send({message:"No ingresaste contraseña"})
    User.findOne({email:email},(err,user)=>{
        if(err){return res.status(500).send({message:"error al buscar usuario"})}
        if(user){
            bcrypt.compare(password,user.password,(err,check)=>{
                if(check){
                    if(params.gettoken){
                        return res.status(200).send({token:token.createToken(user)})
                    }else{
                        return res.status(200).send({user})
                    }
                }
                else{return res.status(404).send({message:"invalid password"})}
            })
        }
    })
}
//obtener usuario
function getUser(req, res){
    var userId = req.params.id;
    //console.log(req.params)
    User.findById(userId,(err, user)=>{
        if(err){
            return res.status(500).send({message:"error al consultar la base de datos"})
        }
        if(!user){
            return res.status(404).send({message:"Usuario no encontrado"})
        }
        return res.status(200).send({user})
    })
}

// Obtener varios usuarios

function getUsers(req,res){
    var identityId = req.user.sub;
    var page = 1;

    if(req.params.page){
        page = req.params.page;
    }

    var itemsPerPage = 3;

    User.find().sort("_id").paginate(page,itemsPerPage,(err,users,total)=>{
        if(err){
            return res.status(500).send({message:"ocurrio un error"})
        }
        if(!users){
            return res.status(404).send({message:"no hay usuarios para mostrar"})
        }
        return res.status(200).send({
            users: users,
            total:total,
            pages:Math.ceil(total/itemsPerPage)
        })
    })
}

module.exports = {home,pruebas,SaveUser,LogIn,getUser,getUsers}
