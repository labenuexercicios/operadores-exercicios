const operacão1 = 5 > 20 && 5 < 2

const operacão2 = 5 === 5 || 5 === "5"

const operacão3 = !(20 > 50)

const operacão4 = !(20 > 50 || 50 > 60)

console.log(operacão1)  
// false, porque 5 nao é maior que 20, logo temos false

console.log(operacão2) 
// true, porque 5 é igual a 5

console.log(operacão3) 
// true

console.log(operacão4)
// true