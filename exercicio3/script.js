// # Exercício 3 envio
console.log(`Envio errado`)
function linha(){
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}
// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:
const n1= 5
const n2 = 20
const n3 = 2
// a) 5 é maior que 20 e também é menor que 2;
console.log(`A-) ${n1>n2 && n1 < n2}`)

// b) 5 é igual a 5 ou é igual a “5”;
console.log(`B-) ${n1 ===n1 || n1 === "n1"} `)

// c) negação de (vinte é maior que cinquenta)
console.log(`C-) ${!(20>50)}`)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
console.log(`D-) ${!(20>50 || 50>60)}`)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false, que devolve false*/
const op01 = 20<50 && 50>90
console.log(`operação1 ${op01}`)
linha()
// ### Parte 2

// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 
// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.*/
const funcionário = `Fulano de Silva`
const CPF = '000.000.000.00'
const dataNascimento = "10/02/1990"
const endereco = ' Rua dos bobos nº 0'
const admissao = 2019
const salario = 2000
const filhos = 2
const comis = 0.1
const inss = 0.05
let auxilio = 45.5
//function comissao()

function ganhosDescontos(vendasMes,nFilhos){
    const aux = nFilhos*45.5
    const comissao = vendasMes *.1
    const salario = 2000
    const desc = (salario+comissao)*.05

    return (salario+comissao+aux-desc)
}
//const liqMes=liquido()
// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
// a) Auxílio creche por filho:  R$45,50
// b) Comissão de 10% sobre o total de vendas mensal
// c) Total de vendas dos meses de janeiro a junho:
// - Janeiro: R$ 5.784,50
const vendasJan =5787.5
const totLiqJan=ganhosDescontos(vendasJan,2)

// - Fevereiro: R$ 3.418,41
const vendasFev =3418.41
const totLiqFev = ganhosDescontos(vendasFev,2)

// - Março: R$ 4.124,10
const vendasMar = 4124.1
const totLiqMar = ganhosDescontos(vendasMar,2)

// - Abril: R$ 1.874,00
const vendasAbr = 1874
const totLiqAbr = ganhosDescontos(vendasAbr,2)

// - Maio: R$ 7.000,00
const vendasMai = 7000
const totLiqMai = ganhosDescontos(vendasMai,2)

// - Junho: R$ 9.450,00
const vendasJun = 9450
const totLiqJun = ganhosDescontos(vendasJun,2)

// d)  Desconto do INSS 5% do salário

// Calcule:

// 1) O salário fixo mais o auxílio creche
console.log(`O salario fixo com o auxilio cheche é ${salario+auxilio*filhos}`)
linha()
// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log(`Fulano receberá em janeiro R$ ${comis*vendasJan} de comissão `)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
const desc =((salario+(vendasJan*comis))*inss)
console.log(`Fulano terá em janeiro um desconto de R$ ${desc.toFixed(2)}`)
linha()

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log(`Total Liquido Janeiro: ${totLiqJan.toFixed(2)}`)
console.log(`Total liquido fevereiro: ${totLiqFev.toFixed(2)}`)
console.log(`Total liquido março: ${totLiqMar.toFixed(2)}`)
console.log(`Total liquido em abril: ${totLiqAbr.toFixed(2)}`)
console.log(`Total liquido em maio: ${totLiqMai.toFixed(2)}`)
console.log(`Total liquido em junho: ${totLiqJun.toFixed(2)}`)

linha()
// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
const media =((totLiqJan+totLiqFev+totLiqMar+totLiqAbr+totLiqMai+totLiqJun)/6)
console.log(`A media salarial dos ultimos 6 meses foi de R$ ${media.toFixed(2)}`)
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)


