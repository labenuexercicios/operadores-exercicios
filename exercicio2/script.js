let n1 
let n2

n1 = Number(prompt('digite um numero:'))
n2 = Number(prompt('digite outro numero:'))

const compara1 = n1 > n2
console.log(`o primeiro numero é maior que o segundo numero? ${compara1}`)

const compara2 = n1 === n2
console.log(`O primeiro numero é igual ao segundo? ${compara2}`)


const compara3 = Boolean(n1 % n2)
console.log(`O primeiro numero é divisível pelo segundo? ${compara3}`)


const compara4 = Boolean(n2 % n1)
console.log(`o segundo numero é divisel pelo primeiro? ${compara4}`)
