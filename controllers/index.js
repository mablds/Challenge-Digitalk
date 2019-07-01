const express = require('express'),
    router = express.Router()

// Handlers
const usersHandler = require('./users/usersHandler')
const pagarHandler = require('./bills/pagarHandler')
const receberHandler = require('./bills/receberHandler')

// Middlewares
const logMiddleware = require('../middlewares/logger.js')

// Rotas em uso
router.use('/users', logMiddleware, usersHandler.router)
router.use('/pagar', logMiddleware, pagarHandler.router)
router.use('/receber', logMiddleware, receberHandler.router)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Página não encontrada.')
})

module.exports = router