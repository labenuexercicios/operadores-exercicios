const primeiroNumero = Number(prompt("Insira o primeiro número:"))
const segundoNumero = Number(prompt("Digite o segundo numero:"))


const a = primeiroNumero > segundoNumero
const b = primeiroNumero == segundoNumero
const c = (primeiroNumero & segundoNumero) == 0
const d = (segundoNumero & primeiroNumero) == 0

console.log("O primeiro numero é maior que segundo?",a)
console.log("O primeiro numero é igual ao segundo?", b)
console.log("O primeiro numero é divisível pelo segundo?",c)
console.log("O segundo numero é divisível pelo primeiro?",d)