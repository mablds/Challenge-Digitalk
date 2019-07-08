const express = require('express'),
    router = express.Router()

const getReport = require('./getReport')

//Importação do middleware de verificação do token
const authMiddleware = require('../../../middlewares/auth')

//rotas em uso:
router.get('/', authMiddleware, getReport.FullReport)

exports.router = router