var numeros = [1, 3, 6, 5]
var mostraNumeros = numeros.map((num)=> num+2)
console.log(mostraNumeros)
var dobroNumeros = numeros.map(function(num){return num * 2})
// console.log(dobroNumeros)

var filtrado = numeros.filter((num) => num % 2 == 0)
console.log(filtrado)