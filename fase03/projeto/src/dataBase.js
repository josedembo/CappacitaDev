const sequenceia = {
    _id:1,
    get id() {return this._id++}
}


const pokemons = []

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

function actualizarPokemon(id, pokemon){
    pokemons[id] = pokemon
    return pokemon;
}

// function deletarPokemon(id){
//  const pokemoDeletado = pokemons[id]
//  pokemons.splice(id, 1)
//  sequenceia._id = 1
//  pokemons.forEach(pokemo => {
//      pokemo.id = sequenceia.id
//  })
//  return pokemoDeletado
// }

function deletarPokemon(id){
 sequenceia._id = sequenceia._id -1
 const pokemoDeletado = pokemons[id]
 pokemons.splice(id, 1)
 pokemons.forEach(pokemo => {
     if(pokemo.id > id){
         pokemo.id = pokemo.id -1
     }
 })
 return pokemoDeletado
}
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, actualizarPokemon, deletarPokemon}