// exercicio 2

let usuarioNumero1 = Number(prompt('Escolha primeiro numero'))
let usuarioNumero2 = Number(prompt('Escolha segundo numero'))
console.log ('Numeros escolhidos respectivamente', usuarioNumero1 ,'e', usuarioNumero2)

const primeiroNumero = usuarioNumero1
const segundoNumero = usuarioNumero2

console.log(`O primeiro numero é maior que o segundo? ${primeiroNumero>segundoNumero}`)
console.log(`O primeiro número é igual ao segundo número? ${primeiroNumero===segundoNumero}`)
console.log(`O primeiro numero é divisível pelo segundo? ${primeiroNumero%segundoNumero===0}`)
console.log(`O segundo numero é divisivel pelo primeiro ? ${segundoNumero%primeiroNumero===0}`)
