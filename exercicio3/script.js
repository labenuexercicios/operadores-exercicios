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
const salarioBase = 2000;
const auxCreche = 45.50;
const valorAuxCreche = numFilho * auxCreche;
const comissao = 0.1;
const descInss = 0.05;

const vendasJan = 5784.50;
const vendasFev = 3418.41;
const vendasMar = 4124.10;
const vendasAbr = 1874.00;
const vendasMai = 7000.00;
const vendasJun = 9450.00;

//  1) O salário fixo mais o auxílio creche
const salarioFixo = salarioBase + valorAuxCreche;

// 2) Quanto Fulano de Silva receberá de comissão em janeiro
const comissaoJan = vendasJan * comissao;
const comissaoFev = vendasFev * comissao;
const comissaoMar = vendasMar * comissao;
const comissaoAbr = vendasAbr * comissao;
const comissaoMai = vendasMai * comissao;
const comissaoJun = vendasJun * comissao;

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS
const valorDescInss = (salarioBase + comissaoJan) * descInss;

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos. 
const salarioJan = (salarioBase + valorAuxCreche + comissaoJan) - ((salarioBase + comissaoJan) * descInss);
console.log("O salário líquido de Janeiro é de R$", salarioJan);

const salarioFev = (salarioBase + valorAuxCreche + comissaoFev) - ((salarioBase + comissaoFev) * descInss);
console.log("O salário líquido de Fevereiro é de R$", salarioFev);

const salarioMar = (salarioBase + valorAuxCreche + comissaoMar) - ((salarioBase + comissaoMar) * descInss);
console.log("O salário líquido de Março é de R$", salarioMar);

const salarioAbr = (salarioBase + valorAuxCreche + comissaoAbr) - ((salarioBase + comissaoAbr) * descInss);
console.log("O salário líquido de Abril é de R$", salarioAbr);

const salarioMai = (salarioBase + valorAuxCreche + comissaoMai) - ((salarioBase + comissaoMai) * descInss);
console.log("O salário líquido de Maio é de R$", salarioMai);

const salarioJun = (salarioBase + valorAuxCreche + comissaoJun) - ((salarioBase + comissaoJun) * descInss);
console.log("O salário líquido de Junho é de R$", salarioJun);

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
const mediaSalario = (
        (salarioBase + valorAuxCreche + comissaoJan) + 
        (salarioBase + valorAuxCreche + comissaoFev) + 
        (salarioBase + valorAuxCreche + comissaoMar) + 
        (salarioBase + valorAuxCreche + comissaoAbr) + 
        (salarioBase + valorAuxCreche + comissaoMai) + 
        (salarioBase + valorAuxCreche + comissaoJun)
    ) / 6;
    
console.log("A média salarial de Janeiro a Junho foi de R$", mediaSalario);