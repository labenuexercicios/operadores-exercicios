// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**

// b) Imprima no console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número

Exercício 1
a)
let usuario = Number(prompt("Digite um número par"))
b)
usuario = usuario % 2
console.log(usuario)
c)
o resto da divisão sempre é 0
d)
o resto da divisão é sempre 1
