const Receber = require('../../../model/DAO/incomingDAO')

module.exports.byId = async(req, res) => {
    try {
        const bill = await Receber.findById(req.params.id)
        res.status(200).send(bill)
    } catch {
        res.status(500).send('Server Error')
    }
}

module.exports.findAll = async(req, res) => {
    try {
        const bills = await Receber.findAll()
        res.status(200).send(bills)
    } catch {
        res.status(500).send('Server Error')
    }
}