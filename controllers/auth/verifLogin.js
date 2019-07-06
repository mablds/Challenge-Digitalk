const User = require('../../model/DAO/usersDAO')
const jwt = require('jsonwebtoken')
const hash = 'ce3e71fdba3a680acab1d6c8d61fe909'

module.exports.findByEmail = async(req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        const password = user[0].dataValues.password
        const id = user[0].dataValues.id

        if (password === req.body.password) {
            const token = await jwt.sign({ id: id }, hash, {
                expiresIn: 3600 //1h
            })
            console.table(user[0].dataValues)
            console.log('Token provided: ' + token)
            res.status(200).send('Login efetuado com sucesso')
        } else {
            res.status(400).send('Senha Incorreta.')
        }
    } catch {
        res.status(400).send('Usuário não confere. Insira um e-mail válido.')
    }

}