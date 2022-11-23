//a) 5 é maior que 20 e também é menor que 2;

//b) 5 é igual a 5 ou é igual a “5”;

//c) negação de (vinte é maior que cinquenta)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

//Parte 1

//cálculos
const c1 = 5>20 && 5<2
const c2 = 5===5 || 5==="5"
const c3 = !(20>50)
const c4 = !(20>50 || 50>60)

//impressões
console.log(c1, "porque 5 não é maior que 20 nem menor que 2")
console.log(c2, "porque 5 é igual a 5, apesar de não ser igual ao texto 5")
console.log(c3, "é a negação de vinte maior que cinquenta")
console.log(c4, "é a negação de vinte é maior que cinquenta ou cinquenta é maior que sessenta")


//Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**
//**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**
//Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:
//a) Auxílio creche por filho:  R$45,50
//) Comissão de 10% sobre o total de vendas mensal
//c) Total de vendas dos meses de janeiro a junho:
    //- Janeiro: R$ 5.784,50
    //- Fevereiro: R$ 3.418,41
    //- Março: R$ 4.124,10
    //- Abril: R$ 1.874,00
    //- Maio: R$ 7.000,00
    //- Junho: R$ 9.450,00
//d)  Desconto do INSS 5% do salário
//Calcule:
//1) O salário fixo mais o auxílio creche
//2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos
//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  //( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)


//Parte 2

const nome = "Fulano de Silva"
const cpf = "000.000.000=00"
const nascimento = "10/02/1990"
let endereço = "Rua dos bobos nº 0"
let filhos = Number(2)
let habilitado = "sim"
let cargo = "vendedor"
let salário = Number(2000,00)
let comissão = Number(0.1)
let auxilioCreche = Number(45.5*filhos)
let inss = Number(0.05)



let vendaJaneiro 
let vendaFevereiro 
let vendaMarço 
let vendaAbril
let vendaMaio
let vendaJunho


vendaJaneiro = Number(5784.50)
vendaFevereiro = Number(3418.41)
vendaMarço = Number(4124.10)
vendaAbril = Number(1874.00)
vendaMaio = Number(7000.00)
vendaJunho = Number(9450.00)

let fixoCreche = salário+auxilioCreche
console.log("O salário fixo acumulado com o auxílio creche de fulano é,", fixoCreche)

let comissaoJaneiro = vendaJaneiro*comissão
console.log("A comissão de fulano em janeiro será de", comissaoJaneiro)

let descontoJaneiro = (fixoCreche+comissaoJaneiro)*inss
console.log("O desconto de inss de fulano será de,", descontoJaneiro)

let salarioSeis = 2000*6
let somaComissaoSeis = (vendaJaneiro+vendaFevereiro+vendaMarço+vendaAbril+vendaMaio+vendaJunho)*comissão
let crecheSeis = auxilioCreche*6
let descontoInssSeis = (somaComissaoSeis+salarioSeis+crecheSeis)*inss
let totalSeis = ((salarioSeis+somaComissaoSeis+crecheSeis)-descontoInssSeis)

console.log("O cálculo do salario total durante o primeiro semestre é de,", totalSeis)

let média = totalSeis/6
console.log("A média do salário de fulano é de,", média)