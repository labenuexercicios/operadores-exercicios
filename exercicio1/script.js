// # Exercício 1 envio

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**
console.log("ola")
const num = Number(prompt("Digite um numero par:"))
// b) Imprima no console **o resto da divisão** desse número por 2.
const resultado = num%2
console.log(`O resto de ${num} dividido por 2 é ${resultado}`)
console.log(`O tipo do primeiro numero é ${typeof(num)} porque eu ja dei o num/prompt, e o tipo do resultado eu nao alterei entao é ${typeof(resultado)}`)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// o resultado sempre é o mesmo
// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
// o resultado para impar é 1 porque sempre resta 1 quan
// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número