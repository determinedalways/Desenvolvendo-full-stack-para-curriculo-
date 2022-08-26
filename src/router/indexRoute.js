const express = require('express')
const router = express.Router()
const indexController = require("../Controllers/IndexControllers")

router.get ('/',indexController.home)
router.get('/biografia',indexController.biografia)
router.get('/contato',indexController.contato)
router.get("/curriculo",indexController.curriculo)

module.exports = router