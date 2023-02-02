let numero1

let numero2

numero1 = prompt('Digite um número?')
console.log(`Digite um número: ${numero1}`)

numero2 = prompt('Digite um segundo número?')
console.log(`Digite um segundo número: ${numero2}`)

const maior = numero1 > numero2

const igual = numero1 === numero2

const numero1Divisivel = numero1 % numero2 === 0 

const numero2Divisivel = numero2 % numero1 === 0


console.log(`O primeiro número é maior que o segundo? ${maior}`)
console.log(`O primeiro número é igual ao segundo? ${igual}`)
console.log(`O primeiro número é divisível pelo segundo? ${numero1Divisivel}`)
console.log(`O segundo número é divisível pelo primeiro? ${numero2Divisivel}`)
