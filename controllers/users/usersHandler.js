const express = require('express'),
    router = express.Router()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgresql://uzm2w6azfyvlygl5keka:5xpBBY6yzxXcJtPtBGfY@bsqufuog04qvezb8p8zq-postgresql.services.clever-cloud.com:5432/bsqufuog04qvezb8p8zq', { dialect: 'postgres' })

const User = require('../../model/DAO/usersDAO')(sequelize)

const authPostgre = async() => {
        try {
            await sequelize.authenticate()
            await sequelize.sync()
            console.log('Connection has been established successfully.')
        } catch (err) {
            console.error('Unable to connect to the database:', err)
        }
    }
    //Rotas para a realização do CRUD dos usuários:

//Consulta usuários
router.post('/', async(req, res) => {
    try {
        await authPostgre()
        await User.sync({ force: true }) // Now the `users` table in the database corresponds to the model definition
        console.log('Sync - Ok. Models defined.')
    } catch (err) {
        console.log(err)
    }

})

//Edita usuários
router.put('/:id', (req, res) => {
    res.send('PUT realizado com sucesso em /users')
})

//Apaga usuários
router.delete('/:id', (req, res) => {
    res.send('DELETE realizado com sucesso em /users')
})
exports.router = router