const dbInstance = require('../db')
const User = require('../post-models/User')(dbInstance)

module.exports.addPerson = async(person) => {
    return await User.create(person)
}

module.exports.findAll = async() => {
    return await User.findAll()
}

module.exports.findById = async(id) => {
    return await User.findAll({
        where: { id }
    })
}

module.exports.update = async(id, changes) => {
    return await User.update(changes, {
        where: { id }
    })
}

module.exports.delete = async(id) => {
    return await User.destroy({
        where: { id }
    })
}