var dadosClientes = [
    {
    nome: "Lucas",
    sobrenome: "da Silva",
    idade: 21,
    genero: "Masculino",
    plano: "full",
    carencia: false,
    aquisicao: "12/01/2019"
    },
    {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 17,
    genero: "Feminino",
    plano: "medium",
    carencia: false,
    aquisicao: "17/03/2019"
    },
    {
    nome: "Adriana",
    sobrenome: "Menezes",
    idade: 27,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020"
    }
    ]

    module.exports.retornaLista = (array) =>{
        var novaLista = array.filter((cliente) => cliente.idade >= 18 && cliente.idade <= 26)
        return novaLista
    }
    
    console.log("Clientes com idade maior ou igual a 18 e menor ou igual a 26")
    var dados = exports.retornaLista(dadosClientes)
    console.log(dados)
    

    // var clientes  = clientesFiltrados(dadosClientes)

    // console.log(clientes)
