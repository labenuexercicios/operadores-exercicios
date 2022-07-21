
let numUm = Number(prompt("Insira um número"))
let numDois = Number(prompt("Insira outro número"))
let restNumUm = (numUm%2)
let restNumDois = (numDois%2)

console.log("O primeiro numero é maior que segundo?", (numUm > numDois))
console.log("O primeiro numero é igual ao segundo?", (numUm === numDois))
console.log("O primeiro numero é divisível pelo segundo?", (restNumUm === 0))
console.log("O segundo numero é divisível pelo primeiro?", (restNumDois === 0))
