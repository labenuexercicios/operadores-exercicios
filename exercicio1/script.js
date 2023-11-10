//a) Peça ao usuário que insira um número **par**
const numPar = +prompt("Entre com um número par:");
const restoDivisao = numPar % 2;

//b) Imprima no console **o resto da divisão** desse número por 2.
console.log("O resto da divisão é:", restoDivisao);

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//O resto da divisão está sendo 0 em todos os retornos, é uma característica dos números pares.

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
// Não dá erro, entretanto, o resto da divisão está sendo 1 ao contrário de quando um número par é informado.