/*a) 5 é maior que 20 e também é menor que 2;
const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)

//b) 5 é igual a 5 ou é igual a “5”;
const operacao2 = 5 === 5 || 5 ==="5";
console.log(operacao2); 

//c) negação de (vinte é maior que cinquenta)
const operacao3 = !(20 > 50);
console.log('Vinte não é maior que cinquenta', operacao3);

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacao4 = !(20>50|| 50>60 );
console.log('Vinte é menor que cinquenta OU cinquenta é menor que sessenta', operacao4)

*/
// Parte 2
//1) O salário fixo mais o auxílio creche

const salFixo = 2000
const auxCreche = 45.50 * 2
const salBeneficio = (salFixo + auxCreche)
console.log ('O valor do salário + auxílio creche é de :',salBeneficio)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro 

const comissaoJan = 5784.50 * 0.1 
console.log('A comisssão de Janeiro foi de :',comissaoJan)
const salarioBrutoJaneiro = salBeneficio + comissaoJan
const descInssJaneiro = salarioBrutoJaneiro * 0.05
const salJaneiro = salarioBrutoJaneiro - descInssJaneiro
console.log('O salário de Janeiro  foi de :',salJaneiro)


// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
//(o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

const descInssJan = (salFixo + comissaoJan) * 0.05 
console.log('O desconto do INSS foi de : ',descInssJan)


//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const comissaoFev =3418.41 * 0.1 
const salarioBrutoFevereiro = salBeneficio + comissaoFev
const descInssFev = salarioBrutoFevereiro * 0.05
const salFevereiro = salarioBrutoFevereiro - descInssFev
console.log('O salário de Fevereiro  foi de :',salFevereiro)



const comissaoMar = 4124.10 * 0.1 
const salarioBrutoMarco = salBeneficio + comissaoMar
const descInssMar = salarioBrutoMarco* 0.05
const salMarco = salarioBrutoMarco - descInssMar
console.log('O salário de Março  foi de :',salMarco)



const comissaoAbri = 1874.00 * 0.1 
const salarioBrutoAbril = salBeneficio + comissaoAbri
const descInssAbri = salarioBrutoAbril* 0.05
const salAbril = salarioBrutoAbril - descInssAbri
console.log('O salário de Abril  foi de :',salAbril)


const comissaoMai = 7000.00 * 0.1 
const salarioBrutoMaio = salBeneficio + comissaoMai
const descInssMai = salarioBrutoMaio* 0.05
const salMaio = salarioBrutoMaio - descInssMai
console.log('O salário de Maio  foi de :',salMaio)


const comissaoJun = 9450.00 * 0.1 
const salarioBrutoJunho = salBeneficio + comissaoJun
const descInssJun = salarioBrutoJunho* 0.05
const salJunho = salarioBrutoJunho- descInssJun
console.log('O salário de Junho foi de :',salJunho)

// 5 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
 // (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados.
 // Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

 const mediaSalarial = (salJaneiro + salFevereiro + salMarco + salAbril + salMaio + salJunho) / 6
const mediaSalarialFixed = mediaSalarial.toFixed(2)

console.log(`A média salarial de Joãozinho da Silva de Janeiro a Junho é: ${mediaSalarialFixed}`)




