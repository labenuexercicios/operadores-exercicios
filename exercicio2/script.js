
const p1 = "por favor, insira o primeiro número"
const p2 = "por favor, insira o segundo número"
let numero1
let numero2

numero1 = Number (prompt(p1))
numero2 = Number (prompt(p2))


let primeiroMaior = numero1>numero2
console.log("O primeiro numero é maior que segundo?", (primeiroMaior));
let primeiroIgual = numero1===numero2
console.log("O primeiro numero é igual ao segundo?", (primeiroIgual));
let primeiroDivisão = (numero1%numero2)===0
console.log("O primeiro numero é divisível pelo segundo?", (primeiroDivisão));
let segundoDivisão = (numero2%numero1)===0
console.log("O segundo numero é divisível pelo primeiro?", (segundoDivisão));

