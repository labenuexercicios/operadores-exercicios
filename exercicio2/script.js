let numero1 = Number (prompt('Insira o primeiro número?'))
let numero2 = Number (prompt('Insira o segundo número?'))

let resposta1 = numero1 > numero2
console.log(`O primeiro número é maior que o segundo? ${resposta1}`)

let resposta2 = numero1 === numero2
console.log(`O primeiro número é igual que o segundo? ${resposta2}`)

let resposta3 = numero1 % numero2 === 0
console.log(`O primeiro numero é divisível pelo segundo? ${resposta3}`)

let resposta4 = numero2 % numero1 === 0
console.log(`O segundo numero é divisível pelo primeiro? ${resposta4}`)