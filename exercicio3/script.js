
//EXERCÍCIO 3

//PARTE 1

const a = 5 > 20 && 5 < 2
console.log("5 é maior que 20 e também é menor que 2:", a)

const b = 5 === 5 || 5 === "5"
console.log('"5 é igual a 5 ou [e igual a "5":',  b)

const c = 20 < 50
console.log("Negação de 20 > 50:", !c)

const d = 20 < 50 || 20 < 60
console.log("Negação de 20 > 50 || 20 > 60:", !d)



//PARTE 2

const funcionario = "Fulano de Silva"
const cpf = Number("000.000.000-00")
const dataNasc = Number("10/12/1990")
let endereco = "Rua dos bobos n° 0"
let filhos = 2
let habilitacao = true
let cargo = "Vendedor"
let salario = 2000
let comissao = 0.10
const admissao = 2019

//Desconto INSS
const inss = 0.05

//Auxilio creche por filho
let auxCreche = filhos * 45.50

//Comissão de 10% em cada mês
const salJaneiro = 5784.50
const janeiroComissao = salJaneiro * comissao

const salFevereiro = 3418.41
const fevereiroComissao = salFevereiro * comissao

const salMarço = 4124.10
const marçoComissao = salMarço * comissao

const salAbril = 874.00
const abrilComissao = salAbril * comissao

const salMaio = 7000.00
const maioComissao = salMaio * comissao

const salJunho = 9450.00
const junhoComissao = salJunho * comissao

//RESPOSTAS

//1.
let salarioECreche = salario + auxCreche
console.log("O salário fixo mais o auxílio creche é", salarioECreche, "reais")

//2.
console.log("Fulano da Silva receberá", janeiroComissao, "reais de comissão em janeiro")

//3.
let descInssJaneiro = (salario + janeiroComissao) * inss
console.log("Fulano da Silva será descontado o valor de", descInssJaneiro, "reais no mês de janeiro")

//4.
let salarioTotal = salario + auxCreche + (janeiroComissao + fevereiroComissao + marçoComissao + abrilComissao + maioComissao + junhoComissao)
console.log("O salário total é", salarioTotal)

//5.
let mediaSalario = ((salario + auxCreche) + (janeiroComissao + fevereiroComissao + marçoComissao + abrilComissao + maioComissao + junhoComissao)) / 6
console.log("A média do salário de Fulano da Silva é", mediaSalario)

