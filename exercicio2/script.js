let primeiro = Number(prompt("Insira um número: "))
let segundo = Number(prompt("Insira outro número: "))

console.log(primeiro,", ", segundo)
console.log("O primeiro número é maior que o segundo?", primeiro > segundo)
console.log("O primeiro número é igual ao segundo?", primeiro === segundo)
console.log("O primeiro número é divisível pelo segundo?", primeiro % segundo === 0)
console.log("O segundo número é divisível pelo primeiro?", segundo % primeiro === 0)