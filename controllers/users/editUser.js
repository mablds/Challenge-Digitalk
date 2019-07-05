const User = require('../../model/DAO/usersDAO')

module.exports = async(req, res) => {
    try {
        const id = req.params.id
        const changes = req.body

        const user = await User.findById(id)
        if (!user) return res.status(404).send('User not found')
        if (changes.id) return res.status(400).send('Bad request')

        await User.update(id, changes)

        res.status(200).send("User's info Up to Date")
    } catch {
        res.status(500).send('Server Error')
    }
}