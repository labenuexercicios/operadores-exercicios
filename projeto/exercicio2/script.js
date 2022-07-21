let numero1 = +prompt ('Insira um número')
let numero2 = +prompt ('Insira outro número')
let divisao1Pelo2 = numero1%numero2
let divisao2Pelo1 = numero2%numero1
let resultado1 = divisao1Pelo2===0
let resultado2 = divisao2Pelo1===0

console.log ('O primeiro numero é maior que segundo? ', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo? ', numero1===numero2)
console.log ('O primeiro numero é divisível pelo segundo? ', resultado1 )
console.log ('O segundo numero é divisível pelo prmeiro?', resultado2 )