const {databaseConnection} = require("./connection")


// salavar pokemons  (create)
async function salvarPokemons(pokemon){
    /*
    pokemon = {
        nome : pivathcu,
        tipo: fogo,
        fraqueza: agua, 
        resistencia: relva
    }                                 == ...pokemon
    */
    //knex('books').insert({title: 'Slaughterhouse Five'})
    
    const result = await databaseConnection("pokemons").insert(pokemon)

    if(result){
        return  {
            "nome": pokemon.nome,
            "tipo": pokemon.tipo,
            "fraqueza": pokemon.fraqueza,
            "resistencia": pokemon.resistencia,
            "hp": pokemon.hp,
            "id": result[0]
        }
    }else{
        return {
            error: "Deu erro na inserção"
        }
    }

}

// mostra apenas um pokemon (read)
async function mostrarPokemon(id){
    // knex('users').where('id', 1) 
    
    const result = await databaseConnection("pokemons").where("id", id)

    return result[0]
    
}

// mostra todos os pokemons (read)
async function mostrarPokemons(){
    
    // knex.select().table('books')

    const result = await databaseConnection("pokemons")
    return result

}

// actualiza  um pokemon (update)
async function actualizarPokemon(id, pokemon){

    // knex('books').where('published_date', '<', 2000).update({status: 'archived', thisKeyIsSkipped: undefined})
    const result =  await databaseConnection("pokemons")
    .where('id', '=', id)
    .update({
      ...pokemon,
    })

    if(result){
        return {
            id : parseInt(id),
            ...pokemon
        }
    }else{
        return "deu erro"
    }

}

// deleta um pokemon (delet)
async function deletarPokemon(id){
// knex('accounts').where('activated', false).del()
    const result = await databaseConnection("pokemons").where("id", id).del()

    if(result){
        return "ok"
    }
    
}

//  realiza batalha entre dois pokemons
async function batalhaPokemo(id1, id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10
    
    const result1 = await databaseConnection("pokemons").where("id",id1)
    const result2 =await databaseConnection("pokemons").where("id",id2)
    
    let resultado = ""
    
    
    const pokemon1 = result1[0]
    const pokemon2 = result2[0]

    
    const hpPokemon1 = pokemon1.hp
    const hpPokemon2 = pokemon2.hp

    //batalhando - pokemon1 ataca
    if(pokemon1.hp != 0 && pokemon2.hp != 0){

        if(pokemon1.tipo == pokemon2.fraqueza){
            pokemon2.hp = pokemon2.hp - superEfetivo

            if(pokemon2.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id2).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id2).update({
                    hp: pokemon2.hp,
                })
            }
            
        }else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo

            if(pokemon2.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id2).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id2).update({
                    hp: pokemon2.hp,
                })
            }
        }else{
            pokemon2.hp = pokemon2.hp - efetivo

            if(pokemon2.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id2).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id2).update({
                    hp: pokemon2.hp,
                })
            }
        }
    }

    // batalhando - pokemon2 ataca
    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon2.tipo == pokemon1.fraqueza){
            pokemon1.hp = pokemon1.hp - superEfetivo

            if(pokemon1.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id1).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id1).update({
                    hp: pokemon1.hp,
                })
            }

        }else if(pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo

            if(pokemon1.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id1).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id1).update({
                    hp: pokemon1.hp,
                })
            }

        }else{
            pokemon1.hp = pokemon1.hp - efetivo

            if(pokemon1.hp < 0) {
                await databaseConnection("pokemons").where('id', '=', id1).update({
                     hp: 0,
                 })
            }else{
                await databaseConnection("pokemons").where('id', '=', id1).update({
                    hp: pokemon1.hp,
                })
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
    const result = await databaseConnection("pokemons").where("id", id)

    let hpDecura = 20
    const pokemnonFerido = result[0]
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
    
    await databaseConnection("pokemons").where("id", "=", id).update({
        hp: pokemnonFerido.hp
      })

    if(pokemnonFerido.hp > 100){
        await databaseConnection("pokemons").where("id", "=", id).update({
            hp: 100
          })
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
module.exports = {
    salvarPokemons, 
    mostrarPokemon, 
    mostrarPokemons,
    actualizarPokemon,
    deletarPokemon, 
    batalhaPokemo,
    curarPokemon,
    pk_tipoPokmon}