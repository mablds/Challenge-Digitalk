const express = require('express'),
    router = express.Router()

//CRUD functions
const getPagar = require('./getPagar')
const createPagar = require('./createPagar')
const editPagar = require('./editPagar')
const deletePagar = require('./deletePagar')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', getPagar.byId)

//Consulta todas as contas
router.get('/', getPagar.findAll)

//Cria novas contas
router.post('/', createPagar)

//Edita contas existentes
router.put('/:id', editPagar)

//Apaga contas
router.delete('/:id', deletePagar)

exports.router = router