let numero1 = prompt ("Insira o primeiro número:")
numero1 = Number(numero1)

let numero2 = prompt ("Insira o segundo número:")
numero2 = Number(numero2)

const pergunta1 = "O primeiro numero é maior que o segundo?"
let resposta1 = numero1>numero2

console.log(pergunta1, resposta1)

const pergunta2 = "O primeiro numero é igual ao segundo?"
let resposta2 = numero1 === numero2

console.log(pergunta2, resposta2)

const pergunta3 = "O primeiro numero é divisível pelo segundo?"
let resposta3 = numero1%numero2 
let resposta3a = resposta3 === 0

console.log(pergunta3, resposta3a)

const pergunta4 = "O segundo numero é divisível pelo primeiro?"
let resposta4 = numero2%numero1 
let resposta4a = resposta4 === 0

console.log(pergunta4, resposta4a)

