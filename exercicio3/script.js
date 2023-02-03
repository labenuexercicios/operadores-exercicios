// Parte 1

//Letra a

//const a = 5 > 20 && 5 < 2
//console.log(`5 é maior que 20 e também é menor que 2 = ${a}`)
// false

//const b = 5 === 5 || 5 === "5"
//console.log(`5 é igual a 5 ou é igual a "5" = ${b}`)
// true

//const c = !20 > 50
//console.log(`negação de vinte é maior que cinquenta = ${c}`)
//false

//const d = !20 > 50 || 50 > 70
//console.log(`negação de vinte é maior que cinquenta ou cinquenta é maior que sessenta ${c}`)
//false

// Parte 2 do exercicio

const salarioFixo = 2000
const comissaoDeVenda = 0.10
const auxilioCreche = 45.50
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarço = 4124.10
const vendasAbril = 1874
const vendasMaio = 7000
const vendasJunho = 9450
const descontoInss = 0.05
const quantidadeDeFilhos = 2
const comissaoDeVendaJaneiro = 

console.log('Salario Fixo =', salarioFixo)
console.log('Porcentagem comissao de vendas=', comissaoDeVenda)
console.log('Valor Auxilio Creche =', auxilioCreche)
console.log('Valor Vendas Janeiro =', vendasJaneiro)
console.log('Valor Vendas Fevereiro = ',vendasFevereiro)
console.log('Valor Vendas Março = ',vendasMarço)
console.log('Valor Vendas Abril =',vendasAbril)
console.log('Valor Vendas Maio = ',vendasMaio)
console.log('Valor Vendas Junho =', vendasJunho)
console.log('Valor Desconto Inss =' , descontoInss)
console.log('Quantidade de filhos =', quantidadeDeFilhos)


console.log('Calcule')

operacao1 = salarioFixo+auxilioCreche*quantidadeDeFilhos
console.log(`1) O salário fixo mais o auxílio creche = ${operacao1}`)

operacao2 = vendasJaneiro*comissaoDeVenda
console.log(`2) Quanto Fulano receberá de comissão em Janeiro ? = ${operacao2}`)

operacao3 = (salarioFixo+operacao2)*descontoInss
console.log(`3)Quanto fulano será descontado em Janeiro pelo INSS ? = ${operacao3}`)

operacao4 = (operacao1+operacao2) - operacao3
console.log(`4) Salário de Janeiro Líquido = ${operacao4}`)

comissaoFev = vendasFevereiro*comissaoDeVenda
comissaoMarco = vendasMarço*comissaoDeVenda
comissaoAbril = vendasAbril*comissaoDeVenda
comissaoMaio = vendasMaio*comissaoDeVenda
comissaoJunho = vendasJunho*comissaoDeVenda 

inssFev = (salarioFixo+comissaoFev)*descontoInss
inssMarco =(salarioFixo+comissaoMarco)*descontoInss
inssAbril =(salarioFixo+comissaoAbril)*descontoInss
inssMaio = (salarioFixo+comissaoMaio)*descontoInss
inssJunho =(salarioFixo+comissaoJunho)*descontoInss

operacao5 = (operacao1+comissaoFev)-inssFev
console.log(`4) Salário de Fevereiro Líquido = ${operacao5}`)

operacao6 = (operacao1+comissaoMarco)-inssMarco
console.log(`4) Salário de Marco Líquido = ${operacao6}`)

operacao7 = (operacao1+comissaoAbril)-inssAbril
console.log(`4) Salário de Abril Líquido = ${operacao7}`)

operacao8 = (operacao1+comissaoMaio)-inssMaio
console.log(`4)Salário de Maio Líquido = ${operacao8}`)

operacao9 = (operacao1+comissaoJunho)-inssJunho
console.log(`4)Salario de Junho Líquido = ${operacao9}`)


mediaDosSalarios = (operacao4+operacao5+operacao6+operacao7+operacao8+operacao9)/6
console.log(`A Média do salário correspondente a 6 meses é de : ${mediaDosSalarios}`)










