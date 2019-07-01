const express = require('express')

//módulo de exportação das configurações para o server Express (app).
module.exports.setUpServer = () => {
    const app = express()
    const bodyParser = require('body-parser')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(require('../controllers'))

    return app
}