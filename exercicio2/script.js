
//EXERCÍCIO 2

const a = Number(prompt("Insira um número qualquer"))
const b = Number(prompt("Insira outro número qualquer"))

console.log("O primeiro nímero é maior que o segundo?", a > b)
console.log("Oprimeiro número é igual ao segundo?", a === b)
const rest1 = a % b
console.log("O primeiro número é divisível pelo segundo?", rest1 == 0)
const rest2 = a % b
console.log("O segundo número é divisível pelo primeiro?", rest2 == 0)
