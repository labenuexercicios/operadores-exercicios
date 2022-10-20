//Construa um programa que:
//a) Peça ao usuário que insira um número par
//b) Imprima no console o resto da divisão desse número por 2.
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number(prompt("Qual é seu numero par?"))
let resto = numeroPar % 2
console.log(resto)

//quando dividido por numero par o resultado sempre é 0, por todos os numeros serem pares, não tem resto
//quando dividido por um numero impar o resultado é 1, porque sobra o resto, onde a diferença para chegar é 1