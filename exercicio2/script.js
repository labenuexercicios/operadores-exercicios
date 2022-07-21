const num1 = prompt("Digite um número:");
const num2 = prompt("Digite mais um número:");


/* O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

r1 = (Number(num1) > Number(num2))
r2 = (num1 === num2)
r3 = ((num1%num2) === 0)
r4 = ((num2%num1) === 0)

console.log("O primeiro numero é maior que segundo?", r1, 
"\nO primeiro numero é igual ao segundo?", r2, "\nO primeiro numero é divisível pelo segundo?", r3, "\nO segundo numero é divisível pelo primeiro?", r4 );