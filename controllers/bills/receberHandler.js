const express = require('express'),
    router = express.Router()


//Rotas para a realização do CRUD dos usuários:

//Consulta usuários
router.get('/:id', (req, res) => {
    res.send('GET realizado com sucesso em /users')
})

//Cria usuários
router.post('/', (req, res) => {
    res.send('POST realizado com sucesso em /users')
})

//Edita usuários
router.put('/:id', (req, res) => {
    res.send('PUT realizado com sucesso em /users')
})

//Apaga usuários
router.delete('/:id', (req, res) => {
    res.send('DELETE realizado com sucesso em /users')
})
exports.router = router