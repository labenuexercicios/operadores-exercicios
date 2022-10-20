//EXERCICIO 3 - PARTE 1

//a) 5 é maior que 20 e também é menor que 2;
//b) 5 é igual a 5 ou é igual a “5”;
//c) negação de (vinte é maior que cinquenta)
//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) */

const operacao1 = 5 > 20 &&  5 < 2
const operacao2 = 5 === 5 || "5"
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 || 50 > 60)

console.log("a) 5 é maior que 20 e também é menor que 2;", operacao1)
console.log("b) 5 é igual a 5 ou é igual a “5”;", operacao2)
console.log("c) negação de (vinte é maior que cinquenta)", operacao3)
console.log("d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta);", operacao4)

//PARTE 2 --------------------------------------------------------------------------------------------------------
const salario = 2000
const auxilioCreche =  45.50 * 2

//vendas mensais
const janeiro = 5784.50
const fevereiro =  3418.41
const marco =  4124.10
const abril = 1874.00
const maio = 7000.00
const junho = 9450.00

// calculo comissão mensal
const comissaoJan = janeiro * 0.1 
const comissaoFev = fevereiro * 0.1
const comissaoMar = marco * 0.1
const comissaoAbr = abril * 0.1
const comissaoMaio = maio * 0.1
const comissaoJun = junho * 0.1

//salario fixo + auxilio creche
console.log("O salário fixo mais o auxílio creche: R$", salario + auxilioCreche)
//comissão em janeiro
console.log("Comissão em  Janeiro", comissaoJan )
//Quanto Fulano de Silva será descontado em janeiro pelo INSS
console.log("Desconto do INSS em janeiro", (salario + comissaoJan) * 0.05)

//Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
const salarioJaneiro = salario + auxilioCreche + comissaoJan - (salario + comissaoJan) * 0.05
const salarioFevereiro = salario + auxilioCreche + comissaoFev - (salario + comissaoFev) * 0.05
const salarioMarco = salario + auxilioCreche + comissaoMar - (salario + comissaoMar) * 0.05 
const salarioAbril = salario + auxilioCreche + comissaoAbr - (salario + comissaoAbr) * 0.05 
const salarioMaio = salario + auxilioCreche + comissaoMaio - (salario + comissaoMaio) * 0.05 
const salarioJunho = salario + auxilioCreche + comissaoJun - (salario + comissaoJun) * 0.05 

console.log("Salário Janeiro:R$", salarioJaneiro )
console.log("Salário Fevereiro:", salarioFevereiro )
console.log("Salário Março:R$", salarioMarco)
console.log("Salário Abril:R$", salarioAbril)
console.log("Salário Maio:R$", salarioMaio)
console.log("Salário Junho:R$",salarioJunho)

// Média do salário em 6 meses
const media = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho) / 6

console.log("Média dos salarios em 6 meses:R$", media)