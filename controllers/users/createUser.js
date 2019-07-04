const User = require('../../model/DAO/usersDAO')

module.exports = async(req, res) => {
    try {
        await User.addPerson(req.body)
        res.status(201).send('User Created')
    } catch {
        res.status(500).send('Server Error')
    }
}