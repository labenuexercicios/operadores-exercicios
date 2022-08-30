// a) 5 é maior que 20 e também é menor que 2;
// b) 5 é igual a 5 ou é igual a “5”;
// c) negação de (vinte é maior que cinquenta)
// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const afi1 = 5 > 20 && 5 < 2
const afi2 = 5 === 5 || 5 === '5'
const afi3 = !(20 > 50)
const afi4 = !(20 > 50 || 50 > 60)
console.log(afi1)
console.log(afi2)
console.log(afi3)
console.log(afi4)