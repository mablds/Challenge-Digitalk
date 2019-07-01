const usersHandler = require('./users/usersHandler')
const express = require('express'),
    router = express.Router()

// Routes in use
router.use('/users', usersHandler)
router.use('/pagar')
router.use('/receber')

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router