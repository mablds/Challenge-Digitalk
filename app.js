require('dotenv').config()
console.log(process.env.POSTGRE_URI)

const config = require('./configs/config')
const port = process.env.PORT || 3000
const app = config.setUpServer()

app.listen(port, () => {
    console.log(' ----------------------\n|      SERVER ON!      |\n|      Porta: ' + port + '     |\n ----------------------')
})