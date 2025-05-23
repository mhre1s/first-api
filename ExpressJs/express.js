
const express = require('express')

const calculate = require('./api/calculate')

const app = express()

const port = 3030

app.use(express.json())


app.post('/:operation', calculate)

app.listen(port, () => {
    console.log(`API rodando na porta: ${port}`)
})