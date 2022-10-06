const express = require ('express');
const router = express.Router()
const userController = require("../Controllers/UserControllers")

router.get("/contato", userController.index)
router.get('/contato/:id',userController.show)
router.post('/contato',userController.store)
router.put('/contato/:id',userController.update)
router.delete('/contato',userController.delete)

module.exports = router