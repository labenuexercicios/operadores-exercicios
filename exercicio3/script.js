// PARTE 1

//a) 5 é maior que 20 e também é menor que 2;
const operacao1 = 5 > 20  && 5 < 2
console.log(operacao1)

//b) 5 é igual a 5 ou é igual a “5”;
const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)

//c) negação de (vinte é maior que cinquenta)
const operacao3 = !(20 > 50) 
console.log(operacao3)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao4)


/* Exemplo:

const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/

//PARTE 2

/**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, 
reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. 
Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, 
mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**/


const creche = 45.50*2 
const salario = 2000
let comJan = 5784.50 //- Janeiro: R$ 5.784,50
let comFev = 3418.41 //- Fevereiro: R$ 3.418,41
let comMar = 4124.10 //- Março: R$ 4.124,10
let comAbr = 1874.00 //- Abril: R$ 1.874,00
let comMai = 7000.00 //- Maio: R$ 7.000,00
let comJun = 9450.00 //- Junho: R$ 9.450,00



console.log("Comissão de Janeiro")

/*1)*/ let res1 = console.log("Salário fixo + auxílio creche", salario+creche)  //1) O salário fixo mais o auxílio creche
/*2)*/ let res2 = Number(console.log("Comissão de Janeiro", comJan*0.1))      //2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
/*3)*/ let res3 = console.log("INSS de Janeiro", ((salario+creche+res2)*0.05)) //3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

/*4)*/ 
let salJan = (salario+(comJan*0.1)+creche) - (((salario+(comJan*0.1)+creche)*0.05))
console.log("Salário de Janeiro:", salJan)
let salFev = (salario+(comFev*0.1)+creche) - (((salario+(comFev*0.1)+creche)*0.05))
console.log("Salário de Fevereiro", salFev)
let salMar = (salario+(comMar*0.1)+creche) - (((salario+(comMar*0.1)+creche)*0.05))
console.log("Salário de Março", salMar)
let salAbr = (salario+(comAbr*0.1)+creche) - (((salario+(comAbr*0.1)+creche)*0.05))
console.log("Salário de Abril", salAbr)
let salMai = (salario+(comMai*0.1)+creche) - (((salario+(comMai*0.1)+creche)*0.05))
console.log("Salário de Maio", salMai)
let salJun = (salario+(comJun*0.1)+creche) - (((salario+(comJun*0.1)+creche)*0.05))
console.log("Salário de Junho", salJun)

/*5)*/ console.log("A Média salarial dos 6 meses é:", (salJan+salFev+salMar+salAbr+salMai+salJun)/6)