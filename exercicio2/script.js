
const numero1 = Number(prompt('Digite um número :'))
const numero2 = Number(prompt('Digite o segundo número :'))

const comp1 = numero1 > numero2
console.log(`O primeiro numero é maior que o segundo?
${comp1}`)

const comp2 = numero1  === numero2
console.log(`O primeiro numero é igual ao segundo
${comp2}`)


const comp3 = numero1 % numero2  === 0
console.log(`O primeiro numero é divisível pelo segundo?
${comp3}`)

const comp4 = numero2 % numero1 == 0
console.log(`O segundo numero é divisível pelo primeiro? 
${comp4}`)

const result = numero1 % numero2
console.log(result)



