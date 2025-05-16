const express = require('express')
const app = express()

app.post('/',(req, res) =>{
    const {name, surname} = req.body
    res.send(`Testando a API ${name} ${surname}`)
})

app.listen(9090, () =>{
    console.log('Rodando servidor na porta 9090')
})