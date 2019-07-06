const express = require('express'),
    router = express.Router()

const verifLogin = require('./verifLogin')

//rotas em uso:
router.post('/', verifLogin.findByEmail)

exports.router = router