const Sequelize = require('sequelize')
const Model = Sequelize.Model;

class User extends Model {}

module.exports = (sequelize) => {
    return User.init({
        // attributes
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
            allowNull: false
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
            // options
    });

}