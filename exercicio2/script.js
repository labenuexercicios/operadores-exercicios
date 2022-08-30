let num1 = Number(prompt("me fale um número aleatório"))
let num2 = Number(prompt("me fale outro número aleatório"))

console.log (`o número 1 é: ${num1}`)
console.log (`o número 2 é: ${num2}`)

const teste1 = num1 > num2
const teste2 = num1 === num2
const teste3 = num1 % num2 === 0
const teste4 = num2 % num1 === 0

console.log (`
O primeiro numero é maior que segundo?: ${teste1},
O primeiro numero é igual ao segundo?: ${teste2},
O primeiro numero é divisível pelo segundo?: ${teste3},
O segundo numero é divisível pelo primeiro?: ${teste4}
    `)
