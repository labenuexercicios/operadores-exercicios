let primeironumero = prompt("Digite um número!")
let segundonumero = prompt("Digite outro numero!")

const primeiroNumeroReal = Number(primeironumero)
const segundonumeroReal = Number(segundonumero)

console.log(primeiroNumeroReal > segundonumeroReal)
console.log(primeiroNumeroReal == segundonumeroReal)
console.log(primeiroNumeroReal % segundonumeroReal == 0)
console.log(segundonumeroReal % primeiroNumeroReal == 0)