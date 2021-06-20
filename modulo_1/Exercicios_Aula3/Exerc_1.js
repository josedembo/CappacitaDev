/*
a) Crie o seu próprio objeto endereco contendo um endereço separando os atributos rua,
numero, bairro, cidade, estado e cep
b) Imprima todos os dados contidos no seu objeto
c) Imprima apenas a rua
d) Imprima apenas a cidade
*/
var endereco ={
    rua: "Sebastião Barbosa de Melo",
    numero:01,
    bairro:"Centro",
    cidade:"Acarape",
    estado:"CE",
    cep:65785000
}


console.log(endereco)
console.log("rua: " + endereco.rua)
console.log("cidade: " + endereco.cidade)
