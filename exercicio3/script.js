//EXERCÍCIO 3

//PARTE 1

let valorA = 5 > 20 && 5 < 2
console.log("Valor A é: ", valorA);

let valorB = 5 === 5 || 5 === "5"
console.log("Valor B é: ", valorB);

let valorC = !(20 > 50);
console.log("Valor C é: ", valorC);

let valorD = !(20 > 50 || 50 > 70);
console.log("Valor D é: ", valorD);

//PARTE 2
const funcionario = "Nome do Funcionário: Fulano da Silva"
console.log(funcionario)

const cpf = "CPF do Funcionário: 000.000.000-00"
console.log(cpf)

const dataNascimento = "Data de Nascimento do Funcionário: 10/02/1990"
console.log(dataNascimento)

const endereco = "Endereço do Funcionário: Rua dos Bobos, 0"
console.log(endereco)

const filhos = "Número de filhos do Funcionário: 2"
console.log(filhos)

const cnh = "O Funcionário possui CNH? Sim!"
console.log(cnh)

const vendedor = "Qual o cargo do Funcionáriio? Vendedor."
console.log(vendedor)

let salario = "O slário do Funcionário é: 2.000"
console.log(salario)

let comissao = "O Funcionário recebe comissão de 10% sobre o total de vendas no mês."
console.log(comissao)

const anoAdmissao = "Ano de admissão do Funcionário: 2019."
console.log(anoAdmissao)

let jan = 5784.50
let fev = 3418.41
let mar = 4124.10
let abr = 1874.00
let mai = 7000.00
let jun = 9450.00

let salarioComAuxCreche = 2091.00
let comissaoJan = jan*0.1
let comissaoFev = fev*0.1
let comissaoMar = mar*0.1
let comissaoAbr = abr*0.1
let comissaoMai = mai*0.1
let comissaoJun = jun*0.1

let salarioJan = salarioComAuxCreche + comissaoJan
let salarioFev = salarioComAuxCreche + comissaoFev
let salarioMar = salarioComAuxCreche + comissaoMar
let salarioAbr = salarioComAuxCreche + comissaoAbr
let salarioMai = salarioComAuxCreche + comissaoMai
let salarioJun = salarioComAuxCreche + comissaoJun

let inssJan = salarioJan*0.5
console.log("O salário de Janeiro é:", inssJan)
let inssFev = salarioFev*0.5
console.log("O salário de Feveiro é:", inssFev)
let inssMar = salarioMar*0.5
console.log("O salário de Março é:", inssMar)
let inssAbr = salarioAbr*0.5
console.log("O salário de Abril é:", inssAbr)
let inssMai = salarioMai*0.5
console.log("O salário de Maio é:", inssMai)
let inssJun = salarioJun*0.5
console.log("O salário de Junho é:", inssJun)

let mediaSalarial = (inssJan + inssFev + inssMar + inssAbr + inssMai + inssJun) / 6
console.log("A média salarial é: ", mediaSalarial)
