const express = require('express'),
    router = express.Router()

//CRUD functions
const getReceber = require('./getReceber')
const createReceber = require('./createReceber')
const editReceber = require('./editReceber')
const deleteReceber = require('./deleteReceber')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', getReceber.byId)

//Consulta todas as contas
router.get('/', getReceber.findAll)

//Cria novas contas
router.post('/', createReceber)

//Edita contas existentes
router.put('/:id', editReceber)

//Apaga contas
router.delete('/:id', deleteReceber)

exports.router = router