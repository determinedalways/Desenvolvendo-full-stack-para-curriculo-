const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const userRoute= require('./src/router/userRoute')
const indexRoute = require('./src/router/indexRoute')
const userController = require('./src/Controllers/UserControllers')

const Person = require("./models/Person")

app.use(express.static(__dirname + "/public"))
app.set('view engine','ejs')
app.set('views')
app.set('views',__dirname + "/src/views")
app.use(express.json())
app.use(indexRoute)
app.use(userRoute)
app.use(express.urlencoded({extended:true}))

app.get("/",userController.index)

app.listen(3000,()=> console.log("Deu certo"))
