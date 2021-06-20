var aluno = {
  nome:"josé",
  idade:21,
  altura:1.80
}
var jornalista = {
  nome:" Ana Maria Braga",
  idade: 60,
  salario: 100.000,
  solateira: false
}

jornalista.nome = jornalista.nome.slice(0, 4).trim()
aluno.nome = "Maria"
console.log(aluno.nome)

var idades = [12, 5, 21, 89, 7]
var frutas = ["banana", "pessigo"]
console.log(frutas[0].indexOf("n"))
console.log(frutas[0].slice(0,4))
console.log("Ana Paula".slice(0,3).trim())
console.log(jornalista.nome)

var myName = "José Dembo"
console.log(myName.split(" "))
console.log(myName.replace("Dembo", "Pedro") + " Dembo")