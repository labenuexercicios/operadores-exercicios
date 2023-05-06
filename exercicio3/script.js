// PARTE 01 
let num1 = 5 > 20 &&5 < 2
let num2 = 5 == 5 || 5=== "5"
let num3 = ! (20 > 50)
let num4 = ! (20 > 50 || 50 > 60)
//console.log(num1);
//console.log(num2);
//console.log(num3);
//console.log(num4)

// PARTE 02

let salarioFixo = 2000 + 45.50*2
console.log("Salario mais Creche R$", salarioFixo);
let comissaoJan = 5780.50 * 0.10
let comissaoFev = 3418.41 * 0.10
let comissaoMarc = 4124.10 * 0.10
let comissaoAbr = 1874 * 0.10
let comissaoMai = 7000 * 0.10
let comissaoJun = 9450 * 0.10
let janeiro = salarioFixo + comissaoJan 
let descontoInssJan = (janeiro * 0.05)
console.log("Salario + Comissão com desconto INSS de Janeiro R$", janeiro-descontoInssJan)
let fereveiro = salarioFixo + comissaoFev
let descontoInssFev = (fereveiro * 0.05)
console.log("Salario + Comissão com desconto INSS de Fevereiro R$",fereveiro-descontoInssFev)
let marco = salarioFixo + comissaoMarc
let descontoInssMar = (marco * 0.05)
console.log("Salario + Comissão com desconto INSS de Março R$",marco-descontoInssMar)
let abril = salarioFixo + comissaoAbr
let descontoInssAbr = (abril * 0.05)
console.log("Salario + Comissão com desconto INSS de Abril R$",abril-descontoInssAbr)
let maio = salarioFixo + comissaoMai
let descontoInssMai = (maio * 0.05)
console.log("Salario + Comissão com desconto INSS de Maio R$",maio-descontoInssMai)
let junho = salarioFixo + comissaoJun
let descontoInssJun = (junho * 0.05)
console.log("Salario + Comissão com desconto INSS de Junho R$",junho-descontoInssJun)


let mediaSalarial = (janeiro+fereveiro+marco+abril+maio+junho) / 6
console.log("Média Salarial referente aos ultimos 6 meses R$", mediaSalarial)

