/* Escreva as operações lógicas abaixo em formato de código. 
Imprima no console se o valor da operação é verdadeira ou falsa:
a) 5 é maior que 20 e também é menor que 2;
b) 5 é igual a 5 ou é igual a “5”;
c) negação de vinte é maior que cinquenta
d) negação de (vinte é maior que cinquenta) */

const c = !20>50
const d = ! (20>50)

console.log('I  5 é maior que 20 e também é menor que 2?',5>20 && 5<2)
console.log('II  5 é igual a 5 ou é igual a “5”?',5==5 || 5==="5")
console.log('III  negação de vinte é maior que cinquenta?',c)
console.log('IV  negação de (vinte é maior que cinquenta)?',d)

console.log("V  0 representa o 'vazio' por isso é:",!0) 
console.log("VI  esse n° por ter valor é:",!1)

//quando vc nega algo que nao é booleano (que nao da para ser negada)

/* DÚVIDA: se eu nego algo que já está negado (errado) significa
que é verdade (certo) */