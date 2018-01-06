const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
}

module.exports = Joi.object().keys(schema)