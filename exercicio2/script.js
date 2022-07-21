

/*
Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens 
seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

let nun1 = Number(prompt("Digite um número"))
let nun2 = Number(prompt("Digite outro número"))

let comparacao
let comparacao2 = (nun1 % nun2)



console.log("O primeiro numero é maior que segundo?", (comparacao = nun1 > nun2))
console.log("O primeiro numero é igual ao segundo", (comparacao = nun1 == nun2))
console.log("O primeiro numero é divisível pelo segundo?", comparacao2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", comparacao2 !==0)


console.log(typeof nun1)
console.log(typeof nun2)