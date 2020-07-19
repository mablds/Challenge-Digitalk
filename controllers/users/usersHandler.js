const express = require('express'),
    router = express.Router()
    //Rotas para a realização do CRUD dos usuários:

const createUser = require('./createUser')
const getUsers = require('./getUsers')
const deleteUser = require('./deleteUser')
const editUser = require('./editUser')

//Importação do middleware de verificação do token
const authMiddleware = require('../../middlewares/auth')
const accessAdmin = require('../../middlewares/adminAccess')

// router.post('/', accessAdmin, createUser)
router.post('/', createUser)

router.get('/', accessAdmin, getUsers.findAll)

router.get('/:id', accessAdmin, getUsers.byId)

router.put('/:id', accessAdmin, editUser)

router.delete('/:id', accessAdmin, deleteUser)

exports.router = router