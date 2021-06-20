/* Utilize o console para os exercícios a seguir:
a) Crie um array meuNome contendo seu nome completo
b) Imprima na tela a quantidade de caracteres na variável meuNome utilizando o método
.length()
c) Com a variável meuNome invés de imprimir diretamente, guarde na variável qtdLetras
a quantidade de caracteres utilizando o método .length(). Imprima qtdLetras.
d) Na variável minhaFrase = “Vou praticar muito para aprender” imprima qual a posição
no índice do primeiro caractere “p”. Use indexOf().
e) Com a mesma variável imprima a posição no índice da palavra “para”
f) Com a mesma variável verifique se existe o caractere “w”
*/

var meuNome = ["José Pedro Daniel Dembo"]
console.log(meuNome[0].length)

qtdLetras = meuNome[0].length
console.log("quantidade de letras: " + qtdLetras)
var minhaFrase = "Vou praticar muito para aprender"
console.log("Posição da letra 'p': "+ minhaFrase.indexOf("p"))
console.log("Posção da palavra 'para': ", minhaFrase.indexOf("para"))
console.log("existe o caractere 'w'?: ", minhaFrase.indexOf('w'))