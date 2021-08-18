function somar(num1, num2){
    result = num1 + num2;
    return result;
}

somar(2, 4)
array = [3, 5, 7, 9, 4, 6, 12, 8]
function parNumbers(arrayNumbers){
   arrayPar =  arrayNumbers.filter(number  => number %2 == 0)
   return arrayPar;
}
// function parNumbers(array){
//     arrayAuxi = []
//     array.filter(number => {
//         if(number % 2 == 0){
//             arrayAuxi.push(number)
//         }
//     }
//     )
//     return  arrayAuxi;
// }

console.log(parNumbers(array))

