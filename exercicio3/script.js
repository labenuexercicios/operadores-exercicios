// ### Parte 1
let comparandoA = 5 > 20 && 5 < 2;
console.log("A afirmação é:", comparandoA); // false, pois ambas afirmações estão incorretas
let comparandoB = 5 == 5 || 5 == "5";
console.log("A afirmação é:", comparandoB); // true, pois uma das afirmações está correta
let comparandoC = !(20 > 50);
console.log("A afirmação é:", comparandoC); // true, pois está negando que os pares de valores relacionados no qual os os dois primeiros são menores são maiores
let comparandoD = !(20 > 50 || 50 > 60);
console.log("A afirmação é:", comparandoD); // true, pois há a negação de que ambas as afirmações que estão incoretas sejam corretas



// ### Parte 2
console.log()
const salarioFixo = 2000
const auxCreche = 45.50 * 2 // multiplica por dois porque o funcionário tem dois filhos
const janeiro = 5_784.50
const fevereiro = 3_418.41
const marco = 4_124.10
const abril = 1_874
const maio = 7_000
const junho = 9_450





//  Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

console.log("total de vendas em janeiro:", janeiro)
console.log("total de vendas em fevereiro:", fevereiro)
console.log("total de vendas em março:", marco)
console.log("total de vendas em abril:", abril)
console.log("total de vendas em maio", maio)
console.log("total de vendas em junho:", junho)

// após o atributos às variáveis, calcular o salario fixo mais aux creche
let soma1 = salarioFixo + auxCreche // vai calcular o salário mais auxilio creche

console.log("Salário fixo + auxílio creche = ", soma1, "reais")

//calcular comissão de janeiro

let comissaoJan = janeiro * 0.1 //corresponde à comissão de janeiro
console.log("comissão de janeiro = ", comissaoJan.toFixed(2))
let salarioTotalJan = salarioFixo + comissaoJan + auxCreche
console.log(salarioTotalJan)
let descontoInessJan = salarioTotalJan * 0.05
console.log("desconto do inss é = ", descontoInessJan.toFixed(2))
let somaJan = salarioTotalJan - descontoInessJan

let comissaoFev = fevereiro * 0.1
let salariofev = salarioFixo + comissaoFev + auxCreche
let descontoFev = salariofev * 0.05
let comissaoMar = marco * 0.1
let salarioMar = salarioFixo + comissaoMar + auxCreche
let descontoMar = salarioMar * 0.05
let comissaoAbril = abril * 0.1
let salarioAbril = salarioFixo + comissaoAbril + auxCreche
let descontoabril = salarioAbril * 0.05
let comissaoMai = maio * 0.1
let salarioMai = salarioFixo + comissaoMai + auxCreche
let descontoMai = salarioMai * 0.05
let comissaojun = junho * 0.1
let salarioJun = salarioFixo + comissaojun + auxCreche
let descontoJun = salarioJun * 0.05

let somaFev = comissaoFev + salariofev - descontoFev
let somaMar = comissaoMar + salarioMar - descontoMar
let somaAb = comissaoAbril + salarioAbril - descontoabril
let somaMai = comissaoMai + salarioMai - descontoMai
let somaJun = comissaojun + salarioJun - descontoJun
let somaTotal = somaJan+somaFev+somaMar+somaAb+somaMai+somaJun
console.log("soma total = ", somaTotal);

console.log("media salario = ", somaTotal / 6)




