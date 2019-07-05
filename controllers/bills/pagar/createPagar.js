const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports = async(req, res) => {
    try {
        await Pagar.addBill(req.body)
        res.status(201).send('Outgoing Bill Created')
    } catch {
        res.status(500).send('Server Error')
    }
}