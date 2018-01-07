const responses = require('../models/responses');
const usersService = require('../services/users.service')
const authorizationService = require('../services/authorization.service')
const apiPrefix = '/api/users'
const crypto = require('crypto')

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    login: _login,
    logout: _logout,
    update: _update,
    delete: _delete
}

function _readAll(req, res) {
    usersService.readAll()
        .then(users => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = users
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        });
}

function _readById(req, res) {
    usersService.readById(req.params.id)
        .then(user => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = user
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _create(req, res) {
    req.model.password = hashPassword(req.model.password, req.model.username)
    usersService.create(req.model)
        .then(id => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = id
            res.status(201)
                .location(`${apiPrefix}/${id}`)
                .json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _login(req, res) {
    const cookie = {}
    let hashCheck = hasher9000(req.model.password, req.model.username)
    req.model.password = hashCheck

    usersService.readCredentials(req.model)
        .then(user => {
            console.log('Login Success')
            cookie.username = user.username
            cookie.password = user.password
            authorizationService.createCookies(res, cookie)

            const responseModel = new responses.SuccessResponse()
            res.status(200).json(responseModel)
        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _logout(req, res) {
    console.log('logout')
    res.clearCookie('auth')
    res.clearCookie('auth-hash')
    return res.sendStatus(200)
}

function _update(req, res) {
    usersService.update(req.params.id, req.model)
        .then(user => {
            const responseModel = new responses.SuccessResponse()
            res.status(200).json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _delete(req, res) {
    usersService.delete(req.params.id)
        .then(() => {
            const responseModel = new responses.SuccessResponse()
            res.status(200).json(responseModel)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).send(new responses.ErrorResponse(err))
        })
}

//----------------------- Password Hashing -----------------------//
function hashPassword(password, salt) {
    let hashedPassword = hasher9000(password, salt)
    return hashedPassword
}

function hasher9000(password, salt) {
    let hash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha256")
        .toString("base64");
    return hash
}
//---------------------------------------------------------------//
