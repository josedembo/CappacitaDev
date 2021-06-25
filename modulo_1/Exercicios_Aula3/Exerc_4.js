/**Num condomínio moram:
José no apartamento 12A, que possui a vaga de garagem número 4 e não possui
pets.
Alice no apartamento 21B, que possui a vaga de garagem número 14 e possui animais
de estimação.
Ana Clara no apartamento 02A, vaga de garagem 10 e não possui pets.
Levi no apartamento 09B, vaga de garagem 1 e possui pets
Igor no apartamento 17B, vaga de garagem 11 e possui pets

a) Crie o array cadastroMoradores e guarde essas informações.
b) Imprima somente os dados do Igor
c) Ana Clara adotou um gatinho, altere a informação na sua variável
d) Imprima somente os dados da Ana Clara
e) Imprima na tela a quantidade de moradores usando
console.log(cadastroMoradores.length) */
var cadastroMoradores =
[
    {
        nome: "José",
        apartamento: "12A",
        vaga: 10 ,
        PossuiPets: false
    },
    {
        nome: "Alice",
        apartamento: "21B",
        vaga: 14 ,
        PossuiPets: true
    },
    {
        nome: "Ana",
        apartamento: "02A",
        vaga: 10 ,
        PossuiPets:false
    },
    {
        nome: "Levi",
        apartamento: "09B",
        vaga: 1 ,
        PossuiPets:true
    },
    {
        nome: "Igor",
        apartamento: "17B",
        vaga: 11 ,
        PossuiPets: true
    }
]

console.log(cadastroMoradores)
console.log("dados de Igor: ", cadastroMoradores[4])
cadastroMoradores[2].PossuiPets = true
console.log("dados de Ana Clara: ", cadastroMoradores[2])
console.log(cadastroMoradores.length)

var frase = "O capacita é maximo"
console.log(frase.replace("maximo", "incrivel"))

console.log("mostrando os nomes de todos os maradores ")

for (var i = 0; i<cadastroMoradores.length; i++){
    console.log(` morador ${i+1}: `+cadastroMoradores[i].nome)
}

console.log("imprimindo números pares de 1 a 20")
for(var i = 2; i <= 20; i+=2){
    console.log(i)
}