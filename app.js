const express = require("express")
const app = express()
const mongoose = require ("mongoose")

const Person = require("./models/Person")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/person", async (req,res)=>{
    const {name,senha,approved} = req.body
    if(!name) {
        res.status(422).json({message: "O nome é obrigatório"})
    }

    const person = {
        name,
        senha,
        approved
    }

    try {
        await Person.create(person)
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'})

    }
    catch (error) {
        res.status(500).json({error:error})
    }

})

app.get("/",(req,res)=> {
    res.json({message:"Oi express"})
})

const DB_USER = "determinedalways"
const DB_PASSWORD = encodeURIComponent("1aA!manuel")
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.mbib1gg.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {console.log("Deu certo")
    app.listen(3000)})
    .catch((error)=> {
        console.log(error)
    })


