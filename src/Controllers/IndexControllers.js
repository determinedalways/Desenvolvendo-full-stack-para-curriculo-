const indexController = { home: (req,res) => {
res.render("portifolio")
},

biografia: (req,res) => {
    res.render("biografia")
},

contato: (req,res) => {
    res.render("contato")

},
curriculo: (req,res)=> {
    res.render("curriculo")
}
}

module.exports = indexController