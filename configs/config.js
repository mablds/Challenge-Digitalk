const express = require('express')

module.exports.setUpServer = () => {
    const app = express()
    const bodyParser = require('body-parser')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    return app
}