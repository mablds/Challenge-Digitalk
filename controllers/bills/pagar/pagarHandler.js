const express = require('express'),
    router = express.Router()

//CRUD functions
const getPagar = require('./getPagar')
const createPagar = require('./createPagar')
const editPagar = require('./editPagar')
const deletePagar = require('./deletePagar')

//Importação do middleware de verificação do token
const authMiddleware = require('../../../middlewares/auth')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', authMiddleware, getPagar.byId)

//Consulta todas as contas
router.get('/', authMiddleware, getPagar.findAll)

//Cria novas contas
router.post('/', authMiddleware, createPagar)

//Edita contas existentes
router.put('/:id', authMiddleware, editPagar)

//Apaga contas
router.delete('/:id', authMiddleware, deletePagar)

exports.router = router