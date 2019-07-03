const Sequelize = require('sequelize')
const Model = Sequelize.Model;

class Receber extends Model {}

module.exports = (sequelize) => {
    return Receber.init({
        // attributes
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        paymentDate: {
            type: Sequelize.DATE,
        }
    }, {
        sequelize,
        modelName: 'receber'
            // options
    })
}