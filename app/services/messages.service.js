const Message = require('../models/message')
const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    delete: _delete
}

function _readAll() {
    return conn.conn().collection('messages').find().toArray()
        .then( messages => {
            for (let i = 0; i < messages.length; i++) {
                let message = messages[i]
                message._id = message._id.toString() 
            }
            return messages
        })
}

function _readById(id) {
    return conn.conn().collection('messages').findOne({ _id: new ObjectId(id) })
        .then(message => {
            message._id = message._id.toString() 
            return message
        })
}

function _create(model) {
    return conn.conn().collection('messages').insert(model)
        .then(result => {
            console.log(result)
            return result.insertedIds[0].toString()
        }) 
}

function _update(id, doc) {
    doc._id = new ObjectId(doc._id)

    return conn.conn().collection('messages').replaceOne( { _id: new ObjectId(id) }, doc )
        .then(result => Promise.resolve()) 
}

function _delete(id) {
    return conn.conn().collection('messages').deleteOne({ _id: new ObjectId(id) })
        .then(result => Promise.resolve()) 
}
