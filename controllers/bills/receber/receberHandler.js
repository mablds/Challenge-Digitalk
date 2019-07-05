const express = require('express'),
    router = express.Router()

//CRUD functions
const getReceber = require('../Receber/getReceber')
const createReceber = require('../Receber/createReceber')
const editReceber = require('../Receber/editReceber')
const deleteReceber = require('../Receber/deleteReceber')

//Rotas para a realização do CRUD dos usuários:

//Consulta uma conta específica
router.get('/:id', getReceber)

//Cria novas contas
router.post('/', createReceber)

//Edita contas existentes
router.put('/:id', editReceber)

//Apaga contas
router.delete('/:id', deleteReceber)

exports.router = router