// # Exercício 3 envio
envio
// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:
const n1 = 5
const n2 = 20
const n3 = 2
// a) 5 é maior que 20 e também é menor que 2;
console.log(n1>n2 && n1<n3)

// b) 5 é igual a 5 ou é igual a “5”;
console.log((n1===n1) || "5")

// c) negação de (vinte é maior que cinquenta)
console.log(!(n2 > 50) )

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const op1 = 20>50 || 50>60
console.log(!op1)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

// ### Parte 2

// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**
const salario = 2000
const filhos = 2
const comis = 0.1
const inss = 0.05

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
console.log(`O salario bruto é de ${salario}`)
// a) Auxílio creche por filho:  R$45,50
const aux = filhos * 45.5
console.log(`auxilio para os filhos é ${aux}`)
// b) Comissão de 10% sobre o total de vendas mensal
// c) Total de vendas dos meses de janeiro a junho:
// - Janeiro: R$ 5.784,50

const janeiro = 5784.5
const comiJan = janeiro*comis
console.log(comiJan)
const totDescJan = Number((comiJan+salario)*inss)
const liqJan = (comiJan+salario-totDescJan +aux)
console.log(`total janeiro liquido R$ ${liqJan.toFixed(2)} inss nao inside sobre o auxilo por filhos`)

// - Fevereiro: R$ 3.418,41
const fevereiro= 3418.41;
const comifev = fevereiro*comis;
const totDescFev = (comifev+salario)*inss;
const liqFev = (comifev+salario-totDescFev +aux);
// - Março: R$ 4.124,10
const marco = 4124.10;
const comiMar = (marco*comis);
const totDescMar = (comiMar+salario)*inss;
const liqMar = comiMar+salario-totDescMar +aux
// - Abril: R$ 1.874,00
const abril = 1874
const comiAbr = abril*comis
const totDesAbr = (comiAbr+salario)*inss
const liqAbr = comiAbr+salario-totDesAbr +aux
// - Maio: R$ 7.000,00
const maio = 7000
const comiMai = maio*comis
const totDesMai = (comiMai+salario)*inss
const liqMai = comiMai+salario-totDesMai +aux
// - Junho: R$ 9.450,00
const junho = 9450
const comiJun = junho*comis
const totDesJun = (comiJun+salario)*inss
const liqJun = comiJun+salario-totDesJun +aux
// d)  Desconto do INSS 5% do salário

// Calcule:

// 1) O salário fixo mais o auxílio creche
console.log(`O salario fixo com o auxilio cheche é ${salario+aux}`)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log(`Fulano receberá em janeiro R$ ${comiJan} de comissão `)
// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

console.log(`Fulano terá em janeiro um desconto de R$ ${totDescJan.toFixed(2)}`)
// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log(`Salario do mes de janeiro R$ ${liqJan.toFixed(2)}`)
console.log(`Salario do mes de fevereiro R$ ${liqFev.toFixed(2)}`)
console.log(`Salario do mes de março R$ ${liqMar.toFixed(2)}`)
console.log(`Salario do mes de abril R$ ${liqAbr.toFixed(2)}`)
console.log(`Salario do mes de maio R$ ${liqMai.toFixed(2)}`)
console.log(`Salario do mes de junho R$ ${liqJun.toFixed(2)}`)

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
const media =((liqJan+liqFev+liqMar+liqAbr+liqMai+liqJun)/6)
console.log(`A media salarial dos ultimos 6 meses foi de R$ ${media.toFixed(2)}`)
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)


