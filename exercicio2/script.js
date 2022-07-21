let resp01 = prompt("Digite um número inteiro")
console.log(resp01)
let resp02 = prompt("Agora, digite outro número inteiro")
console.log(resp02)

console.log("O primeiro numero é maior que segundo?","-", resp01 > resp02)
console.log("O primeiro numero é igual ao segundo?","-" ,resp01 === resp02)
console.log("O primeiro numero é divisível pelo segundo?","-", resp01 % resp02 === 0)
console.log("O segundo numero é divisível pelo primeiro?","-", resp02 % resp01 === 0)


/* O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

/* const numero1 = 15
const numero2 = 32

console.log('O primeiro numero é igual ao segundo', numero1 === numero2)
console.log('O primeiro numero é menor ou igual ao segundo', numero1 <= numero2)
console.log('O primeiro numero é maior ao segundo', numero1 > numero2)
console.log('O primeiro numero é menor que segundo', numero1 < numero2) */