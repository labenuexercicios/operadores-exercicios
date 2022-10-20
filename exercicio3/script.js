const operacao1= 50 >20 && 5 < 2
console.log(operacao1)
const operacao2= 5 == 5 || 5 == "5"
console.log(operacao2)
const operacao3= ! "vinte" > "cinquenta"
console.log(operacao3)
const operacao4=! "vinte"> "cinquenta"||"cinquenta" > "sessenta"
console.log(operacao4)

// Parte 2 do exercicio 3 
let salario=2000
salario = 2000 + 45.50 + 45.50 
console.log("Salario fixo mais auxilo da creche do funcionanrio Fulano Da Silva e de" , salario ,)

let comissaoJ= 5784.50 * 0.20
console.log(" No mes de Janeiro a comissao do funcionario Fulano da Silva sera de " , comissaoJ)


let salarioJaneiro= salario + comissaoJ
salarioJaneiro= (salarioJaneiro * -0.05 ) + salarioJaneiro 
console.log("Salario de Janeiro para funcionaro Fulano da Silva sera de " , salarioJaneiro)

let comissaoFevereiro= 3418.41 * 0.20
let salarioFevereiro = salario + comissaoFevereiro
salarioFevereiro= (salarioJaneiro * -0.05 ) + salarioJaneiro 
console.log("Salario de Fevereiro para funcionaro Fulano da Silva sera de " , salarioFevereiro)

let comissaoMarco= 4124.10 * 0.20
let salarioMarco= salario + comissaoMarco
salarioMarco= (salarioMarco * -0.05 ) + salarioMarco 
console.log("Salario de Marco para funcionaro Fulano da Silva sera de " , salarioMarco)

let comissaoAbril=1874.00 * 0.20
let salarioAbril= salario + comissaoAbril
salarioJaneiro= (salarioAbril * -0.05 ) + salarioAbril 
console.log("Salario de Abril para funcionaro Fulano da Silva sera de " , salarioAbril)

let comissaoMaio=7000 *0.20
let salarioMaio= salario + comissaoMaio
salarioMaio= (salarioMaio * -0.05 ) + salarioMaio 
console.log("Salario de Maio para funcionaro Fulano da Silva sera de " , salarioMaio)

let comissaoJunho=9450 *0.20 
let salarioJunho= salario + comissaoJunho
salarioJunho= (salarioJunho * -0.05 ) + salarioJunho 
console.log("Salario de Junho para funcionaro Fulano da Silva sera de " , salarioJunho)

let mediaDeSalario = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioJunho + salarioMaio) / 6 
console.log("A media de salario dos ultimos 6 meses com descontos e comissoes e de ", mediaDeSalario)




