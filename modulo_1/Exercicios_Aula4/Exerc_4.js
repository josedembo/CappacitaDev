/**4) Vimos que os operadores lógicos ajudam a testar mais de uma condição ao mesmo
tempo. Escreva os algoritmos que realizam os seguintes testes:
a) Receber um valor e dizer se é maior que 10 e menor que 50, se não for diga “Insira
um valor entre 10 e 50”. Use o operador &&
b) Para entrar no cinema Tabajara é preciso ter idade maior que a idade de censura (14
anos) e ter o ingresso. Faça um algoritmo que receba idade e ingresso, idade recebe
um number e ingresso um boolean, se a idade for maior que 14 e ingresso true
escreva “Pode entrar”, se a idade for menor ou igual a 14 e ingresso true escreva
“Você não tem a idade mínima”, se a idade for maior que 14 e ingresso false escreva
“Você precisa ter o ingresso”
c) Receber um valor e dizer se é maior que 10 ou menor que 50, se não for diga “Insira
um valor entre 10 e 50”. Use o operador || */

var valor = 12
if(valor > 10 && valor < 50){
    console.log(` O valor ${valor} é maior que 10 e menor que 50`)
}else{
    console.log("Informe um valor entre 10 e 50 ")
}

var idade = 78
var ingresso = false

if(idade > 14 && ingresso == true){
    console.log("pode entrar")
}else if(idade <= 14 && ingresso == true){
    console.log("Você não tem idade suficiente")
}else{
    if(idade > 14 && ingresso == false){
        console.log("você precisa ter ingresso")
    }
}