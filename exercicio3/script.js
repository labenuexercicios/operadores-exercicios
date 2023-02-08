const op1 = 5 > 20 && 5 < 2
console.log(`5 é maior que 20 e também é menor que 2 ${op1}`)

const op2 = 5 == 5 && 5 == "5"
console.log(`5 é igual a 5 ou é igual a “5” ${op2}`)

const op3 = 20 > 50
console.log(`negação de (vinte é maior que cinquenta) ${!op3}`)

const op4 = 20 > 50 || 50 > 70
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) ${!op4}`)