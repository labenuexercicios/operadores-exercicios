let primeiroNumero = Number (prompt('Digite um numero: '))
let segundoNumero = Number (prompt('Digite outro numero: '))

console.log(`Primeiro Numero : ${primeiroNumero} , Segundo Numero ${segundoNumero}`)

let comparacao1 = primeiroNumero > segundoNumero
console.log(`O primeiro numero é maior que o segundo?: ${comparacao1}`)

let comparacao2 = primeiroNumero === segundoNumero
console.log(`O primeiro numero é igual ao segundo?: ${comparacao2}`)

let comparacao3 = primeiroNumero % segundoNumero === 0
console.log(`O primeiro numero é divisível pelo segundo?: ${comparacao3}`)

let comparacao4 = segundoNumero % primeiroNumero === 0
console.log(`O segundo numero é divisivel pelo primeiro ?: ${comparacao4}`)










