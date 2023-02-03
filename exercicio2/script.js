// OPERADORES

let numero1 = Number(prompt("Digite o primeiro numero:"))

let numero2 = Number(prompt("Digite o segundo numero:"))


let comparacao = numero1 > numero2 
let igual = numero1 === numero2
let divisivelNumero1 = (numero1 % numero2) === 0
let divisivelNumero2 = (numero2 % numero1) === 0

console.log (`
O primeiro número é maior que o segundo? ${comparacao}
O primeiro número é igual o segundo? ${igual}
O primeiro número é divisível pelo segundo? ${divisivelNumero1}
O segundo número é divisível pelo primeiro? ${divisivelNumero2}
`)

