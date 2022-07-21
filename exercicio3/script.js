const Op1 = 5 > 20 && 5 > 2
//5 nao é maior que 20 mas é maior que 2, false
const Op2 = 5 === 5 || 5 === "5"
// 5 é igual a 5 que é igual a "5", true

const Op3 = !20 > 50 
const Op4 = !(20 > 50)

console.log("5 é maior que 20 e também é menor que 2", Op1)
console.log("5 é igual a 5 ou é igual a “5”", Op2)
console.log("negação de vinte é maior que cinquenta", Op3)

console.log("negação de (vinte é maior que cinquenta)", Op4)






// b (sim)
//!b (! nega)
// c || d, (esse ||  ou esse)
// && (esse && e esse)
