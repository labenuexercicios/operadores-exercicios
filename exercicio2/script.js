const num1 = Number(prompt("Insira o Primeiro Número"))
const num2 = Number(prompt("Insire o Segundo Número"))
console.log(`Primeiro numero: ${num1} e Segundo numero: ${num2}`)

const resto1 = num1 % num2
const resto2 = num2 % num1
console.log(`Primeiro Resto ${resto1}, Segundo Resto ${resto2}`)

console.log(`
O primeiro numero é maior que o segundo? ${num1 > num2}
O primeiro numero é igual ao segundo? ${num1 === num2}
O primeiro numero é divisível pelo segundo? ${resto1 === 0}
O segundo numero é divisível pelo primeiro? ${resto2 === 0}
`)
