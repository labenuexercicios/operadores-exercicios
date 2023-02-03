// # Exercício 3

// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

//a)
const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)
//b)
const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)
//c)
const operação3 = !(20 > 50)
console.log(operação3)
//d)
const operação4 = !(20 > 50 || 50 > 70)
console.log(operação4)

// ### Parte 2

// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

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

// 1) O salário fixo mais o auxílio creche
const salarioFixo = 2000
const quantidadeDeFilhos = 2
let auxilioCreche = 45.50 * quantidadeDeFilhos
resultado = salarioFixo + auxilioCreche 
console.log(resultado.toFixed(2))
// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
const vendasJaneiro = 5784.50
const salarioComissao = vendasJaneiro * 0.1
console.log(salarioComissao.toFixed(2))
// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
const descontoJaneiro = (salarioFixo + salarioComissao) * 0.05
console.log(descontoJaneiro.toFixed(2))
// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
//janeiro
const salarioJ = resultado + salarioComissao - descontoJaneiro
console.log(salarioJ.toFixed(2))
//fevereiro
const salarioComissaoF = 3418.41 * 0.1
const descontoFevereiro = salarioComissaoF * 0.05
const salarioF = resultado + salarioComissaoF - descontoFevereiro
console.log(salarioF.toFixed(2))
//março
const salarioComissaoM = 4124.10 * 0.1
const descontoMarco = salarioComissaoM * 0.05
const salarioM = resultado + salarioComissaoM - descontoMarco
console.log(salarioM.toFixed(2))
//abril
const salarioComissaoA = 1874.00 * 0.1
const descontoAbril = salarioComissaoA * 0.05
const salarioA = resultado + salarioComissaoA - descontoAbril
console.log(salarioA.toFixed(2))
//maio
const salarioComissaoMa = 7000.00 * 0.1
const descontoMaio = salarioComissaoMa * 0.05
const salarioMa = resultado + salarioComissaoMa - descontoMaio
console.log(salarioMa.toFixed(2))
//junho
const salarioComissaoJu = 9450.00 * 0.1
const descontoJunho = salarioComissaoM * 0.05
const salarioJu = resultado + salarioComissaoJu - descontoJunho
console.log(salarioJu.toFixed(2))

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
const media = (salarioJ + salarioF + salarioM + salarioA + salarioMa + salarioJu) / 6
console.log(media.toFixed(2))