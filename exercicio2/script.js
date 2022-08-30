let a = Number(prompt("Insira um numero qualquer"))
let b = Number(prompt("Insira mais um numero qualquer"))

let divisivel = a % b
let divisivel2 = b % a
console.log(`
O primeiro numero é maior que segundo? ${a > b}
O primeiro numero é igual ao segundo? ${a === b}
O primeiro numero é divisível pelo segundo? ${divisivel === 0 }
O segundo numero é divisível pelo primeiro? ${divisivel2 === 0}
`)