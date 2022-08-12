const user = [{"nome completo": "Manuel Sobrinho",
             "usuário": "juninho",
             "e-mail": "juninho_zimba-net@hotmail.com",
             "senha": "123456"
             
}]

const userController = { login: (req,res) => {
    return res.json ("login",{title: "login"},)
}  }