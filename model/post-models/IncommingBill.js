const Sequelize = require('sequelize')
const Model = Sequelize.Model;

class IncommingBill extends Model {}

module.exports = (sequelize) => {
    return IncommingBill.init({
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
        modelName: 'in'
    })
}