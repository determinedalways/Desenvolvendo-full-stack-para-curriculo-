const user = [{"nome completo": "Manuel Sobrinho",
             "usuário": "juninho",
             "e-mail": "juninho_zimba-net@hotmail.com",
             "senha": "123456"
             
}]

const userController = { index: (req,res) => {
    res.send(user)
}  ,
 show: (req, res)=> {
        const { id } = req.params
        let valor
        for (let i = 0; i < user.length; i++) {
            if (user[i].id === parseInt(id)) {
                valor = user[i].id
                return valor
            } else {
                return res.send('não foi dessa vez')
            }

        }
    }
}
