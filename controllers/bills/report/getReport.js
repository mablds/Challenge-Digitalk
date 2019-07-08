const Receber = require('../../../model/DAO/incomingDAO')
const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports.FullReport = async(req, res) => {
    const receberBD = await Receber.findAll()
    const pagarBD = await Pagar.findAll()

    const fullReport = {
        pagar: pagarBD.map(e => e.dataValues),
        receber: receberBD.map(e => e.dataValues)
    }

    const aPagar = fullReport.pagar
    const aReceber = fullReport.receber

    const reduceFunction = (acc, e) => acc + e.value

    const totalAPagar = aPagar.filter((e) => e.status).reduce(reduceFunction, 0)
    const totalPago = aPagar.filter((e) => !e.status).reduce(reduceFunction, 0)
    const totalAReceber = aReceber.filter((e) => e.status).reduce(reduceFunction, 0)
    const totalRecebido = aReceber.filter((e) => !e.status).reduce(reduceFunction, 0)


    res.send({
        totalPago,
        totalRecebido,

        totalAPagar,
        totalAReceber,
    })
}