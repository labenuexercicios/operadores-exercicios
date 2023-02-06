    //Parte 1

const opA = 5 > 20 && 5 < 2
const opB = 5 === 5 || 5 === '5'
const opC = !(20 > 50) 
const opD = !(20 > 50 || 50 > 60)

console.log(opA)
console.log(opB)
console.log(opC)
console.log(opD)

     //Parte 2

const salarioFixo = 2000
const auxilioCreche = 45.50 * 2
const salarioAuxilio = salarioFixo + auxilioCreche

// Comissões
const comissaoJaneiro = 5784.50 * 10 / 100
const comissaoFevereiro = 3418.41 * 10 / 100
const comissaoMarco = 4124.10 * 10 / 100
const comissaoAbril = 1874 * 10 / 100
const comissaoMaio = 1874 * 10 / 100
const comissaoJunho = 9450 * 10 / 100

// Descontos
const descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * 5 / 100
const descontoInssFevereiro = (salarioFixo + comissaoFevereiro) * 5 / 100
const descontoInssMarco = (salarioFixo + comissaoMarco) * 5 / 100
const descontoInssAbril = (salarioFixo + comissaoAbril) * 5 / 100
const descontoInssMaio = (salarioFixo + comissaoMaio) * 5 / 100
const descontoInssJunho = (salarioFixo + comissaoJunho) * 5 / 100

// Salário Liquido
salarioLiquidoJaneiro = (salarioAuxilio + comissaoJaneiro) - descontoInssJaneiro 
salarioLiquidoFevereiro = (salarioAuxilio + comissaoFevereiro) - descontoInssFevereiro
salarioLiquidoMarco = (salarioAuxilio + comissaoMarco) - descontoInssMarco
salarioLiquidoAbril = (salarioAuxilio + comissaoAbril) - descontoInssAbril
salarioLiquidoMaio = (salarioAuxilio + comissaoMaio) - descontoInssMaio
salarioLiquidoJunho = (salarioAuxilio + comissaoJunho) - descontoInssJunho

// Média
mediaSalarial = (salarioLiquidoJaneiro + salarioLiquidoFevereiro + salarioLiquidoMarco + 
 salarioLiquidoAbril + salarioLiquidoMaio + salarioLiquidoJunho) / 6

console.log(`A média salarial liquido de janeiro à junho, é: ${mediaSalarial.toFixed(2)}`) 





















