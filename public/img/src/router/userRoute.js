const express = require ('express');
const router = express.Router()

router.get("/", userController.index)
router.get('/:id',userController.show)
router.post('/',userController.store)
router.put('/:id',userController.update)
router.delete('/',userController.delete)