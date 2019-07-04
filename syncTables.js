const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgresql://uzm2w6azfyvlygl5keka:5xpBBY6yzxXcJtPtBGfY@bsqufuog04qvezb8p8zq-postgresql.services.clever-cloud.com:5432/bsqufuog04qvezb8p8zq', { dialect: 'postgres' })
const User = require('./model/post-models/User')(sequelize)
const IncommingBill = require('./model/post-models/IncommingBill')(sequelize)
const OutgoingBill = require('./model/post-models/OutgoingBill')(sequelize)

const authPostgre = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Connection has been established successfully.')
    } catch (err) {
        console.error('Unable to connect to the database:', err)
    }
}

(async() => {
    await authPostgre()
    await User.sync({ force: true })
    await IncommingBill.sync({ force: true })
    await OutgoingBill.sync({ force: true })
})()