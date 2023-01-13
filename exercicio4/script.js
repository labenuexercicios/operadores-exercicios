

const conta1 = 5 > 20 && 5 < 2
console.log(conta1)


const conta2 = 5 == 5 || 5 === "5"
console.log(conta2)
const conta3 = !(20 > 50)
console.log(conta3)


const conta4 = !(20 > 50 || 50 > 60)
console.log(conta4)
 

/* //**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. 
Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, 
ais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.** 
 */



let nome = prompt ("Qual seu nome ?")
    console.log ("Nome Completo", nome)

let data = prompt ("informe sua data de nascimento") 
    console.log("Data de Nascimento", data)

let endereco = prompt ("Qual seu endereço?")
    console.log("Endereço", endereco)

let cpf = Number (prompt ("CPF:"))
    console.log("CPF", cpf)

let escolaridade = prompt ("Escolaridade:")
    console.log("Escolaridade", escolaridade)

let cnh = prompt ("Possuí CNH ?")
    console.log("Possui CNH?", cnh)

let filhos = Number (prompt ("Quantidade de filhos"))
    console.log("Tem filhos?", filhos)

let cargo = prompt ("Qual Cargo atual ?")
    console.log("Ultimo cargo?", cargo)

let salario = Number (prompt("Qual Salario atual ?"))
    console.log("Salario atual", salario)

let comissao = Number (prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
    console.log("Comissão atual", comissao)

let ano = Number (prompt("Informe o ano de admissão"))
    console.log("Ano de admissão", ano)




    /* Resolução exercicio letra A Calcule:

    1) O salário fixo mais o auxílio creche */


let creche = 45.50 * filhos
let salarioCreche = salario + creche
console.log("O salario do funcionario com o auxilio creche", salarioCreche)

/* 2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2) */

const comJaneiro = (( comissao + 5784.50 ) /100)
const comFevereiro = (( comissao + 3418.41 ) /100)
const comMar = (( comissao + 4124.10 ) /100)
const comAbril = (( comissao + 1874.00 ) /100) 
const comMaio = (( comissao + 7000.00 ) /100)
const comJunho = (( comissao + 9450.00 ) /100)

console.log("Comissão mês de Janeiro será:", comJaneiro )

/* 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.) */

let inss = 0.05 
let inssJan = ((comJaneiro + salario) *inss)
let inssFev = ((comFevereiro + salario) *inss)
let inssMar = ((comMar + salario) *inss)
let inssAbril = ((comAbril + salario) *inss)
let inssMaio = ((comMaio + salario) *inss)
let inssJunnho = ((comJunho + salario) *inss)

console.log("Será Descontato de inss do mês de janeiro", inssJan)


/* 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos. */

let salarioJan = ((salarioCreche + comJaneiro ) - inssJan)
let salarioFev = ((salarioCreche + comFevereiro ) - inssFev)
let salarioMar = ((salarioCreche + comMar ) - inssMar)
let salarioAbril = ((salarioCreche + comAbril )- inssAbril)
let salarioMaio = ((salarioCreche + comMaio )- inssMaio)
let salarioJunho = ((salarioCreche + comJunho )- inssJunnho)

console.log("Valor de todos os meses", salarioJan, salarioFev, salarioMar, salarioAbril, salarioMaio, salarioJunho)

/* 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, 
    a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */

    let div = (6)
    let mediaSalario = ((salarioCreche + comJaneiro) + 
(salarioCreche + comFevereiro) + 
(salarioCreche + comMar) + 
(salarioCreche + comAbril) + 
(salarioCreche + comMaio) + 
(salarioCreche + comJunho) )
console.log(mediaSalario /div)

    