/**Parte1 */

let res

res =  5 > 20 && 5 < 2
console.log("5 > 20 && 5 < 2" + res)

res = 5 == 5 || 5 == "5"
console.log(" 5 == 5 || 5 == 5" + res)

res = !(20 > 50)
console.log("20 > 50" + res)

res = !(20 > 50 || 50 > 70)
console.log("20 > 50 || 50 > 70" + res)

/**Parte2 */

/**a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:*/

let janeiro = 5784.50
let fevereiro = 3418.41
let marco = 4124.10
let abril = 1874.00
let maio = 7000.00
let junho = 9450.00

/*d)  Desconto do INSS 5% do salário */
let inss = 0.5

/**O salário fixo mais o auxílio creche */
salario = 2.000,00 
salario = salario + 45.50
console.log("Agora tenho:" + salario)

/**Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2) */
let Janeiro =  5784.50
let comissao = Janeiro * 0.2
console.log(comissao)

/**Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.) */
//let inss = salario + 0.10 
//INSS
const mesUm = (((janeiro * comissao) + salario) * inss).toFixed(2) 
const mesDois = (((fevereiro * comissao) + salario) * inss).toFixed(2)
const mesTres = (((marco * comissao) + salario) * inss).toFixed(2)
const mesQuatro = (((abril * comissao) + salario) * inss).toFixed(2)
const mesCinco = (((maio * comissao) + salario) * inss).toFixed(2)
const mesSeis = (((marco * comissao) + salario) * inss).toFixed(2)
/**mes >> um dois três quatro cinco seis sete  */

console.log(mesUm);
console.log(mesDois);
console.log(mesTres);
console.log(mesQuatro);
console.log(mesCinco);
console.log(mesSeis);


/**Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos. */

  mesUm = (((janeiro * comissao) + salario) - inss) + comissao
  mesDois = (((fevereiro * comissao) + salario) - inss) + comissao
  mesTres = (((marco * comissao) + salario) - inss) + comissao
  mesQuatro = (((abril * comissao) + salario) - inss) + comissao
  mesCinco = (((maio * comissao) + salario) - inss) + comissao
  mesSeis = (((marco * comissao) + salario) - inss) + comissao

  console.log(mesUm);
  console.log(mesDois);
  console.log(mesTres);
  console.log(mesQuatro);
  console.log(mesCinco);
  console.log(mesSeis);


/**A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */

const mediaDoSalario = ((uno + dos + tres + cuatro + cinco + seis)/6).toFixed(2)
console.log(mediaDoSalario);