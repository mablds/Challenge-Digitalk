const dbInstance = require('../db')
const Pagar = require('../post-models/OutgoingBill')(dbInstance)

module.exports.addBill = async(inc) => {
    return await Pagar.create(inc)
}

module.exports.findAll = async() => {
    return await Pagar.findAll()
}

module.exports.findById = async(id) => {
    return await Pagar.findAll({
        where: { id }
    })
}

module.exports.update = async(id, changes) => {
    return await Pagar.update(changes, {
        where: { id }
    })
}

module.exports.delete = async(id) => {
    return await Pagar.destroy({
        where: { id }
    })
}