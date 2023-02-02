/*
const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)
//false, porque 5 não é maior que 20 e nem menor que 2, consequentemente temos false && false, que retorna false.

const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)
//true, porque 5 é igual a 5 mesmo sendo diferente em tipo de "5", todavia em ou temos true || false, que retorna true.

const operacao3 = !(20 > 50)
console.log(operacao3)
//true, porque 20 não é maior que 50, retornando false, como queremos a negação disso, retorna true.

const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao3)
//true, porque 20 não é maior que 50 e 50 não é maior que 60, então false || false === false, como queremos a negação disso então temos true.
*/


//Parte 2

const salarioFixo = 2000.00
const auxilioCreche = 45.50
const quantidadeFilhos = 2
const comissaoDeVendas = 0.1
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00 
const vendasMaio = 7000.00
const vendasJunho = 9450.00
const descontoInss = 0.05

//Operação 1

const fixoCreche = salarioFixo + (auxilioCreche * quantidadeFilhos)
console.log(`Valor do saldo do salário fixo mais o auxílio creche é: ${fixoCreche}`)


//Operação 2

const comissaoJaneiro = vendasJaneiro * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Janeiro é: ${comissaoJaneiro}`)

const comissaoFevereiro = vendasFevereiro * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Fevereiro é: ${comissaoFevereiro}`)

const comissaoMarco = vendasMarco * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Março é: ${comissaoMarco}`)

const comissaoAbril = vendasAbril * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Abril é: ${comissaoAbril}`)

const comissaoMaio = vendasMaio * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Maio é: ${comissaoMaio}`)

const comissaoJunho = vendasJunho * comissaoDeVendas
console.log(`Valor do saldo de comissão de vendas em Junho é: ${comissaoJunho}`)


//Operação 3

const descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Janeiro é: ${descontoInssJaneiro}`)

const descontoInssFevereiro = (salarioFixo + comissaoFevereiro) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Fevereiro é: ${descontoInssFevereiro}`)

const descontoInssMarco = (salarioFixo + comissaoMarco) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Março é: ${descontoInssMarco}`)

const descontoInssAbril = (salarioFixo + comissaoAbril) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Abril é: ${descontoInssAbril}`)

const descontoInssMaio = (salarioFixo + comissaoMaio) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Maio é: ${descontoInssMaio}`)

const descontoInssJunho = (salarioFixo + comissaoJunho) * descontoInss
console.log(`Valor do saldo descontado pelo INSS em Junho é: ${descontoInssJunho}`)

//Operação 4

const salarioJaneiro = (fixoCreche + comissaoJaneiro) - descontoInssJaneiro
console.log(`Valor do salário total de Janeiro é: ${salarioJaneiro}`)

const salarioFevereiro = (fixoCreche + comissaoFevereiro) - descontoInssFevereiro
console.log(`Valor do salário total de Fevereiro é: ${salarioFevereiro}`)

const salarioMarco = (fixoCreche + comissaoMarco) - descontoInssMarco
console.log(`Valor do salário total de Março é: ${salarioMarco}`)

const salarioAbril = (fixoCreche + comissaoAbril) - descontoInssAbril
console.log(`Valor do salário total de Abril é: ${salarioAbril}`)

const salarioMaio = (fixoCreche + comissaoMaio) - descontoInssMaio
console.log(`Valor do salário total de Maio é: ${salarioMaio}`)

const salarioJunho = (fixoCreche + comissaoJunho) - descontoInssJunho
console.log(`Valor do salário total de Junho é: ${salarioJunho}`)

//Operação 5

const mediaSalario6Meses = [(fixoCreche + comissaoJaneiro) + (fixoCreche + comissaoFevereiro) + (fixoCreche + comissaoMarco) + (fixoCreche + comissaoAbril) + (fixoCreche + comissaoMaio) + (fixoCreche + comissaoJunho)] / 6
console.log(`Valor da média salarial de Janeiro até Junho é: ${mediaSalario6Meses}`)