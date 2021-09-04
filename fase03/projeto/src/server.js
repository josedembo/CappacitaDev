const express = require("express")
const app = express()
const dataBase = require("./dataBase")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

// mostrar todos os pokemons
app.get("/pokemons", (req,res) => {
    res.send(dataBase.mostrarPokemons())
})

// motrar um pokemon
app.get("/pokemons/:id", (req,res) => {
    res.send(dataBase.mostrarPokemon(req.params.id))
})

// salvar pokemon
app.post("/pokemons", (req,res) => {
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
app.put("/pokemons/:id", (req,res) => {
    const pokemon = dataBase.actualizarPokemon(req.params.id,{
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: parseInt(req.body.hp),
        id: parseInt(req.params.id)
    })
    
    res.send(pokemon)
})

// apagar um pokemo
app.delete("/pokemons/:id", (req,res) => {
    res.send(dataBase.deletarPokemon(req.params.id))
})

// batalha pokemon
app.post("/batalha", (req, res) =>{
    res.send(dataBase.batalhaPokemo(req.body.id1, req.body.id2))
})

//curar pokemon
app.get("/cura/:id", (req, res) => {
    res.send(dataBase.curarPokemon(req.params.id))
})

// mostrar o pokemon pelo tipo

app.put("/pokemons/tipo/:nome", (req, res) =>{
    res.send(dataBase.tipoPokmon(req.params.nome))
})

app.listen(3003) 