let operação1 = 5>20 && 5<2
console.log("5 é maior que 20 e também é menor que 2 =", operação1);

let operação2 = 5===5 || 5==="5"
console.log("5 é igual a 5 ou é igual a “5” =", operação2);

let operação3 = !20>50
console.log("Negação de vinte é maior que cinquenta", operação3);
//quando é uma expressão (não apenas um número sozinho) sem parênteses o js ignora o !

let operação4 = !(20>50)
console.log("Negação de (vinte é maior que cinquenta)", operação4);
//negação de algo falso vira verdadeira