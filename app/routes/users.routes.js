const router = require('express').Router()
const usersController = require('../controllers/users.controller')
const validateBody = require('../filters/validate.body')
const user = require('../models/user')

module.exports = router

// api routes ===========================================================
router.get('/', usersController.readAll)
router.get('/:id([0-9a-fA-F]{24})', usersController.readById)
router.post('/', validateBody(user), usersController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(user),usersController.update)
router.delete('/:id([0-9a-fA-F]{24})', usersController.delete)