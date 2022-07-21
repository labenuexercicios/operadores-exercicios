const  primeiroNumero = prompt('digite o primeiro numero');
const segundoNumero = prompt('digite o segundo numero');

console.log('o primeiro numero é maior que o segundo?', +primeiroNumero > +segundoNumero);
console.log('o primeiro numero é igual ao segundo?', +primeiroNumero === +segundoNumero);
console.log('o primeiro numero é divisível pelo o segundo?', +primeiroNumero % +segundoNumero);
console.log('o segundo numero é divisível pelo o primeiro?', +segundoNumero % +primeiroNumero)
