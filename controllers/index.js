const usersHandler = require('./users/usersHandler')
const express = require('express'),
    router = express.Router()

// Middlewares
const logMiddleware = require('../middlewares/logger.js')

// Rotas em uso
router.use('/users', logMiddleware, usersHandler.router)
    // router.use('/pagar')
    // router.use('/receber')

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router