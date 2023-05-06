//PARTE 1
/*let operacao1 = 5 > 20 && 5 < 2
let operacao2 = 5 === 5 || 5 === '5'
let operacao3 = !20 > 50
let operacao4 = !(20 > 50 || 50 > 60)

console.log(operacao1)
console.log(operacao2)
console.log(operacao3)
console.log(operacao4)*/

//----------------> PARTE 2
let sal = 2000
let jan = 5784.5
let fev = 3418.41
let mar = 4124.10
let abr = 1874
let mai = 7000
let jun = 9450
let filhos = 2
let auxilioCreche = 45.5 * filhos
let comissao = 0.1
let inss = 0.05

//1) O salário fixo mais o auxílio creche

let conta1 = sal + auxilioCreche
console.log("Esse é o seu salário mais auxílio creche: ", conta1.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}))

//2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

let conta2 = jan * comissao
console.log("Você receberá ", conta2.toLocaleString('pt-br', {style:'currency', currency:'BRL'}), " de comissão no mês de janeiro.")

//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

let conta3 = (jan + sal) * inss
console.log("O desconto do inss no mês de janeiro será de: ", conta3.toLocaleString('pt-br', {style:'currency', currency: 'BRL'}))

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let salJan = (sal + (jan*comissao) ) - (sal*inss) + auxilioCreche
let salFev = (sal + (fev*comissao) ) - (sal*inss) + auxilioCreche
let salMar = (sal + (mar*comissao) ) - (sal*inss) + auxilioCreche
let salAbr = (sal + (abr*comissao) ) - (sal*inss) + auxilioCreche
let salMai = (sal + (mai*comissao) ) - (sal*inss) + auxilioCreche
let salJun = (sal + (jun*comissao) ) - (sal*inss) + auxilioCreche

console.log(salJan.toLocaleString('pr-br', {style:'currency', currency:'BRL'}))
console.log(salFev.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))
console.log(salMar.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
console.log(salAbr.toLocaleString('pt-br', {style:'currency', currency: 'BRL'}))
console.log(salMai.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
console.log(salJun.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.

let media = (salJan + salFev, + salMar + salAbr + salMai + salJun) / 6
console.log("A média do salário nos seis meses foi de ", media.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))