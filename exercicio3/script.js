//a) 5 é maior que 20 e também é menor que 2;
const comparação1 = 5 > 20 && 5 < 2
console.log("5 > 20 && 5 < 2", comparação1)

//b) 5 é igual a 5 ou é igual a “5”;
const comparação2 = 5 === 5 || 5 === "5"
console.log("5 === 5 || 5 === '5'", comparação2)

//c) negação de (vinte é maior que cinquenta)
const comparação3 = 20 > 50
console.log("20 > 50", comparação3)
console.log("negação de 20 > 50", comparação3 !== 50)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const comparação4 = 20 > 50 || 50 > 60
console.log("negação de 20 > 50 || 50 > 60", comparação4 !==60)