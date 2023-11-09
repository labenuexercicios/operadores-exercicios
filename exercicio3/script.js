/* //  PARTE 1
//  Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:
//  a) 5 é maior que 20 e também é menor que 2;
const op1 = (5 > 20) && (5 < 2);
console.log("5 é maior que 20 e também é menor que 2", op1);

//  b) 5 é igual a 5 ou é igual a “5”;
const op2 = (5 === 5) || (5 === "5");
console.log("5 é igual a 5 ou é igual a “5”", op2);

//  c) negação de (vinte é maior que cinquenta)
const op3 = !(20 > 50);
console.log("negação de (vinte é maior que cinquenta)", op3);

//  d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const op4 = !(20 > 50 || 50 > 60);
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", op4);
 */

// PARTE 2
const numFilho = 2;
const baseSalarial = 2000;
const valorAuxCreche = 45.50;
const comissao = 0.1;
const descInss = 0.05;

const janVendas = 5784.50;
const fevVendas = 3418.41;
const marVendas = 4124.10;
const abrVendas = 1874.00;
const maiVendas = 7000.00;
const junVendas = 9450.00;

//  1) O salário fixo mais o auxílio creche
const salarioFixo = baseSalarial + numFilho * valorAuxCreche;

// 2) Quanto Fulano de Silva receberá de comissão em janeiro
const valorComissao = janVendas * comissao;

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS
const valorDescInss = (baseSalarial + valorComissao) * descInss;

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos. 
const salarioJan = (salarioFixo + (janVendas * comissao)) - 