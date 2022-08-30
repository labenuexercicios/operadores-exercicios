const primeiroNumero = Number(prompt("Insira um numero"))
const segundoNumero = Number(prompt("Insira um segundo numero"))

console.log(`O primeiro numero é maior que segundo? ${primeiroNumero > segundoNumero}`)
console.log(`O primeiro numero é igual ao segundo? ${primeiroNumero === segundoNumero}`)
console.log(`O primeiro numero é divisivel pelo segunda? ${primeiroNumero % segundoNumero=== 0}`)
console.log(`O segundo numero é divisivel pelo primeiro? ${segundoNumero % primeiroNumero=== 0}`)
