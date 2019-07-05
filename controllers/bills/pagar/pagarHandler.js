const express = require('express'),
    router = express.Router()

//CRUD functions
const getPagar = require('../pagar/getPagar')
const createPagar = require('../pagar/createPagar')
const editPagar = require('../pagar/editPagar')
const deletePagar = require('../pagar/deletePagar')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', getPagar)

//Cria novas contas
router.post('/', createPagar)

//Edita contas existentes
router.put('/:id', editPagar)

//Apaga contas
router.delete('/:id', deletePagar)

exports.router = router