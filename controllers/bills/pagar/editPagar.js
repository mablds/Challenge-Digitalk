const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports = async(req, res) => {
    try {
        const id = req.params.id
        const changes = req.body

        const conta = await Pagar.findById(id)
        if (!conta) return res.status(404).send('Bill not found')
        if (changes.id) return res.status(400).send('Bad request')

        await Pagar.update(id, changes)

        res.status(200).send("Bill's info Up to Date")
    } catch {
        res.status(500).send('Server Error')
    }
}