//PARTE 1

const operacao1 = 5 > 20 && 5 < 2
console.log("a)5 > 20 && 5 < 2", operacao1); 

 const operacao2 = 5 == 5 || 5 == "5"
console.log("b)5 == 5 || 5 == '5'", operacao2)

 const operacao3 = 20 > 50
console.log("c)20 > 50", operacao3) 

const operacao4 = 20 > 50 || 50 > 60
console.log("d)20 > 50 || 50 > 60", operacao4) 

// PARTE 2

const auxCreche = 45.50 
const salarioFixo = 2000
let resultado  
const comissaoJaneiro = 5784.50 * 0.1
const comissaoFevereiro = 3418.41 * 0.1
const comissaoMarco = 4124.10 * 0.1
const comissaoAbril = 1874.00 * 0.1
const comissaoMaio = 7000.00 * 0.1
const comissaoJunho = 9450.50 * 0.1


//1) O salário fixo mais o auxílio creche
resultado = salarioFixo + 2 * auxCreche
console.log("salario fixo + auxilio =", resultado)

//2) quanto comissao em janeiro
console.log("quanto a comissao de janeiro?", comissaoJaneiro)

//3) valor desconto inss janeiro salario fixo + comissao
resultado = (salarioFixo + comissaoJaneiro) * 0.05
console.log("valor desconto inss janeiro?", resultado)

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

// Janeiro
let salarioLiquidoJan
let SalarioBrutoJan
SalarioBrutoJan = (salarioFixo + comissaoJaneiro)
const SalarioDescJan = SalarioBrutoJan - (SalarioBrutoJan * 0.05)
salarioLiquidoJan = SalarioDescJan + 2 * auxCreche
console.log("salario liquido Janeiro:", salarioLiquidoJan)


// Fevereiro
let salarioLiquidoFev
let SalarioBrutoFev
SalarioBrutoFev = ( salarioFixo + comissaoFevereiro)
const salarioDescFev = SalarioBrutoFev - (SalarioBrutoFev * 0.05)
salarioLiquidoFev = salarioDescFev + 2 * auxCreche
console.log("salario liquido Feveireiro:", salarioLiquidoFev)

//Março
let salarioLiquidoMar
let SalarioBrutoMar
SalarioBrutoMar = ( salarioFixo + comissaoMarco)
const salarioDescMar = SalarioBrutoMar - (SalarioBrutoMar * 0.05)
salarioLiquidoMar = salarioDescMar + 2 * auxCreche
console.log("salario liquido Março:", salarioLiquidoMar)

//Abril
let salarioLiquidoAbr
let SalarioBrutoAbr
SalarioBrutoAbr = ( salarioFixo + comissaoAbril)
const salarioDescAbr = SalarioBrutoAbr - (SalarioBrutoAbr * 0.05)
salarioLiquidoAbr = salarioDescAbr + 2 * auxCreche
console.log("salario liquido Abril:", salarioLiquidoAbr)

//Maio
let salarioLiquidoMai
let SalarioBrutoMai
SalarioBrutoMai = ( salarioFixo + comissaoMaio)
const salarioDescMai = SalarioBrutoMai - (SalarioBrutoMai * 0.05)
salarioLiquidoMai = salarioDescMai + 2 * auxCreche
console.log("salario liquido Maio:", salarioLiquidoMai)

//Junho
let salarioLiquidoJun
let SalarioBrutoJun
SalarioBrutoJun = ( salarioFixo + comissaoJunho)
const salarioDescJun = SalarioBrutoJun - (SalarioBrutoJun * 0.05)
salarioLiquidoJun = salarioDescJun + 2 * auxCreche
console.log("salario liquido Junho:", salarioLiquidoJun)

//5) Media salarial de Janeiro a Junho
const somaSalarial = salarioLiquidoJan + salarioLiquidoFev + salarioLiquidoMar + salarioLiquidoAbr + salarioLiquidoMai + salarioLiquidoJun
const mediaSalarial = somaSalarial / 6
console.log("media salarial Janeiro a Junho:", mediaSalarial)