const dbInstance = require('../db')
const Receber = require('../post-models/IncommingBill')(dbInstance)

module.exports.addBill = async(inc) => {
    return await Receber.create(inc)
}

module.exports.findAll = async() => {
    return await Receber.findAll()
}

module.exports.findById = async(id) => {
    return await Receber.findAll({
        where: { id }
    })
}

module.exports.update = async(id, changes) => {
    return await Receber.update(changes, {
        where: { id }
    })
}

module.exports.delete = async(id) => {
    return await Receber.destroy({
        where: { id }
    })
}