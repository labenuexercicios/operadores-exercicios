const a = 5
const b = 20
const c = 2
const d = 50
const e = 60

const aa = (a > b &&  a < c)
const bb = (a === a || 5)
const cc = (b > d)
const dd = (b > d || d > e)

console.log(`
5 é maior que 20 e também é menor que 2: ${aa}
5 é igual a 5 ou é igual a "5": ${bb}
Negação de vinte (é maior que cinquenta): ${cc}
Negação de (vinte é maior que cinquenta OU cinquenta é maior que): ${dd}
`)
