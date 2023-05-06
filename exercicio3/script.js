/*# Exercício 3

### Parte 1*/

/*console.log(`5 é maior que 20 e também é menor que 2:${5 > 20 && 5 < 2}`);
console.log(`5 é igual a 5 ou é igual a “5”: ${5 === 5 || 5 === "5"}`);
console.log(`negação de (vinte é maior que cinquenta):${!(20 > 50)}`);
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta):${!(20 > 50 || 50 > 60)}`); */



//----------------------------------------------------------------------------------------------


//### Parte 2

let salario = 2000;


//a) Auxílio creche por filho:  R$45,50
const auxCrech = 45.5

//b) Comissão de 10% sobre o total de vendas mensal
const x = 0.1;

/*c) Total de vendas dos meses de janeiro a junho:

- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00*/

let mesJaneiro = 5784.50;
let mesFevereiro = 3418.41;
let mesMarco = 4124.10;
let mesAbril = 1874.00;
let mesMaio = 7000.00;
let mesJunho = 9450.00;

//d)  Desconto do INSS 5% do salário

const desc = 0.95;

//-------------------Calcule:----------

console.log(`O salário fixo mais o auxílio creche:${salario + auxCrech}`);
console.log(`Comissão em janeiro:${salario * x} pila`);
console.log(`Desconto em janeiro:${(salario + (mesJaneiro * x) + auxCrech) * x}`);

console.log(`Salário em janeiro:${(salario + (mesJaneiro * x) + auxCrech) * desc}`);
console.log(`Salário em fevereiro:${(salario + (mesFevereiro * x) + auxCrech) * desc}`);
console.log(`Salário em março:${(salario + (mesMarco * x) + auxCrech) * desc}`);
console.log(`Salário em abril:${(salario + (mesAbril * x) + auxCrech) * desc}`);
console.log(`Salário em maio:${(salario + (mesMaio * x) + auxCrech) * desc}`);
console.log(`Salário em junho:${(salario + (mesJunho * x) + auxCrech) * desc}`);


let mes1 = (salario + (mesJaneiro * x) + auxCrech) * desc;
let mes2 = (salario + (mesFevereiro * x) + auxCrech) * desc;
let mes3 = (salario + (mesMarco * x) + auxCrech) * desc;
let mes4 = (salario + (mesAbril * x) + auxCrech) * desc;
let mes5 = (salario + (mesMaio * x) + auxCrech) * desc;
let mes6 = (salario + (mesJunho * x) + auxCrech) * desc;
let media = (mes1 + mes2 + mes3 + mes4 + mes5 + mes6) / 6

console.log(`A média dos 6 ultimos meses é ${media.toFixed(2)}`);






