const User = require('../../model/DAO/usersDAO')

module.exports.byId = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    } catch {
        res.status(500).send('Server Error')
    }
}

module.exports.findAll = async(req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).send(users)
    } catch {
        res.status(500).send('Server Error')
    }
}