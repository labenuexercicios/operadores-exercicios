let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

let pergunta1 = num1 > num2
let pergunta2 = num1 === num2
let pergunta3 = num1 % num2 === 0
let pergunta4 = num2 % num1 === 0

const mensagem1 = "O primeiro número é maior que o segundo?"
console.log(mensagem1, pergunta1)

const mensagem2 = "O primeiro número é igual ao segundo?"
console.log(mensagem2, pergunta2)

const mensagem3 = "O primeiro numero é divisível pelo segundo?"
console.log(mensagem3, pergunta3)

const mensagem4 = "O segundo numero é divisível pelo primeiro?"
console.log(mensagem4, pergunta4)