const Sequelize = require('sequelize')
const Model = Sequelize.Model

class User extends Model {}

module.exports = (sequelize) => {
    return User.init({
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'user'
    })
}