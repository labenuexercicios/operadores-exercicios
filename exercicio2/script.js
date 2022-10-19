//EXERCÍCIO 2 

let numeroUm = Number(prompt("Digite o primeiro número:"));
let numeroDois = Number(prompt("Digite o segundo número:"));
console.log("Número 1: " + numeroUm);
console.log("Número 2: " + numeroDois);

console.log("O primeiro número é maior que o segundo?" + (numeroUm > numeroDois));
console.log("O primeiro número é igual o segundo?" + (numeroUm === numeroDois));
console.log("O primeiro número é divisível pelo segundo?" + (numeroUm % numeroDois === 0));
console.log("O segundo número é divisível pelo primeiro?" + (numeroUm % numeroDois === 0));