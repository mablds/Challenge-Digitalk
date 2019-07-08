const express = require('express'),
    router = express.Router()

const getReport = require('./getReport')

//rotas em uso:
router.get('/', getReport.FullReport)

exports.router = router