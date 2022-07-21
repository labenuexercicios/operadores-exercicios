// # Exercício 3

// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

// a) 5 é maior que 20 e também é menor que 2;
const respostaA = 5 > 20 && 20 < 2
console.log(respostaA);

// b) 5 é igual a 5 ou é igual a “5”;
const respostaB = 5 === 20 && 5 === "5"
console.log(respostaB);

// c) negação de vinte é maior que cinquenta
const respostaC = !"vinte" > "cinquenta"
console.log(respostaC);

// d) negação de (vinte é maior que cinquenta)
const respostaD = !("vinte" > "cinquenta");
console.log(respostaD);

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```