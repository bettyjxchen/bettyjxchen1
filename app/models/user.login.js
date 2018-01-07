const Joi = require('joi')

const schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
}

module.exports = Joi.object().keys(schema)