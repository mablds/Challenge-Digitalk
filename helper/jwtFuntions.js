const jwt = require('jsonwebtoken')
const secret = 'assda12332@@465sda132$$'

module.exports.signJwt = (data, expires) => {
    return jwt.sign(data, secret, { expiresIn: expires })
}

module.exports.verifyToken = (accessToken) => {
    return new Promise((resolve, reject) => {
        jwt.verify(accessToken, secret, (err, decoded) => {
            if (err) return reject('error')
            resolve(decoded)
        })
    })
}