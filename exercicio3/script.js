const operacaoA = 5 > 20 && 5 < 2
console.log("5 é maior que 20 e também é menor que 2;", operacaoA)

const operacaoB = 5 === 5 && 5 === "5"
console.log("5 é igual a 5 ou é igual a “5”;", operacaoB) // true e false, devolve false

const operacaoC= 20 > 50
console.log("Vinte é maior que 50?", operacaoC)

const operacaoD = !((20 > 50) || (50>60))
console.log("vinte é maior que cinquenta ou cinquenta é maior que sessenta?", !operacaoD)

//parte 2

let salario = 2000;

//a( Aux. Creche por filho

const auxCrech= 45.5

//comissão 10% sob o valor mensal

const x = 0.1

//total de vendas

let mesJan = 5784.50;
let mesFev = 3418.41;
let mesMarco = 4124.10;
let mesAbril = 1874.00;
let mesMaio = 7000.00;
let mesJunho = 9450.00;

//desconto do inss 5% do salario

const desc = 0.95;

//calcule

console.log(`O salário fixo mais o auxílio creche:${salario + auxCrech}`);
console.log(`Comissão em janeiro:${salario * x}`)
console.log(`Desconto em janeiro:${(salario + (mesJan * x) + auxCrech) * desc}`);

console.log(`Salário em janeiro:${(salario + (mesJan * x) + auxCrech) * desc}`);
console.log(`Salário em fevereiro:${(salario + (mesFev * x)+ auxCrech) * desc}`);
console.log(`Salário em março:${(salario + (mesMarco * x) + auxCrech) * desc}`);
console.log(`Salário em abril:${(salario + (mesAbril * x) + auxCrech) * desc}`);
console.log(`Salário em maio:${(salario + (mesMaio * x) + auxCrech) * desc}`);
console.log(`Salário em junho:${(salario + (mesJunho * x) + auxCrech) * desc}`);

let mes1 = (salario + (mesJan * x) + auxCrech) * desc;
let mes2 = (salario + (mesFev * x) + auxCrech) * desc;
let mes3 = (salario + (mesMarco * x) + auxCrech) * desc;
let mes4 = (salario + (mesAbril * x) + auxCrech) * desc;
let mes5 = (salario + (mesMaio * x) + auxCrech) * desc;
let mes6 = (salario + (mesJunho * x) + auxCrech) * desc;
let media = (mes1 + mes2 + mes3 + mes4 + mes5 +mes6) / 6

console.log(`A média dos 6 ultimos meses é ${media}`);