const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    name: Joi.string().required(),
    message: Joi.string().required(),
    // _id: Joi.objectId(),
}

module.exports = Joi.object().keys(schema)