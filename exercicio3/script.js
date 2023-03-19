// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;
//console.log("5 é maior que 20 e também é menor que 2:",5 > 20 && 5 < 2);

// b) 5 é igual a 5 ou é igual a “5”;
//console.log("5 é maior que 20 e também é menor que 2:",5 > 20 && 5 < 2);

// c) negação de (vinte é maior que cinquenta)
//console.log("negação de (vinte é maior que cinquenta)",!(20 > 50));

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
//console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", !(20 > 50 || 50 > 60));

/**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: 
Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, 
recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês 
e entrou na empresa em 2019.**/

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

// Calcule:
let salarioFixo = 2000.00
const auxilioCreche = 45.50 * 2

// comisões mensais:

let comissaoJaneiro = 5784.50 * 0.10
let comissaoFevereiro = 3418.41 * 0.10
let comissaoMarco = 4124.10 * 0.10
let comissaoAbril = 1874.00 * 0.10
let comissaoMaio = 7000.00 * 0.10
let comissaoJunho = 9450.00 * 0.10

// descontos mensais

// let descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * 0.5;
let descontoInssFevereiro = (salarioFixo + comissaoFevereiro) * 0.5;
let descontoInssMarco = (salarioFixo + comissaoMarco) * 0.5;
let descontoInssAbril = (salarioFixo + comissaoAbril) * 0.5;
let descontoInssMaio = (salarioFixo + comissaoMaio) * 0.5;
let descontoInssJunho = (salarioFixo + comissaoJunho) * 0.5;

// 1) O salário fixo mais o auxílio creche

let salarioFixoComCreche = 2000.00 + auxilioCreche
console.log("---------------");
console.log("Salario fixo  + Auxilio creche: ",salarioFixoComCreche.toFixed(2));

// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log("---------------");
console.log("Comissao de janeiro: ",comissaoJaneiro.toFixed(2));

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * 0.05
console.log("---------------");
console.log("Desconto de INSS - janeiro: ",descontoInssJaneiro.toFixed(2));

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let totalJaneiro = (salarioFixoComCreche + comissaoJaneiro - descontoInssJaneiro)
let totalFevereiro = (salarioFixoComCreche + comissaoFevereiro - descontoInssFevereiro) 
let totalMarco = (salarioFixoComCreche + comissaoMarco - descontoInssMarco)
let totalAbril = (salarioFixoComCreche + comissaoAbril - descontoInssAbril) 
let totalMaio = (salarioFixoComCreche + comissaoMaio - descontoInssMaio)
let totalJunho = (salarioFixoComCreche + comissaoJunho - descontoInssJunho) 

console.log("---------------");
console.log("Salario total Janeiro: ",totalJaneiro.toFixed(2));
console.log("Salario total Fevereiro: ",totalFevereiro.toFixed(2));
console.log("Salario total Março: ",totalMarco.toFixed(2));
console.log("Salario total Abril: ",totalAbril.toFixed(2));
console.log("Salario total Maio: ",totalMaio.toFixed(2));
console.log("Salario total Junho: ",totalJunho.toFixed(2));

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
let mediaSalario = (totalJaneiro + totalFevereiro + totalMarco + totalAbril + totalMaio + totalJunho) / 6;
console.log("Média do salário em seis meses (de janeiro a junho):",mediaSalario.toFixed(2));