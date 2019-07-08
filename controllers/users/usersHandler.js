const express = require('express'),
    router = express.Router()
    //Rotas para a realização do CRUD dos usuários:

const createUser = require('./createUser')
const getUsers = require('./getUsers')
const deleteUser = require('./deleteUser')
const editUser = require('./editUser')

//Importação do middleware de verificação do token
const authMiddleware = require('../../middlewares/auth')

router.post('/', authMiddleware, createUser)

router.get('/', authMiddleware, getUsers.findAll)

router.get('/:id', authMiddleware, getUsers.byId)

router.put('/:id', authMiddleware, editUser)

router.delete('/:id', authMiddleware, deleteUser)


exports.router = router