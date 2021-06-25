var doces = ["bala","pirulito","chiclete","jujuba","chocolate"]
trocaDoce = (doces, palavra) => {
    for(i=0; i < doces.length; i++){
        if(doces[i] == "chiclete"){
            doces[i] = palavra
        }
    }
}

imprimeDoce = (doces) => console.log(doces)

imprimeDoce(doces)
trocaDoce(doces,"batata")
imprimeDoce(doces)

var soma = (a, b) => a + b

var result = soma(2,6)

console.log(`soma = ${result}`)