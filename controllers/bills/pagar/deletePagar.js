const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports = async(req, res) => {
    try {
        await Pagar.delete(req.params.id)
        res.status(201).send("Conta a pagar deletada.")
    } catch {
        res.status(500).send('Server Error')
    }
}