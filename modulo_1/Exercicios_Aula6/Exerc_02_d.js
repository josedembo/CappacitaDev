var listaDadosClientes = [
    {
    nome: 'Daiane',
    idade: 24,
    endereco: 'Rua Freire, 24, Consolação, São Paulo'
    },
    {
    nome: 'Gabriel',
    idade: 19,
    endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
    },
    {
    nome: 'Bruno',
    idade: 37,
    endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
    }
    ]

var inderecosClientes = (listaDadosClientes) =>{
//    return listaDadosClientes.filter(clientes => clientes.nome == "Daiane")
      return listaDadosClientes.map(clientes => clientes.endereco)
}

enderecos = inderecosClientes(listaDadosClientes)

console.log(enderecos)