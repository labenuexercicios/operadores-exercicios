//Exercício 2
let primeiroNumero;
let segundoNumero;

primeiroNumero = prompt("Insira um número qualquer");
segundoNumero = prompt("Insira outro número qualquer");

console.log(
  `O primeiro numero é maior que o segundo? ${primeiroNumero > segundoNumero}`
);

console.log(
  `O primeiro número é igual ao segundo? ${primeiroNumero === segundoNumero}`
);

console.log(
  `O primeiro número é divisível pelo segundo? ${
    primeiroNumero % segundoNumero
  }`
);

console.log(
  `O segundo número é divisível pelo primeiro? ${
    segundoNumero % primeiroNumero
  }`
);
