let numA = Number(prompt('Digite um numero?'))
let numB = Number(prompt('Digite outro numero?'))
let resultado
console.log(numA, numB)
resultado = numA > numB
console.log("O primeiro numero é maior que segundo?",resultado)
resultado = numA === numB
console.log("O primeiro numero é igual ao segundo?",resultado)
resultado = (numA % numB) === 0
console.log("O primeiro numero é divisível pelo segundo?",resultado)
resultado = (numB % numA) === 0
console.log("O segundo numero é divisível pelo primeiro? ",resultado)






