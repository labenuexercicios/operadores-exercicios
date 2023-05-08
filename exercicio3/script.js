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

let salarioFixo = 2000 
let creche = 45.50 *2
const salarioCrecha = salarioFixo+creche
console.log("Salario mensal R$",salarioCrecha);
let comissaoJan = 5780.50 * 0.10
let comissaoFev = 3418.41 * 0.10
let comissaoMarc = 4124.10 * 0.10
let comissaoAbr = 1874 * 0.10
let comissaoMai = 7000 * 0.10
let comissaoJun = 9450 * 0.10
console.log("Comissão de Janeiro R$", comissaoJan);
console.log("Comissão de Fevereiro R$", comissaoFev);
console.log("Comissão de Março R$", comissaoMarc);
console.log("Comissão de Abril R$", comissaoAbr);
console.log("Comissão de Maio R$", comissaoMai);
console.log("Comissão de Junho R$", comissaoJun);
console.log("Total de Comissão de Jan a Junho R$", comissaoJan+comissaoFev+comissaoMarc+comissaoAbr+comissaoMai+comissaoJun);
//JANEIRO
let janeiro = salarioFixo + comissaoJan 
let descontoInssJan = (janeiro * 0.05)
console.log ("Salário de Janeiro c/ Comissão R$ ", janeiro)
console.log ("Desconto INSS Jan! R$", descontoInssJan)
console.log("Salario com desconto INSS de Janeiro R$", janeiro-descontoInssJan)
//FEVEREIRO 
let fereveiro = salarioFixo + comissaoFev
let descontoInssFev = (fereveiro * 0.05)
console.log ("Salário de Fevereiro c/ Comissão R$ ", fereveiro)
console.log ("Desconto INSS Fev! R$", descontoInssFev)
console.log("Salario com desconto INSS de Fevereiro R$",fereveiro-descontoInssFev)
//MARÇO
let marco = salarioFixo + comissaoMarc
let descontoInssMar = (marco * 0.05)
console.log("Salario de Março c/ Comissão R$",marco)
console.log("Desconto INSS MARC! R$", descontoInssMar);
console.log("Salario com Desconto INSS de Março R$", marco-descontoInssMar)
//ABRIL
let abril = salarioFixo + comissaoAbr
let descontoInssAbr = (abril * 0.05)
console.log("Salario de Abril c/ Comissão R$",abril)
console.log("Desconto INSS Abril! R$", descontoInssAbr);
console.log("Salario com Desconto INSS de Abril R$", abril-descontoInssAbr)
//MAIO
let maio = salarioFixo + comissaoMai
let descontoInssMai = (maio * 0.05)
console.log("Salario de Maio c/ Comissão R$",maio)
console.log("Desconto INSS Maio! R$", descontoInssMai);
console.log("Salario com Desconto INSS de Maio R$", maio-descontoInssMai)
//JUNHO
let junho = salarioFixo + comissaoJun
let descontoInssJun = (junho * 0.05)
console.log("Salario de Junho c/ Comissão R$",junho)
console.log("Desconto INSS Junho! R$", descontoInssJun);
console.log("Salario com Desconto INSS de Junho R$", junho-descontoInssJun)


let mediaSalarial = (janeiro+fereveiro+marco+abril+maio+junho) / 6
console.log("Média Salarial referente aos ultimos 6 meses R$", mediaSalarial)

