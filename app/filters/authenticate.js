module.exports = authenticate

const crypto = require('crypto')


function authenticate(req, res, next) {
    // req.auth should contain information related to the logged-in user, stored and passed
    // between web server and client via auth cookie.

    req.auth = {}

    if (req.cookies.auth) {
        let cookie = req.cookies.auth

        req.auth.username = cookie.username
        req.auth.password = cookie.password

         //compare with hash cookie
         let jsonCookie = JSON.stringify(cookie)
         let hashCookie = hasher9000(jsonCookie)
 
         if (hashCookie != req.cookies['auth-hash']) {
             logout(req, res)
             return
         }   
    }

    next()
}

function hasher9000(cookie) {
    let hash = crypto
        .pbkdf2Sync(cookie, process.env.HASH_KEY, 10000, 64, "sha256")
        .toString("base64")
    return hash
}

function logout(req, res) {
    res.clearCookie('auth')
    res.clearCookie('auth-hash')
    return res.sendStatus(500).send('You are logged out')
}