/* Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

let n1=Number(prompt("Digite o numero 1:","Digite aqui"))
let n2=Number(prompt("Digite o numero 2:","Digite aqui"))


console.log(`O primeiro numero é maior que segundo? ${n1>n2}! 
O primeiro numero é igual ao segundo? ${n1===n2}!
O primeiro numero é divisível pelo segundo? ${n1%n2===0}
O segundo numero é divisível pelo primeiro? ${n2%n1===0}
`)
