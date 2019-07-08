const express = require('express'),
    router = express.Router()

//CRUD functions
const getPagar = require('./getPagar')
const createPagar = require('./createPagar')
const editPagar = require('./editPagar')
const deletePagar = require('./deletePagar')
const pagarConta = require('./pagarConta')

//Importação do middleware de verificação do token
const authMiddleware = require('../../../middlewares/auth')
const accessAdmin = require('../../../middlewares/adminAccess')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', authMiddleware, getPagar.byId)

//Consulta todas as contas
router.get('/', authMiddleware, getPagar.findAll)

//Cria novas contas
router.post('/', accessAdmin, createPagar)

//Edita contas existentes
router.put('/:id', accessAdmin, editPagar)

//Definir a conta como paga
router.patch('/:id', accessAdmin, pagarConta)

//Apaga contas
router.delete('/:id', accessAdmin, deletePagar)

exports.router = router