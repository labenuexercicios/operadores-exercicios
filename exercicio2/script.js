const n1 = prompt('Digite algum número')
const n2 = prompt('Agora digite outro número')
let zero = 0

console.log('O primeiro numero é maior que segundo?', n1>n2)
console.log('O primeiro numero é igual ao segundo?', n1==n2)
console.log('O primeiro numero é divisível pelo segundo?', n1%n2 == zero)
console.log('O segundo numero é divisível pelo primeiro?', n2%n1 == zero)

/* const A = Number(prompt("digite"))
let primeiroMaiorSegundo = n1 > n2
console.log("O primeiro maior q segundo" , primeiroMaiorSegundo)