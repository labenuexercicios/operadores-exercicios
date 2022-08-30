const primeiroNumero = prompt("Insira o primeiro número: ");
const converterPrimeiroNumero = Number(primeiroNumero);

const segundoNumero = prompt("Insira o segundo número: ");
const converterSegundoNumero = Number(segundoNumero);

console.log(converterPrimeiroNumero > converterSegundoNumero);
console.log(converterPrimeiroNumero === converterSegundoNumero);
console.log(converterPrimeiroNumero % converterSegundoNumero == 0);
console.log(converterSegundoNumero % converterPrimeiroNumero == 0);
