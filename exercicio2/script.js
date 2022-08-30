//Faça um programa que pergunte ao usuário dois números. 
//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
/*
```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero
*/


const numero1 = Number(prompt("Insira o primeiro numero"))
console.log(numero1);
const numero2 = Number(prompt("Insira o segundo numero"))
console.log(numero2)

console.log(`O primeiro numero é maior que o segundo?, ${numero1 > numero2}`) // true
console.log(`O primeiro numero é igual ao segundo?, ${numero1 === numero2}`) // false
console.log(`O primeiro numero é divisivel pelo segundo", ${numero1 % numero2 === 0}`) // false
console.log(`O segundo numero é divisivel pelo primeiro? ${numero2 % numero1 === 0}`) // false