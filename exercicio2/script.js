/* # Exercício 2

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações. */


let numb1
let pergNumb
pergNumb = "insira um numero!"
numb1 = prompt(pergNumb)
console.log(pergNumb)
console.log(numb1)

let numb2
pergNumb = "insira outro numero!"
numb2 = prompt(pergNumb)
console.log(pergNumb)
console.log(numb2)

let comparacao

comparacao = numb1 > numb2
console.log("O primeiro numero é maior que segundo?", comparacao) 

comparacao = numb1 == numb2
console.log("primeiro numero é igual ao segundo?", comparacao)

comparacao = numb1 % numb2 === 0
console.log("O primeiro numero é divisível pelo segundo?", comparacao)

numb2 % numb1 == comparacao
console.log("O segundo numero é divisível pelo primeiro?", comparacao)