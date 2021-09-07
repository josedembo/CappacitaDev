const {databaseConnection} = require("./connection")



// salavar pokemons
async function salvarPokemons(pokemon){
    const queryInsertPokemon = `INSERT INTO pokemons(nome, tipo, fraqueza, resistencia) VALUES("${pokemon.nome}", "${pokemon.tipo}", "${pokemon.fraqueza}", "${pokemon.resistencia}");`
    
    const result = await databaseConnection.raw(queryInsertPokemon)
    
    console.log(result)

    if(result){
        return  {
            "nome": pokemon.nome,
            "tipo": pokemon.tipo,
            "fraqueza": pokemon.fraqueza,
            "resistencia": pokemon.resistencia,
            "hp": pokemon.hp,
            "id": result[0].insertId
        }
    }else{
        console.error("deu erro!")
        return {
            error: "Deu erro na inserção"
        }
    }

}

// mostra apenas um pokemon
async function mostrarPokemon(id){
    const querySelecttPokemon = `SELECT * FROM pokemons WHERE id = ${id}`
    
    const result = await databaseConnection.raw(querySelecttPokemon)
    
    return result[0][0]
    
}

// mostra todos os pokemons
async function mostrarPokemons(){
    
    querySelectPokemon = `SELECT * FROM pokemons` 
    const result = await databaseConnection.raw(querySelectPokemon)
    return result[0]

}

// actualiza  um pokemon
async function actualizarPokemon(id, pokemon){
    queryUpdatePokemon = `UPDATE pokemons SET nome = "${pokemon.nome}"  WHERE id = ${id}`
    const result = await databaseConnection.raw(queryUpdatePokemon)

    if(result){
        return "ok"
    }else{
        return "deu erro"
    }

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
async function batalhaPokemo(id1, id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10
    
    const querySelectPokemon1 = `SELECT * FROM pokemons WHERE id = ${id1}`
    const querySelectPokemon2 = `SELECT * FROM pokemons WHERE id = ${id2}`
    
    
    
    const result1 = await databaseConnection.raw(querySelectPokemon1)
    const result2 = await databaseConnection.raw(querySelectPokemon2)
    
    let resultado = ""
    
    
    const pokemon1 = result1[0][0]
    const pokemon2 = result2[0][0]

    
    const hpPokemon1 = pokemon1.hp
    const hpPokemon2 = pokemon2.hp
    //batalhando
    
    if(pokemon1.hp != 0 && pokemon2.hp != 0){

        if(pokemon1.tipo == pokemon2.fraqueza){
            pokemon2.hp = pokemon2.hp - superEfetivo

            if(pokemon2.hp < 0) {
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = 0  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)
            }else{
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = ${pokemon2.hp}  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)

            }
            
        }else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo

            if(pokemon2.hp < 0) {
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = 0  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)
            }else{
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = ${pokemon2.hp}  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)

            }
        }else{
            pokemon2.hp = pokemon2.hp - efetivo

            if(pokemon2.hp < 0) {
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = 0  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)
            }else{
                const queryUpdatePokemon2 = `UPDATE pokemons SET hp = ${pokemon2.hp}  WHERE id = ${id2}`
                await databaseConnection.raw(queryUpdatePokemon2)

            }
        }
    }

    // batalhando

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon2.tipo == pokemon1.fraqueza){
            pokemon1.hp = pokemon1.hp - superEfetivo

            if(pokemon1.hp < 0){
                const queryUpdatePokemon1 = `UPDATE pokemons SET hp = 0  WHERE id = ${id1}`
                await databaseConnection.raw(queryUpdatePokemon1)
            }else{
            const queryUpdatePokemon1 = `UPDATE pokemons SET hp = ${pokemon1.hp}  WHERE id = ${id1}`
            await databaseConnection.raw(queryUpdatePokemon1)
            }

        }else if(pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo

            if(pokemon1.hp < 0){
                const queryUpdatePokemon1 = `UPDATE pokemons SET hp = 0  WHERE id = ${id1}`
                await databaseConnection.raw(queryUpdatePokemon1)
            }else{
            const queryUpdatePokemon1 = `UPDATE pokemons SET hp = ${pokemon1.hp}  WHERE id = ${id1}`
            await databaseConnection.raw(queryUpdatePokemon1)
            }

        }else{
            pokemon1.hp = pokemon1.hp - efetivo

            if(pokemon1.hp < 0){
                const queryUpdatePokemon1 = `UPDATE pokemons SET hp = 0  WHERE id = ${id1}`
                await databaseConnection.raw(queryUpdatePokemon1)
            }else{
            const queryUpdatePokemon1 = `UPDATE pokemons SET hp = ${pokemon1.hp}  WHERE id = ${id1}`
            await databaseConnection.raw(queryUpdatePokemon1)
            }

        }
    }

    // verificando quem sobre o maior ataque
    const difHpPokemon1 = hpPokemon1 - pokemon1.hp 
    const difHpPokemon2 = hpPokemon2 - pokemon2.hp
    
    // encontrar o vencedor(quem sofreu menor ataque)
    if(difHpPokemon1 < difHpPokemon2){
        resultado = `resultado: ${pokemon1.nome} é o vencedor da batalha`
    }else if(difHpPokemon1 == difHpPokemon2){
        resultado = `resultado: Empate`
    }else{
        resultado = `resultado: ${pokemon2.nome} é o vencedor da batalha`
    }
    const antesBatalha = `hp antes da batalha\n${pokemon1.nome}: ${hpPokemon1}| ${pokemon2.nome}: ${hpPokemon2}`
    const depoisBatalha = `hp depois da batalha\n${pokemon1.nome}: ${pokemon1.hp} | ${pokemon2.nome}: ${pokemon2.hp}`

    return `${antesBatalha}\n${depoisBatalha}\n${resultado}`

}

// cura um pokemon
async function curarPokemon(id){
    const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`
    const result = await databaseConnection.raw(querySelectPokemon)

    let hpDecura = 20
    const pokemnonFerido = result[0][0]
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
    const queryUpdatePokemon = `UPDATE pokemons SET hp = ${pokemnonFerido.hp} WHERE id = ${id}`
    await databaseConnection.raw(queryUpdatePokemon)

    if(pokemnonFerido.hp > 100){
        const queryUpdatePokemon = `UPDATE pokemons SET hp = 100 WHERE id = ${id}`
        await databaseConnection.raw(queryUpdatePokemon)
    }

    return info
    
}

// mostrar  os nomes dos pokemons com o mesmo tipo
function pk_tipoPokmon(tipo){
    const nomes = []
    const listaPokemons = pokemons.filter(pokemon => pokemon.tipo == tipo)
    
    for(let i =0; i<listaPokemons.length; i++){
        let pokemon = listaPokemons[i]
        nomes.push(pokemon.nome) 
    }
    return  `Total de pokemons do tipo ${tipo}: ${listaPokemons.length}\nPokemons:${nomes} `
}

// console.log(pk_tipoPokmon("electric"))
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons,
     actualizarPokemon,deletarPokemon, batalhaPokemo, curarPokemon,
    pk_tipoPokmon}