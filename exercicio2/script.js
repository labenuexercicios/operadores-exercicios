//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que segundo?
//O primeiro numero é igual ao segundo?
//O primeiro numero é divisível pelo segundo?
//O segundo numero é divisível pelo primeiro?

let numero1 = Number(prompt("insira um numero"))
let numero2 = Number(prompt("insira outro numero"))
let maior = numero1 > numero2
console.log("O primeiro numero é maior que segundo?", maior)
let igual = numero1 === numero2
console.log("O primeiro numero é igual ao segundo?", igual)
let divisivel1 = (numero1 % numero2) === 0
console.log("O primeiro numero é divisível pelo segundo?", divisivel1)
let divisivel2 = (numero2 % numero1) === 0
console.log("O segundo numero é divisível pelo primeiro?", divisivel2)
