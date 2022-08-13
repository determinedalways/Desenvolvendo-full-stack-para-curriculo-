const express = require ('express');
const router = express.Router()
const userController = require("../Controllers/UserControllers")

router.get("/email", userController.index)
router.get('/:id',userController.show)
router.post('/',userController.store)
router.put('/:id',userController.update)
router.delete('/',userController.delete)

module.exports = router