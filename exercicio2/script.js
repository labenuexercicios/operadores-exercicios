//EXERCICIO 2

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o primeiro número: "));
console.log("Número 1: " + typeof numero1);
console.log("Número 2: " + typeof numero2);

console.log("O primeiro numero é maior que segundo? " + (numero1 > numero2));
console.log("O primeiro numero é igual ao segundo? " + (numero1 === numero2));
console.log("O primeiro numero é divisível pelo segundo? " + (numero1 % numero2 === 0));
console.log("O segundo numero é divisível pelo primeiro? " + (numero2 % numero1 === 0));