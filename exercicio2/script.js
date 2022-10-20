const pergunta = prompt("número 1")
let resposta = pergunta
const pergunta2 = prompt("número 2")
let resposta2 = pergunta2

console.log("O primeiro numero é maior que segundo?", resposta > resposta2)
console.log("O primeiro numero é igual ao segundo?", resposta === resposta2)
console.log("O primeiro numero é divisível pelo segundo?", resposta % resposta2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", resposta2 % resposta === 0)