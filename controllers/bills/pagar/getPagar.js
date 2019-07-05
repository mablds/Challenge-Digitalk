const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports.byId = async(req, res) => {
    try {
        const bill = await Pagar.findById(req.params.id)
        res.status(200).send(bill)
    } catch {
        res.status(500).send('Server Error')
    }
}

module.exports.findAll = async(req, res) => {
    try {
        const bills = await Pagar.findAll()
        res.status(200).send(bills)
    } catch {
        res.status(500).send('Server Error')
    }
}