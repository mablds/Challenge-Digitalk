const jwt = require('jsonwebtoken')
const authConfig = require('../configs/authConfig')
const hash = authConfig.secret

module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (!token) return res.status(400).send('Token de autenticação não informado. Por favor realizar a autenticação através do método POST na rota /auth')

    if (token.startsWith('Bearer ')) {
        // Tirando da string a palavra 'Bearer' caso ela esteja no início da string
        token = token.slice(7, token.length)
    }

    jwt.verify(token, hash, (err, decoded) => {
        if (err) {
            return res.json({
                success: false,
                message: 'Token informado não é válido.'
            })
        } else {
            req.decoded = decoded
            console.log(req.decoded)
            if (req.decoded.admin) next()
            else return res.status(401).send('Você não possui o nível de acesso necessário. Por favor realizar a autenticação com uma conta Administradora através do método POST na rota /auth')
        }
    })
}