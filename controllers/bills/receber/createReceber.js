const Receber = require('../../../model/DAO/incomingDAO')

module.exports = async(req, res) => {
    try {
        await Receber.addBill(req.body)
        res.status(201).send('Incoming Bill Created')
    } catch {
        res.status(500).send('Server Error')
    }
}