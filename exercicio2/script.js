let primeiroNumero = Number(prompt("Insira um número:"));

let segundoNumero = Number(prompt("Insira outro número:"));

console.log("Primeiro número:", primeiroNumero);
console.log("Segundo número:", segundoNumero);

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero);

console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero);

console.log("O primeiro numero é divisível pelo segundo?", (primeiroNumero % segundoNumero) == 0);

console.log("O segundo numero é divisível pelo primeiro?", (segundoNumero % primeiroNumero) == 0);