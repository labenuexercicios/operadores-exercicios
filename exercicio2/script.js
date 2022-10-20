let num1 = Number(prompt("Insira o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))

const awnser1 = num1 > num2
const awnser2 = num1 === num2
const awnser3 = ((num1 % num2) === 0 )
const awnser4 = ((num2 % num1) === 0 )

console.log(`O primeiro número inserido foi: ${num1}`)
console.log(`O segundo número inserido foi: ${num2}`)

console.log(`O primeiro numero é maior que segundo? ${awnser1}`)
console.log(`O primeiro numero é igual ao segundo? ${awnser2}`)
console.log(`O primeiro numero é divisível pelo segundo? ${awnser3}`)
console.log(`O segundo numero é divisível pelo primeiro? ${awnser4}`)

