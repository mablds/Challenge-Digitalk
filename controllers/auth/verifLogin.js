const User = require('../../model/DAO/usersDAO')
const jwt = require('jsonwebtoken')
const authConfig = require('../../configs/authConfig')
const hash = authConfig.secret

module.exports.findByEmail = async(req, res) => {
    try {
        function generateToken(params = {}) {
            return jwt.sign(params, hash, {
                expiresIn: 7200 //2h
            })
        }
        const user = await User.findByEmail(req.body.email)
        console.log(user)
        const password = user[0].dataValues.password
        const id = user[0].dataValues.id


        if (password === req.body.password) {
            console.table(user[0].dataValues)
            res.status(200).send({
                user,
                token: generateToken({ id: id })
            })
        } else {
            res.status(400).send('Senha Incorreta.')
        }
    } catch {
        res.status(400).send('Usuário não confere. Insira um e-mail válido.')
    }

}