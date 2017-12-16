const conn = require('../mongodb').connection

module.exports = configMongoDB

function configMongoDB(app) {
    return Promise.all(
        [
            // conn.db().ensureIndex('faqEntries', { faqCategoryId: 1, displayOrder: 1 }, { unique: true }),
            // conn.db().ensureIndex('users', { email: 1 }, { unique: true }),
            // conn.db().ensureIndex('users', { username: 1 }, { unique: true }),
            // conn.db().ensureIndex('users', { dateEmailKeyExpires: 1 }, { expireAfterSeconds: 0 }),
            // conn.db().ensureIndex('faqCategories', { displayOrder: 1 }, { unique: true }),
            // conn.db().ensureIndex('faqCategories', { name: 1 }, { unique: true }),
            // conn.db().ensureIndex('pages', { urlSlug: 1 }, { unique: true })
        ]
    )
}