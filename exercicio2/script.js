let numPar = Number (prompt("Digite um número par"));
let numImpar = Number (prompt("Digite um número ímpar"));
let numMaior = ("O primeiro número é maior que o segundo?", numPar > numImpar);
let numIgual = ("O primeiro número é igual ao segundo?", numPar == numImpar);
let numDivisivel = ("O primeiro número é divisível pelo segundo?", (numPar % numImpar) === 0 ) ;
let numDivisivel2 = ("O segundo número é divisível pelo primeiro?", (numImpar % numPar) === 0);

console.log ("O primeiro número é maior que o segundo?", numMaior);
console.log("O primeiro número é igual so segundo?", numIgual);
console.log("O primeiro número é divisível pelo segundo?", numDivisivel);
console.log("O segundo número é divisível pelo primeiro?", numDivisivel2);
