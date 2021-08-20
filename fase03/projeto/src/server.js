const express = require("express")
const app = express()
const dataBase = require("./dataBase")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

app.get("/pokemos", (req,resp) => {
    resp.send(dataBase.mostrarPokemons())
})

app.get("/pokemos/:id", (req,resp) => {
    resp.send(dataBase.mostrarPokemon(req.params.id))
})

app.post("/pokemos", (req,resp) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        cor: req.body.cor,
        id: req.params.tipo
    })

    resp.send(pokemon)
})


app.listen(3003) 