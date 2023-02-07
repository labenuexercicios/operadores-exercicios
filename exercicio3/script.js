//PARTE 1

//a) 5 é maior que 20 e também é menor que 2;
//b) 5 é igual a 5 ou é igual a “5”;
//c) negação de (vinte é maior que cinquenta)
//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

/*

const operacaoA = 5 > 20 && 5 < 2
console.log(`O resultado é: ${operacaoA}`)

const operacaoB = 5 === 5 || 5 === "5"
console.log(`O resultado é: ${operacaoB}`)

const operacaoC = !(20 > 50)
console.log(`O resultado é: ${operacaoC}`)

const operacaoD = !(20 > 50 || 50 > 60)
console.log(`O resultado é: ${operacaoD}`)
*/

//PARTE 2

/*
a) Auxílio creche por filho:  R$45,50
b) Comissão de 10% sobre o total de vendas mensal
c) Total de vendas dos meses de janeiro a junho:
- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário */

const sal = 2000
const auxCreche = 45.5 * 2
const salcombeneficios = sal + auxCreche

//Resposta 1
console.log(`O sálario fixo mais o auxilio cheche é: ${salcombeneficios}`)
const comisJan = 5784.50 * 0.10
const comisFev = 3418.41 * 0.10
const comisMar = 4124.10 * 0.10
const comisAbr = 1874.00 * 0.10
const comisMai = 7000 * 0.10
const comisJun = 9450 * 0.10

const descInssJan = (sal + comisJan) * 0.05
const descInssFev = (sal + comisFev) * 0.05
const descInssMar = (sal + comisMar) * 0.05
const descInssAbr = (sal + comisAbr) * 0.05
const descInssMai = (sal + comisMai) * 0.05
const descInssJun = (sal + comisJun) * 0.05

const salFinalJan = salcombeneficios + comisJan - descInssJan
const salFinalFev = salcombeneficios + comisFev - descInssFev
const salFinalMar = salcombeneficios + comisMar - descInssMar
const salFinalAbr = salcombeneficios + comisAbr - descInssAbr
const salFinalMai = salcombeneficios + comisMai - descInssMai
const salFinalJun = salcombeneficios + comisJun - descInssJun

const media = (salFinalJan + salFinalFev + salFinalMar + salFinalAbr + salFinalMai + salFinalJun) / 6

console.log(`Comissão de janeiro R$ ${comisJan}`)
console.log(`O desconto de INSS será de : R$ ${descInssJan}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalJan}`)

console.log(`Comissão de fevereiro R$ ${comisFev}`)
console.log(`O desconto de INSS será de : R$ ${descInssFev}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalFev}`)

console.log(`Comissão de março R$ ${comisMar}`)
console.log(`O desconto de INSS será de : R$ ${descInssMar}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalMar}`)

console.log(`Comissão de abril R$ ${comisAbr}`)
console.log(`O desconto de INSS será de : R$ ${descInssAbr}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalAbr}`)

console.log(`Comissão de maio R$ ${comisMai}`)
console.log(`O desconto de INSS será de : R$ ${descInssMai}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalMai}`)

console.log(`Comissão de junho R$ ${comisJun}`)
console.log(`O desconto de INSS será de : R$ ${descInssJun}`)
console.log(`O sálario com acréscimo e descontos é: R$ ${salFinalJun}`)

console.log(`A média do sálario em seis meses é: R$ ${media}`)