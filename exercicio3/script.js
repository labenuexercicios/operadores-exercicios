//Exercicio 3
//Parte 1
//a)
console.log(" 5 é maior que 20 e também é menor que 2", (5>20 && 5<2))

//b)
console.log("5 é igual a 5 ou é igual a '5'", (5==5 || 5=="5" ))

//c)
console.log("Negação de 20 é maior que 50", !(20>50))

//d)
console.log("Negação de 20 é maior que 50 ou 50 é maior que 60", !(20>50 || 50 >60))

//Parte 2 
//1) Salário mais o auxílio Creche

let salariocreche = 2000.00 + 45.50
console.log("O salário + a creche da o total de R$", salariocreche)

//2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

let salarioext =  5784.50*0.1
console.log("Receberá comissão de janeiro no total de R$", salarioext)

//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

let descontoinss = (salariocreche + salarioext)*0.05
console.log("O desconto do inss será de R$", descontoinss)

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
//LEVANDO EM CONSIDERAÇÃO O SALÁRIO SOMADO COM O BENEFÍCIO PARA FAZER OS DESCONTOS E ACRESCIMOS
let jan = salariocreche +salarioext - descontoinss
console.log("O salário de janeiro será R$", jan)


let fevext = 3418.41*0.1
let fevinss = (salariocreche + fevext)*0.05
let fev = salariocreche + fevext - fevinss

console.log("O salário de Fevereiro será R$", fev)

let marext = 4124.10*0.1
let marinss = (salariocreche + marext)*0.05
let mar = salariocreche + marext - marinss

console.log("O salário de Março será R$", mar)

let abrext = 1874.00*0.1
let abrinss = (salariocreche + abrext)*0.05
let abr = salariocreche + abrext - abrinss

console.log("O salário de Abril será R$", abr)

let maiext = 7000.00*0.1
let maiinss = (salariocreche + maiext)*0.05
let mai = salariocreche + maiext - maiinss

console.log("O salário de Maio será R$", mai)

let junext = 9450.00*0.1
let juninss = (salariocreche + junext)*0.05
let jun = salariocreche + junext - juninss

console.log("O salário de Junho será R$", jun)


//5)A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  //( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

console.log("A média de salário dos 6 meses é de R$", (jan+fev+mar+abr+mai+jun)/6)