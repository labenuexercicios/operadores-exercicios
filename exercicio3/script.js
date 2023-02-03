/* const opA = 5 > 20 && 5 < 2
console.log('opA'opA)

const opB = 5 === 5 || 5 === '5'
console.log('opB'opB)

const opC = !(20 > 50) 
console.log('opC'opC)

const opD = !(20 > 50 || 50 > 60 )
console.log('opD'opD)

*/

//ex 3 pt 2
const salarioFixo = 2000
const auxCreche = 45.50 * 2
const salarioComBeneficios = salarioFixo + auxCreche

console.log(`O salario com benefício é de: ${salarioComBeneficios}`)
const comissaoJaneiro = 5784.50 * 0.10
const comissaoFevereiro = 3418.41 * 0.10
const comissaoMarco = 4124.10 * 0.10
const comissaoAbril = 1874 * 0.10
const comissaoMaio = 7000 * 0.10
const comissaoJunho = 9450 * 0.10 

const descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * 0.05
const descontoInssFevereiro = (salarioFixo + comissaoFevereiro) * 0.05
const descontoInssMarco = (salarioFixo + comissaoMarco) * 0.05 
const descontoInssAbril = (salarioFixo + comissaoAbril) * 0.05 
const descontoInssMaio = (salarioFixo + comissaoMaio) * 0.05 
const descontoInssJunho = (salarioFixo + comissaoJunho)* 0.05

const salarioFinalJan = salarioComBeneficios + comissaoJaneiro - descontoInssJaneiro
const salarioFinalFev = salarioComBeneficios+comissaoFevereiro-descontoInssFevereiro
const salarioFinalMar = salarioComBeneficios + comissaoMarco - descontoInssMarco
const salarioFinalAbr = salarioComBeneficios + comissaoAbril - descontoInssAbril
const salarioFinalMai = salarioComBeneficios + comissaoMaio - descontoInssMaio
const salarioFinalJun = salarioComBeneficios + comissaoJunho - descontoInssJunho

const media = (salarioFinalJan + salarioFinalFev + salarioFinalMar + salarioFinalAbr + salarioFinalMai + salarioFinalJun) / 6 

console.log(`Comissão de janeiro ${comissaoJaneiro}`)
console.log(`O desconto de INSS será de : ${descontoInssJaneiro}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalJan}`)

console.log(`Comissão de Fevereiro ${comissaoFevereiro}`)
console.log(`O desconto de INSS será de : ${descontoInssFevereiro}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalFev}`)

console.log(`Comissão de janeiro ${comissaoMarco}`)
console.log(`O desconto de INSS será de : ${descontoInssMarco}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalMar}`)

console.log(`Comissão de janeiro ${comissaoAbril}`)
console.log(`O desconto de INSS será de : ${descontoInssAbril}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalAbr}`)

console.log(`Comissão de janeiro ${comissaoMaio}`)
console.log(`O desconto de INSS será de : ${descontoInssMaio}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalMai}`)

console.log(`Comissão de janeiro ${comissaoJunho}`)
console.log(`O desconto de INSS será de : ${descontoInssJunho}`)
console.log(`O salário com acréscimos e descontos é : ${salarioFinalJun}`)

console.log(`A media do salário em seis meses é : ${media}`)






























