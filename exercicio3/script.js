/*let primeiro = 2 > 5 > 20
console.log(`5 é maior que 20 e também é menor que 2? ${primeiro}`)

let segundo = 5 === 5 === '5'
console.log(`5 é igual a 5 ou é igual a “5”? ${segundo}`)

let terceiro = !20 > 50
console.log(`20 é maior que 50? ${terceiro}`)

let quarto = !(20 > 50 || 50 > 60)
console.log(quarto) */


//parte  dois

const salarioFixo = 2000
const filhos = Number(2)
const janeiro = 5784.50
const fevereiro = 3418.41
const marco = 4124.10
const abril =  1874
const maio = 7000
const junho = 9450
const inss = 0.05
const auxCreche = Number((filhos * 45.50))
const comissao = 0.1

let salarioCreche = (salarioFixo + auxCreche)
console.log(`salário fixo mais auxilio creche: R$${salarioCreche}`)

let comissaoJan = janeiro * comissao 
//console.log(`comissão janeiro: ${comissaoJan}`)

let comissaoFev = fevereiro * comissao
let comissaoMar = marco * comissao
let comissaoAbr = abril * comissao
let comissaoMai = maio * comissao
let comissaoJun = junho * comissao

const totalJan = (salarioFixo + comissaoJan) + auxCreche - inss.toFixed(0)
console.log(totalJan)

const totalFev = (salarioFixo + comissaoFev) + auxCreche - inss.toFixed(0)
console.log(totalFev)

const totalMar = (salarioFixo + comissaoMai) + auxCreche - inss
console.log(totalMar)

const totalAbr = (salarioFixo + comissaoAbr) + auxCreche - inss
console.log(totalAbr)

const totalMai = (salarioFixo + comissaoMai) + auxCreche - inss
console.log(totalMai)

const totalJun = (salarioFixo + comissaoJun) + auxCreche - inss
console.log(totalJun)

const media = (totalJan + totalFev + totalMar + totalAbr + totalMai + totalJun) / 6 .toFixed
console.log(`média dos salarios: ${media}`