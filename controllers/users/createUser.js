const User = require('../../model/DAO/usersDAO')

module.exports = async(req, res) => {
    try {
        await User.addPerson(req.body)
        res.status(201).send('User Created')
    } catch (err) {
        if (err.original.detail) return res.status(409).send(err.original.detail)
        res.status(500).send('Server Error')
    }
}