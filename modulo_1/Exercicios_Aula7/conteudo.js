/*Funções nativas

 pop()
 map() 
 filter()
 forEacth()
 push()
 Math.min()
 Math.max()
 toUpperCase()
 toLowerCase()
*/
var lista = ["batata", "limão", "cenoura"] 
lista.map(function(elemento){console.log(elemento)}) 

lista.forEach((Element, index) => {
    console.log(index, Element)
});