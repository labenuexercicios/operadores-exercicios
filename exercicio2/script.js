const n1 = ("Digite um numero")
const n2 = ("Digite outro numero")
let resp1 = Number(prompt(n1))
let resp2 = Number(prompt(n2))

console.log("O primeiro numero é maior que o segundo?",
resp1>resp2)
console.log("O primeiro numero é igual ao segundo?",
resp1===resp2)
console.log("O primeiro numero é divisivel pelo segundo?",
resp1%resp2===0)
console.log("O segundo numero é divisivel pelo primeiro?",
resp2%resp1===0)
