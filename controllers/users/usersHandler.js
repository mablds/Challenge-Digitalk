const express = require('express'),
    router = express.Router()
    //Rotas para a realização do CRUD dos usuários:

const createUser = require('./createUser')
const getUsers = require('./getUsers')
    //Consulta usuários

//botar um middleware de token válido como adm
router.post('/', createUser)

router.get('/', getUsers.findAll)

router.get('/:id', getUsers.byId)


exports.router = router