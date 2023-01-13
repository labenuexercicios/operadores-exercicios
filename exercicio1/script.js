let numeroPar = prompt("Insira um numero Par")


console.log(numeroPar%2)


/* //ao realizar qual quer divisão por numero par, o resultado
será 0 */


//Ao inserir um numero impar, o resoltado é 1//






//Parte 02 - Operadores Aritméticos
 
/* Exercício 2
• Peça para o usuário inserir dois números e guarde-os em
variáveis diferentes (num1 e num2)
• Imprima no console:
。 A soma do primeiro com o segundo
。 A subtração do primeiro pelo segundo
O A multiplicação do primeiro pelo segundo
O A divisão do primeiro pelo segundo
O O resto da divisão do primeiro pelo segundo 
*/ 

// EXERCÍCIO 02
const num1 = Number(prompt ("Insira o primeiro número"))
const num2 = Number(prompt ("Insira o segundo número"))
console.log(`Seus números são: hum1 = ${num1} e num2 = ${num2}`)
console.log("Soma: ", num1 + num2)
console.log("Subtração:", num1 - num2)
console.log("Multiplicação:", num1 * num2)
console.log("Divisão:", num1 / num2)
console.log("Resto da Divisão:", num1 % num2)


//Parte 03 - Comparadores
/*
 Exercício 3
• Sorteie um número aleatório entre 1 e 10
• Peça para o usuário inserir um número de 1 a 10
• Imprima no console os dois números dizendo se o que foi
digitado pelo usuário é menor, maior ou igual ao
sorteado 
*/

// EXERCÍCIO 03
const numeroSorteado = Math.floor(Math.random() * 10) + 1
const numeroRecebido = Number(prompt ("Insira um número de 1 a 10"))
console.log(`0 número sorteado foi: ${numeroSorteado}`)
if (numeroRecebido === numeroSorteado){
console.log("Seu número é igual ao número sorteado!")
} else if (numeroRecebido > numeroSorteado) {
console.log("Seu número é maior do que o número sorteado!")
} else {
}
console.log("Seu número é menor do que o número sorteado!")

/* 
//Parte 04 - Operadores Lógicos
Exercício 4
Um parque de diversões te contratou para fazer um sistema que
permite ou proíbe a entrada de pessoas em um brinquedo
MUITO RADICAL
Para entrar, é necessário:
• Ter mais de 18 anos
• Ter mais de 1,60m de altura
•
Não ter nenhum problema cardíaco
Faça essas perguntas ao usuário e diga o resultado no console 
*/

// EXERCÍCIO 04
const idadee = Number(prompt ("Digite sua idade"))
const altura = Number(prompt ("Digite sua altura em centímetros"))
const temproblemaCardiaco = prompt ("Você tem algum problema cardíado? S/N")
if (idadee >= 18 && altura >= 160 && temproblemaCardiaco === "N") {
console.log("Pode entrar")
} else {
}
console.log("Não pode entrar")
