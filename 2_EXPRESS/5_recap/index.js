const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    // resposta.sendFile(`${caminho}/index.html`)
    resposta.send("Estou utilizando nodemon!")
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})