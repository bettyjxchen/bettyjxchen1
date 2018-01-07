const router = require('express').Router()
const usersController = require('../controllers/users.controller')
const validateBody = require('../filters/validate.body')
const user = require('../models/user')
const userLogin = require ('../models/user.login')

const requireId = require('../filters/crud.filters').requireId
const validateIdMatch = require('../filters/crud.filters').validateIdMatch
const disallowId = require('../filters/crud.filters').disallowId

module.exports = router

// api routes ===========================================================
router.get('/', usersController.readAll)
router.get('/:id([0-9a-fA-F]{24})', usersController.readById)
router.post('/register', validateBody(user), disallowId, usersController.create)
router.post('/login', validateBody(userLogin), usersController.login)
router.post('/logout', usersController.logout)
router.put('/:id([0-9a-fA-F]{24})', validateBody(user),usersController.update)
router.delete('/:id([0-9a-fA-F]{24})', usersController.delete)