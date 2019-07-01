const express = require('express'),
    router = express.Router()


//Rotas para a realização do CRUD dos usuários:

//Consulta usuários
router.get('/:id', (req, res) => {
    res.send('GET realizado com sucesso em /pagar')
})

//Cria usuários
router.post('/', (req, res) => {
    res.send('POST realizado com sucesso em /pagar')
})

//Edita usuários
router.put('/:id', (req, res) => {
    res.send('PUT realizado com sucesso em /pagar')
})

//Apaga usuários
router.delete('/:id', (req, res) => {
    res.send('DELETE realizado com sucesso em /pagar')
})
exports.router = router