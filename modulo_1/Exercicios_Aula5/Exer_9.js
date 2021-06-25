var listaClientes = [
    {
    nome: "Larissa",
    cidade: "Sumaré"
    },
    {
    nome: "Hugo",
    cidade: "São vicente"
    },
    {
    nome: "André",
    cidade: "Osasco"
    }
 ]

 console.log("imprimindo o nome dos clientes")
 for(var i = 0; i < listaClientes.length; i++){
     if(listaClientes[i].nome == "André"){
         listaClientes[i].nome = "Matias"
     }
     console.log(`cliente ${i+1}: `+ listaClientes[i].nome)
 }

 console.log("imprimindo as cidades dos clientes")
 for(var i = 0; i < listaClientes.length; i++){
     console.log(`cliente ${i+1}: `+ listaClientes[i].cidade)
 }