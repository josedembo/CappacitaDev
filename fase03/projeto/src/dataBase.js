const sequenceia = {
    _id:1,
    get id() {return this._id++}
}


const pokemons = {}

function salvarPokemons(pokemon){
    if(!pokemon.id) pokemon.id = sequenceia.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function mostrarPokemon(id){
    return pokemons[id] || {}
}

function mostrarPokemons(){
    return Object.values(pokemons)
}

module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons}