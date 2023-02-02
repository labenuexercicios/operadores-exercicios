//Faça um programa que pergunte ao usuário dois números.
const primeiroNumero = Number(prompt('Insira um número'))
const segundoNumero = Number(prompt('Insira outro número'))

/*O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero
*/
const op1 = primeiroNumero > segundoNumero
console.log(`O primeiro número é maior que o segundo? 
${op1}`)

const op2 = primeiroNumero === segundoNumero
console.log(`O primeiro Número é igual ao segundo? 
${op2}`)

const op3 = primeiroNumero % segundoNumero
let sobraDaDivisao = op3 === 0
console.log(`O primeiro número é divisível pelo segundo? 
${sobraDaDivisao}`)

const op4 = segundoNumero % primeiroNumero
sobraDaDivisao = op4 === 0
console.log(`O segundo número é divisível pelo primeiro?
${sobraDaDivisao}`)
