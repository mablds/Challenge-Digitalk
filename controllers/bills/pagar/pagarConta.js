const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports = async(req, res) => {
    try {
        const id = req.params.id

        const conta = await Pagar.findById(id)
        if (!conta) return res.status(404).send('Conta não encontrada')

        if (conta[0].dataValues.status === true) return res.status(200).send('Conta já foi paga')

        await Pagar.update(id, {
            status: true,
            paymentDate: Date.now()
        })

        res.status(200).send("Conta paga.")
    } catch {
        res.status(500).send('Server Error')
    }
}