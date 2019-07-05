const Receber = require('../../../model/DAO/incomingDAO')

module.exports = async(req, res) => {
    try {
        await Receber.delete(req.params.id)
        res.status(201).send("Conta a receber deletada.")
    } catch {
        res.status(500).send('Server Error')
    }
}