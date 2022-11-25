/*EXERCICIO 3 A) Criei uma variavel com os valores solicitados, e logo fiz um console para realizar a operação de comparacao.*/
//a) 5 é maior que 20 e também é menor que 2;

const operacao1 = 5 > 20 && 20 > 2 
console.log(operacao1)

//b) 5 é igual a 5 ou é igual a “5”;

const operacao2 = 5 === 5 
const operacao3 = 5 === "5"
console.log(operacao2)
console.log(operacao3)
/* RESOLUCAO B) Criei duas variaveis para adicionar a operacao, e coloquei essas variaveis dentro do console para imprimir se é verdadeiro ou falso.
*/

/*# Exercício 3

### Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

c) negação de (vinte é maior que cinquenta)
*/
const negacao = 20 > 50 
console.log(negacao)

/*RESOLUCAO C) Criacao de varivel const para inserir a operacao e imprir no console.*/

/*d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)*/
 const negacao1 = 20 > 50 || 50 > 70 
 console.log(negacao1)

/* RESOLUCAO D) Variavel para inserir a operacao e o console para imprimir a resposta booleana.


/*Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/
