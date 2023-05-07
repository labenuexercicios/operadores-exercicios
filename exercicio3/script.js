/*## Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)*/

console.log("5 é maior que 20 e também é menor que 2 ?",5 > 20 && 5 < 2);

console.log("5 é igual a 5 ou é igual a “5” ?", 5 === 5 || 5 === "5");

console.log("negação de (vinte é maior que cinquenta ?)",   20 >! 50);

console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta ?)", 20 >! 50  || 50 > 60, );

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: 
 *Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor,
 *recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50*/
let salario = 2000.00

let auxilioCreche = 91

//b) Comissão de 10% sobre o total de vendas mensal

const comissaoDeJan   = 5784.50 * 0.1
const comissaoDeFev   = 3418.41 * 0.1
const comissaoDeMar   = 4124.10 * 0.1
const comissaoDeAbril = 1874.00 * 0.1
const comissaoDeMaio  = 7000.00 * 0.1
const comissaoDeJunho = 9450.00 * 0.1 



/*c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário*/

let desconto =  0.05

const descontoDoMesDeJan = 128.925

const descontoDoMesDeFev = 177.092

const descontoDoMesDeAbril = 109.22

const descontoDoMesDeJunho = 147.25

const descontoDoMesDeMaio = 135

const descontoDoMesDeMar =  120.621
// Para saber o desconto do INSS mês é necessario pegar o valor do salario + comissão e * por 0.05

/*Calcule:

1) O salário fixo mais o auxílio creche*/


console.log(`O salário mais o auxílio creche é de ${salario + auxilioCreche}`);

//2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

console.log(`A comissão do Fulando de Silva do mês de janeiro é de ${comissaoDeJan}`);

/*3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve 
   levar em consideração o salário + porcentagem de vendas)*/

   console.log(`O INSS vai desconta do mês de Janeiro ${(salario + comissaoDeJan) * desconto}`);
   
//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const calculoDoMesDeJan = salario + comissaoDeJan

const calculoDoMesDeFev = salario + comissaoDeFev

const calculoDoMesDeMar = salario + comissaoDeMar

const calculoDoMesDeAbril = salario + comissaoDeAbril
console.log(calculoDoMesDeAbril)
console.log(descontoDoMesDeAbril);

const calculoDoMesDeJunho = salario + comissaoDeJunho

const calculoDoMesDeMaio = salario + comissaoDeMaio


console.log(`o cálculo do salário do meses de janeiro com acréscimos e descontos ${calculoDoMesDeJan - descontoDoMesDeJan + auxilioCreche  }`);

console.log(`o cálculo do salário do meses de fevereiro com acréscimos e descontos ${calculoDoMesDeFev - descontoDoMesDeFev  + auxilioCreche  }`);

console.log(`o cálculo do salário do meses de março com acréscimos e descontos ${calculoDoMesDeMar - descontoDoMesDeMar + auxilioCreche  }`);

console.log(`o cálculo do salário do meses de abril com acréscimos e descontos ${calculoDoMesDeAbril -  descontoDoMesDeAbril + auxilioCreche  }`);

console.log(`o cálculo do salário do meses de junho com acréscimos e descontos ${calculoDoMesDeJunho - descontoDoMesDeJunho + auxilioCreche  }`);

console.log(`o cálculo do salário do meses de maio com acréscimos e descontos ${calculoDoMesDeMaio - descontoDoMesDeMaio + auxilioCreche  }`);


/*5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. 
    Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)*/
    let total = calculoDoMesDeJan - descontoDoMesDeJan + auxilioCreche
    let total2 = calculoDoMesDeFev - descontoDoMesDeFev  + auxilioCreche
    let total3 = calculoDoMesDeMar - descontoDoMesDeMar + auxilioCreche
    let total4 = calculoDoMesDeAbril - descontoDoMesDeAbril + auxilioCreche
    let total5 = calculoDoMesDeJunho - descontoDoMesDeJunho + auxilioCreche
    let total6 = calculoDoMesDeMaio - descontoDoMesDeMaio + auxilioCreche
    
    console.log(`Média dos meses ${(total + total6 + total2 + total3 + total4 + total5) / 6}`);