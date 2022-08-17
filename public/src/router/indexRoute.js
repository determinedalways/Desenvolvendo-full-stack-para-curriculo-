const express = require('express')
const router = express.Router()
const indexController = require("../Controllers/IndexControllers")

router.get ('/home',indexController.home)

module.exports = router