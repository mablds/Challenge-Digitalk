const Receber = require('../../../model/DAO/incomingDAO')

module.exports = async(req, res) => {
    try {
        const id = req.params.id

        const conta = await Receber.findById(id)
            // console.table(conta[0].dataValues)
        if (!conta) return res.status(404).send('Bill not found')

        if (conta[0].dataValues.status === true) return res.status(200).send('Conta já recebida')

        await Receber.update(id, {
            status: true,
            paymentDate: Date.now()
        })

        res.status(200).send("Conta recebida")
    } catch {
        res.status(500).send('Server Error')
    }
}