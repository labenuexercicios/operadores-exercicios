const num1 = Number(prompt("Digite um número:"));
const num2 = Number(prompt("Digite um segundo número:"));

console.log("O primeiro numero é maior que o segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", ((num1 % num2) === 0));
console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1) === 0);