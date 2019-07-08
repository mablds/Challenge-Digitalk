const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.POSTGRESQL_URI, {
    dialect: 'postgres'
})

module.exports = sequelize