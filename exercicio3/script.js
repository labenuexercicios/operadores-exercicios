//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:
//a) 5 é maior que 20 e também é menor que 2;
const operation1 = 5 > 20 && 5 < 2;
console.log(operation1);

//b) 5 é igual a 5 ou é igual a “5”;
const operation2 = 5 === 5 || 5 === "5";
console.log(operation2);

//c) negação de (vinte é maior que cinquenta)
const operation3 = !(20 > 50);
console.log(operation3);

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operation4 = !(20 > 50 || 50 > 60);
console.log(operation4);


//Na aula passada começamos a implementar um sistema para o RH de uma empresa.
//Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

//O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.

//Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
//a) Auxílio creche por filho:  R$45,50
//b) Comissão de 10% sobre o total de vendas mensal
//c) Total de vendas dos meses de janeiro a junho:
//d) Desconto do INSS 5% do salário

//Calcule:
//O salário fixo mais o auxílio creche:
const earnings = 2000;
const dayCare = 45.50 * 2;
let result1 = earnings + dayCare;
console.log("salário fixo mais o auxílio creche: ", result1);

//Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let monthSales = 5784.50;
let comission = monthSales * 0.1;
console.log("comissão de janeiro: ", comission);

//Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
const fees = (earnings + comission) * 0.05;
console.log("desconto INSS: ", fees);

//Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log("janeiro: ", ((earnings + comission) - fees) + dayCare);

monthSales = 3418.41;
comission = monthSales * 0.1;
console.log("fevereiro: ", ((earnings + comission) - fees) + dayCare);

monthSales = 4124.10;
comission = monthSales * 0.1;
console.log("março: ", ((earnings + comission) - fees) + dayCare);

monthSales = 1874.00;
comission = monthSales * 0.1;
console.log("abril: ", ((earnings + comission) - fees) + dayCare);

monthSales = 7000.00;
comission = monthSales * 0.1;
console.log("maio: ", ((earnings + comission) - fees) + dayCare);

monthSales = 9450.00;
comission = monthSales * 0.1;
console.log("junho: ", ((earnings + comission) - fees) + dayCare);


//A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
const average = (5784.50 + 3418.41 + 4124.10 + 1874.00 + 7000.00 + 9450.00);
console.log(average);
