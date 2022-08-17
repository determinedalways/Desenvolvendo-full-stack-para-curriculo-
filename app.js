const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const userRoute= require('./public/src/router/userRoute')
const indexRoute = require('./public/src/router/indexRoute')
const userController = require('../Desenvolvendo-full-stack-para-curriculo-/public/src/Controllers/UserControllers')

const Person = require("./models/Person")

app.use(express.static(__dirname + "/public"))
app.set('view engine','ejs')
app.set('views')
app.use(express.json())
app.use(indexRoute)
app.use(userRoute)
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views',__dirname + "/src/views")

app.get("/",userController.index)

app.listen(3000,()=> console.log("Deu certo"))
