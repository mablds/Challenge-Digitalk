const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgresql://uzm2w6azfyvlygl5keka:5xpBBY6yzxXcJtPtBGfY@bsqufuog04qvezb8p8zq-postgresql.services.clever-cloud.com:5432/bsqufuog04qvezb8p8zq', {
    dialect: 'postgres'
})

module.exports = sequelize