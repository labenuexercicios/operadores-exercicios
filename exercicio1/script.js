/*# Exercício 1

Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número
 */

// Resposta letra a
let par = prompt ('Digite um número par')
console.log (`O número par é:${par}`)


// Resposta letra B
let saldo = par % 2
console.log (`O resto da divisão é: ${saldo} `)

/* Resposta letra C 
Ao inserir números pares, o resto da divisão é zero*/

/*Resposta letra D
Todos os números ímpares inseridos, retornaram um valor diferente de zero */



