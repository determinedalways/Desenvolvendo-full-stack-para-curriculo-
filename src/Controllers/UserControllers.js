const userRouter = require('../router/userRoute')
const db = require('../config/sequelize')
const emails = require('../../models/Person')
const Sequelize = require ('sequelize')
const {Op} = require ('sequelize')


const userController = {
    index: (req, res) => {
        res.render("portifolio")
    },
    show: (req, res) => {
         
        const { id } = req.params
        let valor = ""
        for (let i = 0; i < emails.length; i++) {
            if (emails[i].id === parseInt(id)) {
                valor = emails[i]
                return res.send(valor) }

              else {
                return res.sendStatus(404).send('não foi dessa vez')
            }  

        }
    },
    store: (req, res) => {
        const { email } = req.body
        if (!email) {
            res.status(404).json({ message: "preencha todos os campos" })
        }
        email.push({ id: data.id.length + 1, emails })
        res.status(201).json({ message: "Usuário criado com sucesso" })
    },
    update: (req, res) => {
        const { id } = req.params
        console.log(req.body)
        const { email } = req.body
        const result = emails.find((email) => email.id === parseInt(id))
        if (!result) {
            return res.status(400).json({ message: "Nenhum usuário encontrado" })
        }
        const newUser = result;
        if (id) newUser.id = id;
        if (email) newUser.email = email
        return res.status(200).json({ message: "atualização criada com sucesso" })
    },

    delete: (req,res) => {
        const {id} = req.params;
        const result = emails.findIndex(email)

    }
}

module.exports = userController
