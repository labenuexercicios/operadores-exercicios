//console.log('5 é maior que 20 e também é menor que 2', 5 > 20 && 5 < 2)
//console.log('5 é igual a 5 ou é igual a “5”', 5 === 5 || 5 === "5")
//console.log('negação de (vinte é maior que cinquenta)', ! (20 > 50))
//console.log('negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)', ! (20 > 50 || 50 > 60))

const nome = prompt('Digite seu nome completo')
const dtNascimento = prompt('Digite sua data de nascimento')
let endereco = prompt('Digite seu endereço')
const cpf = prompt('Digite seu CPF')
let escolaridade = prompt('Digite qual sua escolaridade')
let cnh = confirm('Possui CNH?')
let filhos = Number (prompt('Tem quantos filhos?'))
let cargoAtual = prompt('Digite seu cargo atual')
let salario = Number (prompt('Digite seu salário'))
let comissao = confirm('Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel')
const anoAdmissao = prompt('Digite seu ano de admissão')

console.log('Tipo variável nome', typeof nome)
console.log('Tipo variável dt de nascimento', typeof dtNascimento)
console.log('Tipo variável endereço', typeof endereco)
console.log('Tipo variável cpf', typeof cpf)
console.log('Tipo variável escolaridade', typeof escolaridade)
console.log('Tipo variável cnh', typeof cnh)
console.log('Tipo variável filhos', typeof filhos)
console.log('Tipo variável cargo atual', typeof cargoAtual)
console.log('Tipo variavel salário', typeof salario)
console.log('Tipo variável comissão', typeof comissao)
console.log('Tipo variável ano de admissão', typeof anoAdmissao)

console.log('Funcionário', nome, 'data de nascimento:', dtNascimento, 'endereço:', endereco, 'portador cpf:', cpf, 'Escolaridade:', escolaridade, 'Possui cnh:', cnh, 'Com', filhos, 'filhos', 'Cargo atual:', cargoAtual, 'Salário:', salario, 'Admitido em:', anoAdmissao, 'recebe comissão:' , comissao)

/*a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário*/

let salarioECreche = salario + (filhos * 45.50)
let comissaoJaneiro = 5784.50 * 0.10
let comissaoFevereiro = 3418.41 * 0.10
let comissaoMarco = 4124.10 * 0.10
let comissaoAbril = 1874 * 0.10
let comissaoMaio = 7000 * 0.10
let comissaoJunho = 9450 * 0.10

let inssJaneiro = (salario + comissaoJaneiro) * 0.05
let inssFevereiro = (salario + comissaoFevereiro) * 0.05
let inssMarco = (salario + comissaoMarco) * 0.05
let inssAbril = (salario + comissaoAbril) * 0.05
let inssMaio = (salario + comissaoMaio) * 0.05
let inssJunho = (salario + comissaoJunho) * 0.05

let liquidoJaneiro = salarioECreche + comissaoJaneiro - (inssJaneiro)
let liquidoFevereiro = salarioECreche + comissaoFevereiro - (inssFevereiro)
let liquidoMarco = salarioECreche + comissaoMarco - (inssMarco)
let liquidoAbril = salarioECreche + comissaoAbril - (inssAbril)
let liquidoMaio = salarioECreche + comissaoMaio - (inssMaio)
let liquidoJunho = salarioECreche + comissaoJunho - (inssJunho)

let mediaSalario = (liquidoJaneiro + liquidoFevereiro + liquidoMarco + liquidoAbril + liquidoMaio + liquidoJunho) / 6

console.log('Valor do salário + auxílio creche:', salarioECreche)
console.log('Valor de comissão em Janeiro:', comissaoJaneiro)
console.log('Valor desconto INSS em Janeiro:', inssJaneiro)

console.log('Salário líquido janeiro:', liquidoJaneiro)
console.log('Salário líquido fevereiro:', liquidoFevereiro)
console.log('Salário líquido março:', liquidoMarco)
console.log('Salário líquido abril', liquidoAbril)
console.log('Salário líquido maio:', liquidoMaio)
console.log('Salário líquido junho:', liquidoJunho)

console.log('Media salarial com benefícios:', mediaSalario)
