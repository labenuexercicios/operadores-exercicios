// Construa um programa que
//a Peça ao usuário que insira um número par
//b Imprima no console o resto da divisão desse número por 2
//c Teste o programa com diversos números pares Você notou um padrão? Escreva em um comentário de código
//d O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

//Definições de variáveis
const pergunta1 = "insira um número par"
let numeroResposta

//input
numeroResposta = Number (prompt(pergunta1))

//cálculo resto
let resto = (numeroResposta%2)
//console
console.log(resto)

//Sempre que o usuário inserir um número par, o console irá devolver o resto 0, pois, não há resto na respectiva divisão.
//Entretanto, caso o usuário insira o número impar, a divisão sempre terá o resultado 1 como resto.