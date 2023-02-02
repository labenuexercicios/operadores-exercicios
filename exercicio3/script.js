// PARTE 1

console.log(`PARTE 1`)
console.log(``)

const a = 5 > 20 && 5 < 2
const b = (5 === 5) || 5 === '5'
const c = !(20 > 50)
const d = !((20 > 50) || (50 > 60))

console.log(`a) 5 é maior que 20 e também é menor que 2 - ${a}`)
console.log(`b) 5 é igual a 5 ou é igual a “5” - ${b}`)
console.log(`c) negação de (vinte é maior que cinquenta) - ${c}`)
console.log(`d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) - ${d}`)

console.log(``)
console.log(``)

// PARTE 2

console.log(`PARTE 2`)
console.log(``)

/* PERGUNTANDO INFORMAÇÕES
const nome = prompt('Informe o seu nome:')
const nascimento = prompt('Informe sua data de nascimento:')
let endereço = prompt('Informe o seu endereço:')
const cpf = Number(prompt('Informe o seu CPF:'))
let escolaridade = prompt('Informe a sua escolaridade (Fundamental, Médio, Superior completo, superior incompleto, MBA/Pós/Mestrado):')
let cnh = confirm('Possui CNH? Clique em "Ok" para sim e "Cancel" para não')
let filhos = Number(prompt('Informe a quantidade de filhos que possui:'))
let cargo = prompt('Informe o cargo atual:')
let salario = Number(prompt('Informe seu salário:'))
let comissao = Number(prompt('Recebe comissão? Caso sim, informe a porcentagem. Caso não, informe "0":'))
const admissao = Number(prompt('Informe o ano de admissão:'))
*/

// informações já inseridas (pra agilizar)

const nome = 'Fulano da Silva'
const nascimento = '10/02/1990'
let endereco = 'Rua dos Bobos nº 0'
const cpf = 00000000000
let escolaridade = 'Superior completo'
let cnh = true
let filhos = 2
let cargo = 'Vendedor'
let salario = 2000
let comissao = 10
const admissao = 2019

const auxilioCreche = 45.5
const inss = 5

const vendasJaneiro = 5784.5
const vendasFevereiro = 3418.41
const vendasMarco = 4124.1
const vendasAbril = 1874
const vendasMaio = 7000
const vendasJunho = 9450

// 1) O salário fixo mais o auxílio creche

const salarioComCreche = salario + (auxilioCreche * filhos)
console.log(`1) O salário fixo mais o auxílio creche totalizam: R$ ${salarioComCreche}`)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro
console.log(``)

const comissaoJaneiro = vendasJaneiro * (comissao/100)
console.log(`2) A comissão no mês de Janeiro foi: R$ ${comissaoJaneiro}`)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
console.log(``)

const inssJaneiro = (salario + comissaoJaneiro) * inss/100
console.log(`3) O valor a descontar referente ao INSS do mês de Janeiro é: R$ ${(inssJaneiro).toFixed(2)}`)

// 4) Cálculo do salário de todos os meses com acréscimos e descontos.
console.log(``)

const comissaoFevereiro = vendasFevereiro * (comissao/100)
const comissaoMarco = vendasMarco * (comissao/100)
const comissaoAbril = vendasAbril * (comissao/100)
const comissaoMaio = vendasMaio * (comissao/100)
const comissaoJunho = vendasJunho * (comissao/100)

const inssFevereiro = (salario + comissaoFevereiro) * inss/100
const inssMarco = (salario + comissaoMarco) * inss/100
const inssAbril = (salario + comissaoAbril) * inss/100
const inssMaio = (salario + comissaoMaio) * inss/100
const inssJunho = (salario + comissaoJunho) * inss/100

const salarioJaneiro = salarioComCreche + comissaoJaneiro - inssJaneiro
const salarioFevereiro = salarioComCreche + comissaoFevereiro - inssFevereiro
const salarioMarco = salarioComCreche + comissaoMarco - inssMarco
const salarioAbril = salarioComCreche + comissaoAbril - inssAbril
const salarioMaio = salarioComCreche + comissaoMaio - inssMaio
const salarioJunho = salarioComCreche + comissaoJunho - inssJunho

console.log(`4) Segue o valor líquido referente aos meses:
Janeiro: R$ ${(salarioJaneiro).toFixed(2)};
Fevereiro: R$ ${(salarioFevereiro).toFixed(2)};
Março: R$ ${(salarioMarco).toFixed(2)};
Abril: R$ ${(salarioAbril).toFixed(2)};
Maio: R$ ${(salarioMaio).toFixed(2)} e 
Junho: R$ ${(salarioJunho).toFixed(2)}.
`)

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
console.log(``)

const mediaSalarios = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho) / 6
console.log(`5) A média dos valores líquidos é: R$ ${(mediaSalarios).toFixed(2)}`)