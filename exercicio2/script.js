let number1 
let number2

number1 = Number (prompt("Digite um numero:"))
number2 = Number (prompt("digite outro numero"))

resposta = number1 === number2
console.log("Aqui esta sua resposta:", resposta)

resposta1 = number1 > number2
resposta2 = number1 == number2
resposta3 = number1 % number2
resposta4 = number2 % number1
console.log(resposta1)
console.log(resposta2)
console.log(resposta3==0)
console.log(resposta4==0)

//Com o numero inserido na caixa, o codigo abstrai, em seguida
// resolve os booleanos de comparação

// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. 
//Em seguida, faça as operações e imprima no console
// as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos
// e do resultado das operações.
// ```