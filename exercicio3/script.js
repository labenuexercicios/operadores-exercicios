//PARTE 1

let op1 = (5 > 20) && 5 < 2

/*console.log(`5 é maior que 20 e também é menor que 2:
 ${op1}`)



 let op2 = 5 === 5 ||  5 === "5"
//console.log(`5 é igual a 5 ou é igual a “5” ${op2}`)



let op3 = !(25 > 50)
//console.log(`negação de vinte é maior que cinquenta ${op3}`)



let op4 = !(20 > 50 || 50 > 70)
//console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) ${op4}`)
*/


//PARTE 2


const salariofixo = 2000
const auxilioCreche = 45.50 * 2


const salarioAuxilio = salariofixo + auxilioCreche
console.log(`a soma do salario + o auxilio da o valor de ${salarioAuxilio}`)






//2)
const comissaoJan = 5784.50 * 0.1
//console.log(`a comissao de janeiro foi de ${comissaoJan}`)


//3)
const inssJan = (salarioAuxilio + comissaoJan) * 0.05
//console.log(`o desconto do INSS sera de: ${inssJan}`)

const salarioJan = (salarioAuxilio + comissaoJan) - inssJan
console.log(`salario de janeiro: ${salarioJan}`)






const comissaoFev = 3418.41 * 0.1
//console.log(`a comissao de fevereiro foi de:  ${comissaoFev}`)

const inssFev = (salarioAuxilio + comissaoFev) * 0.05
//console.log(`o desconto do INSS sera de: ${inssFev}`)

const salarioFev = (salarioAuxilio + comissaoFev) - inssFev
console.log(`salario de fevereiro: ${salarioFev}`)






const comissaoMar = 4124.10 * 0.1
//console.log(`a comissao de marco foi de: ${comissaoMar}`)

const inssMar = (salarioAuxilio + comissaoMar) * 0.05
//console.log(`o desconto do INSS sera de: ${inssMar}`)

const salarioMar = (salarioAuxilio + comissaoMar) - inssMar
console.log(`salario de março: ${salarioMar}`)






const comissaoAbril = 1874.00 * 0.1
//console.log(`a comissao de abril foi de: ${comissaoAbril}`)

const inssAbril = (salarioAuxilio + comissaoAbril) * 0.05
//console.log(`o desconto do INSS sera de: ${inssAbril}`)

const salarioAbril = (salarioAuxilio + comissaoAbril) - inssAbril
console.log(`salario de abril: ${salarioAbril}`)






const comissaoMai = 7000.00 * 0.1
//console.log(`a comissao de maio foi de: ${comissaoMai}`)

const inssMai = (salarioAuxilio + comissaoMai) * 0.05
//console.log(`o desconto do INSS sera de: ${inssMai}`)

const salarioMai = (salarioAuxilio + comissaoMai) - inssMai
console.log(`salario de maio: ${salarioMai}`)







const comissaoJun = 9450.00 * 0.1
//console.log(`a comissao de maio foi de: ${comissaoJun}`)

const inssJun = (salarioAuxilio + comissaoJun) * 0.05
//console.log(`o desconto do INSS sera de: ${inssJun}`)

const salarioJun = (salarioAuxilio + comissaoJun) - inssJun
console.log(`salario junho: ${salarioJun}`)







const salarioMedia = (salarioJan + salarioFev + salarioMar + salarioAbril + salarioMai + salarioJun) / 6
const mediaSalarialFixed = salarioMedia.toFixed(2)

console.log(`a media salarial dos 6 meses é de: ${mediaSalarialFixed}`)























