const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const userRoute= require('./src/router/userRoute')

const Person = require("../../models/Person")

app.use(userRoute)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/")

app.listen(3000,()=> console.log("Deu certo"))
