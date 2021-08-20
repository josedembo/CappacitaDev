const express = require("express")
const app = express()
const dataBase = require("./dataBase")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

// mostrar todos os pokemos
app.get("/pokemos", (req,res) => {
    res.send(dataBase.mostrarPokemons())
})

// motrar um pokemon
app.get("/pokemos/:id", (req,res) => {
    res.send(dataBase.mostrarPokemon(req.params.id))
})


// salvar pokemon
app.post("/pokemos", (req,res) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    
    res.send(pokemon)
})

// actualizar um pokemon
app.put("/pokemos/:id", (req,res) => {
    const pokemon = dataBase.actualizarPokemon(req.params.id,{
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })
    
    res.send(pokemon)
})

// apagar um pokemo
app.delete("/pokemos/:id", (req,res) => {
    res.send(dataBase.deletarPokemon(req.params.id))
})

app.listen(3003) 