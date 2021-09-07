const express = require("express")
const app = express()
const dataBase = require("../database/dataBaseKnex")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

// mostrar todos os pokemons
app.get("/pokemons", async(req,res) => {
    res.send( await dataBase.mostrarPokemons())
})

// mostrar um pokemon
app.get("/pokemons/:id", async(req,res) => {
    res.send( await dataBase.mostrarPokemon(req.params.id))
})

// salvar pokemon
app.post("/pokemons",async (req,res) => {
    const pokemon = await dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
    })
    
    res.send(pokemon)
})

// actualizar um pokemon
app.put("/pokemons/:id", async(req,res) => {
    const pokemon = await dataBase.actualizarPokemon(req.params.id,{
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
    })
    
    res.send(pokemon)
})

// apagar um pokemon
app.delete("/pokemons/:id", async(req,res) => {
    res.send(await dataBase.deletarPokemon(req.params.id))
})

// batalha pokemon
app.post("/batalha", async(req, res) =>{
    res.send(await dataBase.batalhaPokemo(req.body.id1, req.body.id2))
})

//curar pokemon
app.get("/cura/:id", async(req, res) => {
    res.send(await dataBase.curarPokemon(req.params.id))
})

// mostrar o pokemon pelo tipo

app.put("/pokemons/tipo/:nome", (req, res) =>{
    res.send(dataBase.tipoPokmon(req.params.nome))
})

app.listen(3003) 