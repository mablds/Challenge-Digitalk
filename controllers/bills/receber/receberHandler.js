const express = require('express'),
    router = express.Router()

//CRUD functions
const getReceber = require('./getReceber')
const createReceber = require('./createReceber')
const editReceber = require('./editReceber')
const deleteReceber = require('./deleteReceber')
const receberConta = require('./receberConta')

//Importação do middleware de verificação do token
const authMiddleware = require('../../../middlewares/auth')
const accessAdmin = require('../../../middlewares/adminAccess')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', authMiddleware, getReceber.byId)

//Consulta todas as contas
router.get('/', authMiddleware, getReceber.findAll)

//Cria novas contas
router.post('/', accessAdmin, createReceber)

//Edita contas existentes
router.put('/:id', accessAdmin, editReceber)

//Define a conta como "recebida" (status = true)
router.patch('/:id', accessAdmin, receberConta)

//Apaga contas
router.delete('/:id', accessAdmin, deleteReceber)

exports.router = router