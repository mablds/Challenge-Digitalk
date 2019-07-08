const express = require('express'),
    router = express.Router()

//CRUD functions
const getReceber = require('./getReceber')
const createReceber = require('./createReceber')
const editReceber = require('./editReceber')
const deleteReceber = require('./deleteReceber')

//Importação do middleware de verificação do token
const authMiddleware = require('../../../middlewares/auth')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', authMiddleware, getReceber.byId)

//Consulta todas as contas
router.get('/', authMiddleware, getReceber.findAll)

//Cria novas contas
router.post('/', authMiddleware, createReceber)

//Edita contas existentes
router.put('/:id', authMiddleware, editReceber)

//Apaga contas
router.delete('/:id', authMiddleware, deleteReceber)

exports.router = router