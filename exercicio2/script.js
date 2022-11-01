let n0 = Number(prompt("Digite um número"))
let n1 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", (n0 > n1))
console.log("O primeiro numero é igual ao segundo?", (n0 === n1))
console.log("O primeiro numero é divisível pelo segundo?", (n0 % n1 === 0))
console.log("O segundo numero é divisível pelo primeiro?", (n1 % n0 ===0))