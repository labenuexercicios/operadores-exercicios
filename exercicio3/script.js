/* //PARTE 1
const op1 = 5 > 20 && 5 < 2
console.log(`5 é maior que 20 e também é menor que 2? - ${op1}`)

const op2 = 5 == 5 && 5 == "5"
console.log(`5 é igual a 5 ou é igual a “5”? - ${op2}`)

const op3 = 20 > 50
console.log(`negação de (vinte é maior que cinquenta) - ${op3}`)

const op4 = 20 > 50 || 50 > 60
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) - ${op4}`)
 */
//PARTE 2
/* 
a) Auxílio creche por filho:  R$45,50
b) Comissão de 10% sobre o total de vendas mensal
c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário */

const salario = 2000
const auxCreche = 45.50 * 2
const salComBenficios = salario + auxCreche

const comissaoJan = (5784.50 * 0.1)
const comissaoFev = (3418.41 * 0.1)
const comissaoMar = (4124.10 * 0.1)
const comissaoAbr = (1874.00 * 0.1)
const comissaoMai = (7000.00 * 0.1)
const comissaoJun = (9450.00 * 0.1)

const descInssJan = ((salario + comissaoJan) * 0.05)
const descInssFev = ((salario + comissaoFev) * 0.05)
const descInssMar = ((salario + comissaoMar) * 0.05)
const descInssAbr = ((salario + comissaoAbr) * 0.05)
const descInssMai = ((salario + comissaoMai) * 0.05)
const descInssJun = ((salario + comissaoJun) * 0.05)


//Resposta 1
console.log(`O salário fixo mais o auxílio creche é: ${salComBenficios.toFixed(2)}`)

//Resposta 2
console.log(`Quanto Fulano de Silva receberá de comissão em janeiro? - ${comissaoJan.toFixed(2)}`)

//Resposta 3
console.log(`Quanto Fulano de Silva será descontado em janeiro pelo INSS? - ${descInssJan.toFixed(2)}`)

//Resposta 4
const salFinalJan = (salComBenficios + comissaoJan - descInssJan)
const salFinalFev = (salComBenficios + comissaoFev - descInssFev)
const salFinalMar = (salComBenficios + comissaoMar - descInssMar)
const salFinalAbr = (salComBenficios + comissaoAbr - descInssAbr)
const salFinalMai = (salComBenficios + comissaoMai - descInssMai)
const salFinalJun = (salComBenficios + comissaoJun - descInssJun)

console.log(`Comissão de janeiro : R$ ${comissaoJan.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssJan.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalJan.toFixed(2)}`)

console.log(`Comissão de fevereiro : R$ ${comissaoFev.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssFev.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalFev.toFixed(2)}`)

console.log(`Comissão de março : R$ ${comissaoMar.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssMar.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalMar.toFixed(2)}`)

console.log(`Comissão de abril : R$ ${comissaoAbr.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssAbr.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalAbr.toFixed(2)}`)

console.log(`Comissão de maio : R$ ${comissaoMai.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssMai.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalMai.toFixed(2)}`)

console.log(`Comissão de junho : R$ ${comissaoJun.toFixed(2)}`)
console.log(`Desconto INSS será de : R$ ${descInssJun.toFixed(2)}`)
console.log(`O sálario final é: R$ ${salFinalJun.toFixed(2)}`)

//Resposta 5
const media = (salFinalJan + salFinalFev + salFinalMar + salFinalAbr + salFinalMai + salFinalJun) / 6
console.log(`Media dos sálarios é: ${media.toFixed(2)}`)