const respA = 20 < 5 && 5 < 2 
console.log(respA)
// False, por que 5 é maior que 2 e menor que 20.

const respB = 5 === 5 || 5 === "5"
console.log (respB)
// True, por que mesmo 5 ser diferente de "5", 5 é igual a 5.

const respC = !20 > 50
console.log(respC)
// False, por que a negação de 20 é -20 e isso é menor que 50.

const respD = !(20 > 50)
console.log(respD)
// True, ele verifica primeiro o que está no parentese
// 20 é maior que 50? não, então false, como fora do parentese
// temos a negação, ele muda para True.