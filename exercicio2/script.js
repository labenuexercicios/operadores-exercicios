const num1 = Number(prompt(`Digite o primeiro número:`))
const num2 = Number(prompt(`Digite o segundo número:`))

const maior = num1 > num2
const igual = num1 === num2
const divisivelPrimeiroPeloSegundo = (num1 % num2) === 0
const divisivelSegundoPeloPrimeiro = (num2 % num1) === 0

console.log(`Os números informados foram:

Número 1: ${num1}.
Número 2: ${num2}.

O primeiro número é maior que o segundo? - ${maior}.

O primeiro número é igual ao segundo? - ${igual}.

O primeiro número é divisível pelo segundo? - ${divisivelPrimeiroPeloSegundo}.

O segundo número é divisível pelo primeiro? - ${divisivelSegundoPeloPrimeiro}.
`)