//EXERCICO 3 
/*
//Parte 1

//a)
const letraA = 5 > 20 && 5 < 2
console.log(letraA)

//b)
const letraB = 5 === 5 || 5 === '5'
console.log(letraB)

//c)
const letraC = !(20 > 50)
console.log(letraC)

//d)
const letraD = !(20 > 50 || 50 > 60)
console.log(letraD)
*/

//Parte 2

const nome = 'Fulano da Silva'
const cpf = '000.000.000-00'
const dataNascimento = 10/02/1990
const endereco = 'Rua dos Bobos N° 0'
const filhos = 2
const cnh = true
const cargo = 'Vendedor'
const salario = 2000
const percentComissao = 0.1
const admissao = 2019

//1-
let aux = 45.50
const salarioMaisAux = salario + aux
console.log(`O salário fixo + comissão: R$${salarioMaisAux.toFixed(2)}`)

//2-
let vendasJan = 5784.50
const comissaoJan = percentComissao * vendasJan
console.log(`A comissão de Fulano em janeiro será de R$${comissaoJan.toFixed(2)}`)

//3-
let descInss = 0.05
const salarioTotalBrutoJan = salario + comissaoJan
const salarioTotalLiquidoJan = salarioTotalBrutoJan - (descInss * salarioTotalBrutoJan)
console.log(`Fulano receberá no mês de janeiro o valor de R$${salarioTotalLiquidoJan.toFixed(2)}`)

//4- 
console.log(`Janeiro: R$${salarioTotalLiquidoJan.toFixed(2)}`)

let vendasFev = 3418.41
const comissaoFev = percentComissao * vendasFev
const salarioTotalBrutoFev = salario + comissaoFev
const salarioTotalLiquidoFev = salarioTotalBrutoFev - (descInss * salarioTotalBrutoFev)
console.log(`Fevereiro: R$${salarioTotalLiquidoFev.toFixed(2)}`)

let vendasMar = 4124.10
const comissaoMar = percentComissao * vendasMar
const salarioTotalBrutoMar = salario + comissaoMar
const salarioTotalLiquidoMar = salarioTotalBrutoMar - (descInss * salarioTotalBrutoMar)
console.log(`Março: R$${salarioTotalLiquidoMar.toFixed(2)}`)

let vendasAbr = 1874.00
const comissaoAbr = percentComissao * vendasAbr
const salarioTotalBrutoAbr = salario + comissaoAbr
const salarioTotalLiquidoAbr = salarioTotalBrutoAbr - (descInss * salarioTotalBrutoAbr)
console.log(`Abril: R$${salarioTotalLiquidoAbr.toFixed(2)}`)

let vendasMai = 7000
const comissaoMai = percentComissao * vendasMai
const salarioTotalBrutoMai = salario + comissaoMai
const salarioTotalLiquidoMai = salarioTotalBrutoMai - (descInss * salarioTotalBrutoMai)
console.log(`Maio: R$${salarioTotalLiquidoMai.toFixed(2)}`)

let vendasJun = 9450
const comissaoJun = percentComissao * vendasJun
const salarioTotalBrutoJun = salario + comissaoJun
const salarioTotalLiquidoJun = salarioTotalBrutoJun - (descInss * salarioTotalBrutoJun)
console.log(`Junho: R$${salarioTotalLiquidoJun.toFixed(2)}`)

//5-
const mediaSalarial =((salarioTotalLiquidoJan + aux) + (salarioTotalLiquidoJan + aux) + (salarioTotalLiquidoJan + aux) +
(salarioTotalLiquidoJan + aux) + (salarioTotalLiquidoJan + aux) +
(salarioTotalLiquidoJan + aux)) / 6 

console.log(`A média salarial de janeiro a junho foi R$${mediaSalarial.toFixed(2)}`)

