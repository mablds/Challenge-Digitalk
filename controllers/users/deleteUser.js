const User = require('../../model/DAO/usersDAO')

module.exports = async(req, res) => {
    try {
        await User.delete(req.params.id)
        res.status(201).send("User deleted.")
    } catch {
        res.status(500).send('Server Error')
    }
}