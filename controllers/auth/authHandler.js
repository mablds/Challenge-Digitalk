const express = require('express'),
    router = express.Router()

router.post('/', createUser)

exports.router = router