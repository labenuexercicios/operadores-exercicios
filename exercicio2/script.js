

/*
O primeiro numero é maior que o segundo?
O primeiro numero é igual ao segundo? 
O primeiro numero é divisível pelo segundo? 
O segundo numero é divisível pelo primeiro? 

divisível = com resto zero
*/

let num1 = Number(prompt("Digita o primeiro número"))
let num2 = Number(prompt("Digita o segundo número"))


const A = num1 > num2
console.log(`O primeiro numero é maior que o segundo? ${A}`)

const B = num1 === num2
console.log(`O primeiro numero é igual ao segundo? ${B}`)

const C = num1 % num2 === 0
console.log(`O primeiro numero é divisível pelo segundo? ${C}`)

const D = num2 % num1 === 0
console.log(`O segundo numero é divisível pelo primeiro? ${D}`)

