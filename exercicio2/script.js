const numero1 = prompt("Insira um número qualque.")
console.log("Seu primeiro número foi:" , numero1)
const numero2 = prompt("Insira outo número.")
console.log("Seu segundo número foi:" , numero2) 


console.log("O primeiro é maior que o segundo?" , numero1 > numero2)
console.log("O primeiro número é igual ao segundo?" , numero1 == numero2)
console.log("O primeiro número é divisivel pelo segundo?" , numero1 % numero2 == 0 )
console.log("O segundo número é divisivel pelo primeiro?" , numero2 % numero1 == 0)

/*
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/