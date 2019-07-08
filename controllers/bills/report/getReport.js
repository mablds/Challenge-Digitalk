const Range = require('date-range-array')
const Receber = require('../../../model/DAO/incomingDAO')
const Pagar = require('../../../model/DAO/outgoingDAO')

module.exports.FullReport = async(req, res) => {
    const startDate = req.headers['init-date']
    const endDate = req.headers['end-date']


    const receberBD = await Receber.findAll()
    const pagarBD = await Pagar.findAll()

    const startD = new Date(startDate)
    const endD = new Date(endDate)
    if (startD > endD) return res.status(400).send('A data de início inserida no headers é maior que a data final.')

    const dateRange = startDate && endDate ? Range(startDate, endDate) : undefined

    const aPagar = parsedValues(dateRange, pagarBD)

    const aReceber = parsedValues(dateRange, receberBD)

    const reduceFunction = (acc, e) => acc + e.value

    const totalAPagar = aPagar
        .filter((e) => !e.status)
        .reduce(reduceFunction, 0)

    const totalPago = aPagar
        .filter((e) => e.status)
        .reduce(reduceFunction, 0)

    const totalAReceber = aReceber
        .filter((e) => !e.status)
        .reduce(reduceFunction, 0)

    const totalRecebido = aReceber
        .filter((e) => e.status)
        .reduce(reduceFunction, 0)


    res.send({
        totalPago,
        totalRecebido,

        totalAPagar,
        totalAReceber,
    })
}

const parsedValues = (range, value) => {
    if (range) {
        return value
            .map(e => e.dataValues)
            .filter(e => {
                if (e.paymentDate) {
                    const dt = new Date(e.paymentDate)
                    const formatedDate = dt.getFullYear() + '-' + addZero(dt.getMonth() + 1) + '-' + addZero(dt.getDate())
                    if (range.includes(formatedDate))
                        return true
                }
            })
    } else
        return value.map(e => e.dataValues)
}

const addZero = n => n < 10 ? '0' + n : n