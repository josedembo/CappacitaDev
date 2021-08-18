const express = require("express")
const app = express()

app.get("/", (req,resp) => {
    resp.send("Olá como estás meu amgio?")
})

app.get("/saudacao", (req,resp) => {
    resp.send("Seja bem vindo  a rota saudacao?")
})

app.listen(3003) 