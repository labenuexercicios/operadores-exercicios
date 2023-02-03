/* Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

 */

// Respostas parte 1
//letra 

const letraA = 5 > 20 && 5 < 2
console.log (`Letra A: ${letraA}`)

const letraB = (5 === 5) || (5 === "5")
console.log (`letra B: ${letraB}`)

const letraC = !(20>50)
console.log (`Letra C: ${letraC}`)

const letraD = ! (20>50 || 50>60)
console.log (`Letra D: ${letraD}`)

/*
### Parte 2
a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário
*/

const salario= 2000.00
const creche = 45.50
const comissao = 0.1 
const vjan = 5784.5
const vfev = 3418.41
const vmar = 4124.10
const vabr = 1874.00
const vmai = 7000.00
const vjun = 9450.00

/*
1) O salário fixo mais o auxílio creche
2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
*/

// Respostas
 const salarioauxilio = salario + (2*creche)
 console.log (`Salário mais creche: ${salarioauxilio}`)
 const questao2 = vjan*comissao
 questao2
 console.log (`Receberá de comissão em janeiro:${questao2}`)
 const questao3 = (questao2 + salario) * 0.05
 console.log (`Será descontado de inss em janeiro: ${questao3}`)

 // questao 4
 
 const salario1 = [salarioauxilio + (vjan*comissao)] 
 const inssjaneiro = salario1 * 0.05
 salariojaneiro = salario1 - inssjaneiro
 console.log (`O salário de Janeiro é: ${salariojaneiro}`)

 const salario2 = [salarioauxilio + (vfev*comissao)]
 const inssfevereiro = salario2 * 0.05
 salariofevereiro = salario2 - inssfevereiro 
 console.log (`O salário de fevereiro é: ${salariofevereiro}`)

 const salario3 = [salarioauxilio + (vmar*comissao)]
 const inssmarco = salario3 * 0.05
 salariomarco = salario3 - inssfevereiro 
 console.log (`O salário de março é: ${salariomarco}`)

 const salario4 = [salarioauxilio + (vabr*comissao)]
 const inssabril = salario4 * 0.05
 salarioabril = salario4 - inssabril 
 console.log (`O salário de abril é: ${salarioabril}`)

 const salario5 = [salarioauxilio + (vmai*comissao)]
 const inssmaio = salario5 * 0.05
 salariomaio = salario5 - inssmaio
 console.log (`O salário de fevereiro é: ${salariomaio}`)

 const salario6 = [salarioauxilio + (vjun*comissao)]
 const inssjunho = salario6 * 0.05
 salariojunho = salario6 - inssjunho 
 console.log (`O salário de fevereiro é: ${salariojunho}`)

 const mediasalarial = (salariojaneiro + salariofevereiro + salariomarco + salarioabril + salariomaio + salariojunho)/6
 console.log (`Média salarial dos últimos seis meses:${mediasalarial}`)





