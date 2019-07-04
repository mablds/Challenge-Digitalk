const dbInstance = require('../db')
const User = require('../post-models/User')(dbInstance)

module.exports.addPerson = async(person) => {
    return await User.create(person)
}

module.exports.findAll = async() => {
    return await User.findAll()
}

module.exports.update = async(id, person) => {

}
module.exports.delete = async(id) => {

}
module.exports.setAdm = async(id) => {

}

module.exports.findById = async(id) => {
    return await User.findAll({
        where: { id }
    })
}