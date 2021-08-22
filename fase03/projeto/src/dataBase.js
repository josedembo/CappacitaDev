const sequenceia = {
    _id:1,
    get id() {return this._id++}
}

const pokemons = []

// salavar pokemons
function salvarPokemons(pokemon){
    if(!pokemon.id) pokemon.id = sequenceia.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

// mostra apenas um pokemon
function mostrarPokemon(id){
    return pokemons[id] || {}
}

// mostra todos os pokemons
function mostrarPokemons(){
    return Object.values(pokemons)
}

// actualiza  um pokemon
function actualizarPokemon(id, pokemon){
    pokemons[id] = pokemon
    return pokemon;
}

// deleta um pokemon
function deletarPokemon(id){
 const pokemonDeletado = pokemons[id]
 pokemons.splice(id, 1)
 sequenceia._id = 1
 pokemons.forEach(pokemon => {
     pokemon.id = sequenceia.id
 })
 return pokemonDeletado
}

// function deletarPokemon(id){
//  sequenceia._id = sequenceia._id -1
//  const pokemonDeletado = pokemons[id]
//  pokemons.splice(id, 1)
//  pokemons.forEach(pokemon => {
//      if(pokemon.id > id){
//          pokemon.id = pokemon.id -1
//      }
//  })
//  return pokemonDeletado
// }

//  realiza batalha entre dois pokemons
function batalhaPokemo(id1, id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10
    // let resutado = ""
 

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        
        if(pokemon1.tipo == pokemon2.fraquesa){
            pokemon2.hp = pokemon2.hp - superEfetivo
        }else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo
        }else{
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        
        if(pokemon2.tipo == pokemon1.fraquesa){
            pokemon1.hp = pokemon1.hp - superEfetivo
        }else if(pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo
        }else{
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if(pokemon1.hp < 0) pokemon1.hp = 0
    if(pokemon2.hp < 0) pokemon2.hp = 0

    //encontrar o vencedor
    // if(pokemon1.hp > pokemon2.hp){
    //     resutado = `resultaddo: ${pokemon1.nome} é o vencedor`
    // }else if(pokemon1.hp == pokemon2.hp){
    //     resutado = `resultado: Empate`
    // }else{
    //     resutado = `resultaddo: ${pokemon2.nome} é o vencedor`
    // }

    return `${pokemon1.nome}: ${pokemon1.hp} | ${pokemon2.nome}: ${pokemon2.hp}`

}

// cura um pokemon
function curarPokemon(id){

    let hpDecura = 20
    const pokemnonFerido = pokemons[id]
    if(pokemnonFerido.hp == 90) hpDecura = 10

    const info1  = `O pokemon ${pokemnonFerido.nome} já está totalmente curado`
    const info2  = `pokemon  ${pokemnonFerido.nome} curado com ${hpDecura}hp`
    let info = ""

    if(pokemnonFerido.hp == 100){
        info = info1
    }else{
        info = info2
    }

    pokemnonFerido.hp = pokemnonFerido.hp + hpDecura

    if(pokemnonFerido.hp > 100){
        pokemnonFerido.hp = 100
    }

    return info
    
}

module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, actualizarPokemon, deletarPokemon, batalhaPokemo, curarPokemon}