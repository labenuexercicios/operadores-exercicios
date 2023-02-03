// PARTE .1
/*
const a = (5 > 20) && 5 < 2
console.log (a)

const b = 5 === 5 || 5 === '5'
console.log(b)

const c = !(20 > 50)
console.log(c)

const d = !(20 > 50 || 50 > 60)
console.log(d)
*/
// PARTE .2

const salarioFixo = 2000
const auxCreche = 45.5 * 2
const salBene = salarioFixo + auxCreche
console.log(`O salario mais o auxiolio é ${salBene}`)

const comissaoJan = 5784.50 * 0.1
console.log(`A comissão de janeiro foi : ${comissaoJan}`)

const descontoINSSjan = (salarioFixo + comissaoJan) * 0.05
console.log(`O desonto de Janeiro será : ${descontoINSSjan}`)
const resultfinalJan = salBene + comissaoJan - descontoINSSjan
console.log(resultfinalJan)

const comissaoFev = 3418.41 * 0.1
console.log(`A comissão de fevereiro foi : ${comissaoFev}`)

const descontoINSSfev = (salarioFixo + comissaoFev) * 0.05
console.log(`O desconto de Fevereiro será : ${descontoINSSfev}`)
const resultfinalFev = salBene + comissaoFev - descontoINSSfev
console.log(resultfinalFev)

const comissaoMar = 4124.10 * 0.1
console.log(`A comissão de março foi : ${comissaoMar}`)

const descontoINSSmar = (salarioFixo + comissaoMar) * 0.05
console.log(`O desconto de Março será : ${descontoINSSmar}`)
const resultfinalMar = salBene + comissaoMar - descontoINSSmar
console.log(resultfinalMar)

const comissaoAbr = 1874.0 * 0.1
console.log(`A comissão de Abril será : ${comissaoAbr}`)

const descontoINSSabr = (salarioFixo + comissaoAbr) * 0.05
console.log(`O desconto de Abril será : ${descontoINSSabr}`)
const resultfinalAbr = salBene + comissaoAbr - descontoINSSabr
console.log(resultfinalAbr)

const comissaoMai = 7000.0 * 0.1
console.log(`A comissão de Maio será : ${comissaoMai}`)

const descontoINSSmai = (salarioFixo + comissaoMai) * 0.05
console.log(`O desconto de Maio será : ${descontoINSSmai}`)
const resultfinalMai = salBene + comissaoMai - descontoINSSmai
console.log(resultfinalMai)

const comissaoJun = 9450.0 * 0.1
console.log(`A comissao de Junho será : ${comissaoJun}`)

const descontoINSSjun = (salarioFixo + comissaoJun) * 0.05
console.log(`O desconto de Junho será : ${descontoINSSjun}`)
const resultfinalJun = salBene + comissaoJun - descontoINSSjun
console.log (resultfinalJun)

const mediaSalarios = ( resultfinalJan + resultfinalFev + resultfinalMar + resultfinalAbr + resultfinalMai + resultfinalJun ) / 6
console.log(mediaSalarios.toFixed(2))