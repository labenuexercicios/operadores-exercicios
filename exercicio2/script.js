const valorA = Number(prompt("Digite um número qualquer"))
const valorB = Number(prompt("Digite outro número qualquer"))

console.log("O primeiro numero é maior que segundo?",(valorA>valorB))
console.log("O primeiro numero é igual ao segundo?",(valorA===valorB))
console.log("O primeiro numero é divisível pelo segundo?",((valorA%valorB)===0))
console.log("O segundo numero é divisível pelo primeiro?",((valorB%valorA)===0))
