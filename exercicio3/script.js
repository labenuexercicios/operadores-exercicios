const operacao1 = (5 > 20 && 5 < 2)
const operacao2 = (5 === 5 || 5 === "5")
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 || 50 > 60)

console.log(`${operacao1}, porque cinco nao é maior que vinte e cinco nao é menos que dois`)
console.log(`${operacao2},  apesar da segunda opcao ser false a promeira é true por serem iguais`)
console.log(`${operacao3}, a operacao tres nao é maior que cinquenta, com a negacao, ela se torna verdadeira.`)
console.log(`${operacao4} na operacao quatro ambas sao false mas com a negacao se tornam true `)

let nomeFuncionario = "fulano da silva"
let cpfFuncionario = "000.000.000-00"
let dataDeNascimentoFuncionario = "10/02/1990"
let enderecoFuncionario = "rua dos bobos numero 0"
let filhosFuncionario = Number(2)
let funcionarioHabilitado = true
let cargoFuncionario = "vendedor"
let salarioFuncionario = Number(2000.00)
let comissaoFuncionario = Number(0.1)
let quandoFuncionarioEntrouNaEmpresa = Number(2019)
let auxilioCrecheFuncionario = Number(45.50 * filhosFuncionario)
let descontoInssFuncionario = Number(0.05)


// vendas dos meses 

let vendasJaneiro = Number(5784.50)
let vendasFevereiro = Number(3418.41)
let vendasMarco = Number(4124.10)
let vendasAbril = Number(1874.00)
let vendasMaio = Number(7000.00)
let vendasJunho = Number(9450.00)

//O salário fixo mais o auxílio creche
let fixoCreche = (salarioFuncionario + auxilioCrecheFuncionario)
console.log(fixoCreche)

//Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissaoJaneiro = (vendasJaneiro * comissaoFuncionario)
console.log(comissaoJaneiro)

// Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
let descontoJaneiro = ((comissaoJaneiro + salarioFuncionario) * descontoInssFuncionario)
console.log(descontoJaneiro.toFixed(2))

// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let salariojaneiro = (comissaoJaneiro + fixoCreche - descontoJaneiro)
console.log(`salario Janeiro ${salariojaneiro.toFixed(2)}`)

let salarioFevereiro = ((vendasFevereiro*comissaoFuncionario)+fixoCreche)* (1-descontoInssFuncionario)
console.log(`salario Fevereiro ${salarioFevereiro.toFixed(2)}`)

let salarioMarco = ((vendasMarco*comissaoFuncionario)+fixoCreche)* (1-descontoInssFuncionario)
console.log(`salario Marco ${salarioMarco.toFixed(2)}`)

let salarioAbril = ((vendasAbril*comissaoFuncionario)+fixoCreche)* (1-descontoInssFuncionario)
console.log(`salario Abril ${salarioAbril.toFixed(2)}`)

let salarioMaio = ((vendasMaio*comissaoFuncionario)+fixoCreche)* (1-descontoInssFuncionario)
console.log(`salario Maio ${salarioMaio.toFixed(2)}`)

let salarioJunho= ((vendasJunho*comissaoFuncionario)+fixoCreche)* (1-descontoInssFuncionario)
console.log(`salario Junho ${salarioJunho.toFixed(2)}`)


 //A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
let resultado = (salariojaneiro  + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho)/6
console.log(resultado.toFixed(2))