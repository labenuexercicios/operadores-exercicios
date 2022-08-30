//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:
//5 é maior que 20 e também é menor que 2;
let operacao1 = (5 > 20) && (5 < 2)
console.log("5 é maior que 20 e também é menor que 2", operacao1)
//5 é igual a 5 ou é igual a “5”;
let operacao2 = (5 === 5) || (5 === "5")
console.log("5 é igual a 5 ou é igual a “5”", operacao2)
//negação de (vinte é maior que cinquenta)
let operacao3 = 20 > 50
console.log("negação de (vinte é maior que cinquenta)", !operacao3)
//negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
let operacao4 = (20 > 50) || (50 > 60)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)",  !operacao4)
