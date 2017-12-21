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
    return conn.conn().collection('messages').find({ 'dateDeactivated': null }).toArray()
        .then( messages => {
            for (let i = 0; i < messages.length; i++) {
                let message = messages[i]
                message._id = message._id.toString() 
            }
            return messages
        })
}

function _readById(id) {
    return conn.conn().collection('messages').findOne({ _id: new ObjectId(id), 'dateDeactivated': null })
        .then(message => {
            message._id = message._id.toString() 
            return message
        })
}

function _create(model) {
    let doc = {
       name: model.name,
       email: model.email,
       message: model.message,
       isUnread: true,
       dateCreated: new Date(),
    }
    return conn.conn().collection('messages').insert(doc)
        .then(result => {
            return result.insertedIds[0].toString()
        }) 
}

function _update(id, model) {
    let doc = {
        name: model.name,
        email: model.email,
        message: model.message,
        isUnread: model.isUnread,
        dateModified: new Date()
     }

    return conn.conn().collection('messages').updateOne( { _id: new ObjectId(id) }, { $set: doc } )
        .then(result => Promise.resolve()) 
}

function _delete(id) {
    return conn.conn().collection('messages').updateOne({ _id: new ObjectId(id) }, { $currentDate: { 'dateModified': true, 'dateDeactivated': true } })
        .then(result => Promise.resolve()) 
}
