//# Exercício 2

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

//```
//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true

//divisível = com resto zero

//Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
//```

var num1 = Number(prompt("qual é o seu primeiro valor?"))
var num2 = Number(prompt("qual é o seu segundo valor?"))

console.log( num1 > num2)
console.log( num1 == num2)
console.log( (num1%num2) == 0)
console.log((num2%num1)== 0)