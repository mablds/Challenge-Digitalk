const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.send('GET realizado com sucesso em /users')
})
router.post('/', (req, res) => {
    res.send('POST realizado com sucesso em /users')
})
router.put('/', (req, res) => {
    res.send('PUT realizado com sucesso em /users')
})
router.delete('/', (req, res) => {
    res.send('DELETE realizado com sucesso em /users')
})
exports.router = router