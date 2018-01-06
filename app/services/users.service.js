const user = require('../models/user')
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
    return conn.conn().collection('users').find({ 'dateDeactivated': null }).toArray()
        .then(users => {
            for (let i = 0; i < users.length; i++) {
                let user = users[i]
                user._id = user._id.toString() 
            }
            return users
        })
}

function _readById(id) {
    return conn.conn().collection('users').findOne({ _id: new ObjectId(id), 'dateDeactivated': null })
        .then(user => {
            user._id = user._id.toString() 
            return user
        })
}

function _create(model) {
    let doc = {
       name: model.name,
       email: model.email,
       user: model.user,
       isUnread: true,
       dateCreated: new Date(),
    }
    return conn.conn().collection('users').insert(doc)
        .then(result => {
            return result.insertedIds[0].toString()
        }) 
}

function _update(id, model) {
    let doc = {
        name: model.name,
        email: model.email,
        user: model.user,
        isUnread: model.isUnread,
        dateModified: new Date()
     }

    return conn.conn().collection('users').updateOne( { _id: new ObjectId(id) }, { $set: doc } )
        .then(result => Promise.resolve()) 
}

function _delete(id) {
    return conn.conn().collection('users').updateOne({ _id: new ObjectId(id) }, { $currentDate: { 'dateModified': true, 'dateDeactivated': true } })
        .then(result => Promise.resolve()) 
}
