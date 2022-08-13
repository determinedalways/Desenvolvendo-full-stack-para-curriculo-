const email = require('../data/email.json')
const userRouter = require('../router/userRoute')

email = email.data


const userController = { index: (req,res) => {
    res.status(200).json({data:email,message:"realizada com sucesso"})
}  ,
 show: (req, res)=> {
        const { id } = req.params
        let valor
        for (let i = 0; i < user.length; i++) {
            if (email[i].id === parseInt(id)) {
                valor = user[i].id
                return res.status(200).send(valor)
            } else {
                return res.status(404).send('não foi dessa vez')
            }

        }
    },
    store: (req,res)=> {
        const {email} = req.body
        email.push({id:users.length + 1,email})
        res.status(201).json({message:"Usuário criado com sucesso"})
    }
}

module.exports = userController
