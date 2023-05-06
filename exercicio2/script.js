
const numero1 = Number(prompt("Escreva um numero aleatorio"))
const numero2 = Number(prompt("Escreve um numero aleatorio novamente"))
console.log("digite um número aleatorio", numero1)
console.log("digite outro número aleatorio", numero2)

let verificacao = numero1 > numero2
console.log(" O primeiro é maior que o segundo?" , verificacao)

let verificacao1 = numero1 === numero2
console.log("Os números são iguais?", verificacao1)

let verificacao2 = (numero1%numero2)
console.log("Primeiro número é divisivel pelo segundo?", verificacao2 ===0)

let verificacao3 = (numero2%numero1)
console.log(" O Segundo número é divisivel pelo primeiro?", verificacao3 ===0)

