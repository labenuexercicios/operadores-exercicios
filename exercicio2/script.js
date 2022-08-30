//Faça um programa que pergunte ao usuário dois números. 
let num1 = prompt("Diga um número")
parseInt(num1)
let num2 = prompt("Diga outro número")
parseInt(num2)

/*Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
O primeiro numero é maior que segundo? true*/
console.log("O primeiro numero é maior que segundo?", num1 > num2)

//O primeiro numero é igual ao segundo? false
console.log("O primeiro numero é igual ao segundo?", num1 == num2)

//O primeiro numero é divisível pelo segundo? true
console.log("O primeiro numero é divisível pelo segundo?", (num1 % num2 == 0))

//O segundo numero é divisível pelo primeiro? true*/
console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1 == 0))


