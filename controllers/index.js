const express = require('express'),
    router = express.Router()

// Handlers
const usersHandler = require('./users/usersHandler')
const pagarHandler = require('./bills/pagar/pagarHandler')
const receberHandler = require('./bills/receber/receberHandler')
const authHandler = require('./auth/authHandler')

// Middlewares
const logMiddleware = require('../middlewares/logger')
router.use(logMiddleware)

// Rotas em uso
router.use('/users', usersHandler.router)
router.use('/out', pagarHandler.router)
router.use('/inc', receberHandler.router)
router.use('/auth', authHandler.router)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Página não encontrada.')
})

module.exports = router