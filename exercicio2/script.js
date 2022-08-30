//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações 
//e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true
//divisível = com resto zero

let numero1 = Number(prompt("Insira o número 1:"))

let numero2 = Number(prompt("Insira o número 2:"))

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)

console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)

let numerodivisivel = numero1 % numero2
console.log("O  primeiro numero é divisível pelo segundo?", (numerodivisivel === 0))


let numerodivisivel2 = numero2 % numero1
console.log("O  segundo numero é divisível pelo primeiro?", (numerodivisivel2 === 0))