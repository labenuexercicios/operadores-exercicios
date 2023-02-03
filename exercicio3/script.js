console.log(``)
console.log(`PARTE 01 ▲`)
console.log(``)

// EXERCICIO PARTE 01 

const operacaoA = 5 > 20 && 5 < 2
console.log(`A operação A - (5 > 20 && 5 < 2) é: ${operacaoA}`)

const operacaoB = 5 === 5 || 5 === '5'
console.log(`A operação B - (5 === 5 || 5 === '5') é: ${operacaoB}`)

const operacaoC = !(20 > 50)
console.log(`A operação C - (20 > 50) é: ${operacaoC}`)

const operacaoD = !(20 > 50 || 50 > 60 )
console.log(`A operação D - (20 > 50 || 50 > 60) é: ${operacaoD}`)

console.log(``)
console.log(`PARTE 02 ▲`)
console.log(``)

// EXERCICIO PARTE 02

const salario = 2000
const creche = 45.5 * 2
const comissao = 0.1
const inss = 0.05

let vendasJan = 5784.50
let vendasFev = 3418.41
let vendasMar = 4124.10
let vendasAbr = 1874.00
let vendasMai = 7000.00
let vendasJun = 9450.00

const janCom = vendasJan * comissao
const fevCom = vendasFev * comissao
const marCom = vendasMar * comissao
const abrCom = vendasAbr * comissao
const maiCom = vendasMai * comissao
const junCom = vendasJun * comissao

const brutoJan = salario + janCom
const brutoFev = salario + fevCom
const brutoMar = salario + marCom
const brutoAbr = salario + abrCom
const brutoMai = salario + maiCom
const brutoJun = salario + junCom

const descJan = brutoJan * inss
const descFev = brutoFev * inss
const descMar = brutoMar * inss
const descAbr = brutoAbr * inss
const descMai = brutoMai * inss
const descJun = brutoJun * inss

const liqJan = brutoJan + creche - descJan
const liqFev = brutoFev + creche - descFev
const liqMar = brutoMar + creche - descMar
const liqAbr = brutoAbr + creche - descAbr
const liqMai = brutoMai + creche - descMai
const liqJun = brutoJun + creche - descJun


//1
console.log(`1) O salario fixo mais o auxilio creche: ${salario + creche}`)

//2
console.log(`2) Quanto Fulano da silva receberá de comissão em janeiro: ${vendasJan * comissao}`)

//3 
console.log(`3) Quanto Fulano da silva terá de desconto no mês de janeiro pelo INSS: ${(salario + janCom) * inss}`)

//4
console.log(`O ganho liquido de Janeiro foi: ${brutoJan + creche - descJan}`)
console.log(`O ganho liquido de Fevereiro foi: ${brutoFev + creche - descFev}`)
console.log(`O ganho liquido de Março foi: ${brutoMar + creche - descMar}`)
console.log(`O ganho liquido de Abril foi: ${brutoAbr + creche - descAbr}`)
console.log(`O ganho liquido de Maio foi: ${brutoMai + creche - descMai}`)
console.log(`O ganho liquido de Junho foi: ${brutoJun + creche - descJun}`)
