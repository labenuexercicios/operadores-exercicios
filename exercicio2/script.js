let numero1 = prompt('Insira o primeiro número (aleatório)')
let numero2 = prompt('Insira o segundo número (aleatório)')
console.log('O primeiro número é maior que o segundo?', numero1 > numero2)
console.log('O primeiro número é igual ao segundo?', numero1 >= numero2)
let divisivel = numero1 % numero2
console.log('O primeiro número é divisível pelo segundo?', divisivel === 0)
const divisivel2 = numero2 % numero1
console.log('O segundo numero é divisível pelo primeiro?', divisivel2 === 0)