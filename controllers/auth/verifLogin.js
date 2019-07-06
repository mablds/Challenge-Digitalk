const User = require('../../model/DAO/usersDAO')

module.exports.findByEmail = async(req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        const password = user[0].dataValues.password

        if (password === req.body.password) {
            res.status(200).send('Login efetuado com sucesso')
        } else {
            res.status(400).send('Usuário ou senha não conferem')
        }
    } catch {
        res.status(400).send('Usuário não confere. Insira um e-mail válido.')
    }

}