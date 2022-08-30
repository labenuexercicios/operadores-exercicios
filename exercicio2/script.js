// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

let numero1 = Number(prompt('digite um número'))
let numero2 = Number(prompt('digite outro número'))
console.log('O primeiro numero é maior que segundo?', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?', numero1 === numero2)

const div1 = numero1%numero2 === 0
const div2 = numero2%numero1 === 0
console.log('O primeiro numero é divisível pelo segundo?', div1)
console.log('O segundo numero é divisível pelo primeiro?', div2)
