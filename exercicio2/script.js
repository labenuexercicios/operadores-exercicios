const numero1 = Number (prompt("Insira um numero qualquer"))
const numero2 = Number (prompt("Insira um outro numero qualquer"))
console.log(numero1, numero2)

//O primeiro numero é maior que segundo? true
const éMaior = numero1 > numero2
console.log("maior", éMaior)
//O primeiro numero é igual ao segundo? false
const éIgual = numero1 === numero2
console.log("igual", éIgual)
//O primeiro numero é divisível pelo segundo? true
const éDivisível = (numero1 / numero2) === 0
console.log("divisível pelo primeiro numero?", éDivisível)
const restoDivisão = numero1 % numero2
console.log("restoDivisão", restoDivisão)
//O segundo numero é divisível pelo primeiro? true
const éDivisível2 = numero2 / numero1
console.log("divisível pelo segundo numero?", éDivisível2)
const restoDivisão2 = numero2 % numero1
console.log("restoDivisão2", restoDivisão2)