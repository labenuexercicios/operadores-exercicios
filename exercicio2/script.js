let um = prompt('insira um número')
console.log(`primeiro número: ${um}`)

let dois = prompt('insira outro número')
console.log(`segundo número: ${dois}`)

let maior = um > dois
console.log(`O primeiro numero é maior que o segundo? ${maior}`)
 
let igual = um === dois
console.log(`O primeiro numero é igual ao segundo? ${igual}`)

let divisivelUm = um % dois === 0
console.log(`O primeiro numero é divisível pelo segundo? ${divisivelUm}`)

let divisivelDois = dois % um === 0
console.log(`O segundo numero é divisível pelo primeiro? ${divisivelDois}`)