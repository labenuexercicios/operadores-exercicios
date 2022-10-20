// parte 1

const primeiraOperacao = 5 > 20 && 5 < 2;
const segundaOperacao = 5 === 5 || 5 === "5"; // esse || entra no parentese??
const negacao = !(20 > 50);
const segundaNegacao = !(20 > 50 || 50 > 60);


// parte 2

/* total de vendas meses:
    - Janeiro: R$ 5.784,50 recebe 10% desse valor + salario inicial
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00 */

let salarioInicial = 2000.00
let auxilio = 45.50
let porcentagemInss = 0.05
let vendasJaneiro = 5784.50
let vendasFev = 3418.41
let vendasMar = 4124.10
let vendasAbr = 1874.00
let vendasMaio = 7000.00
let vendasJun = 9450.00 

// salario fixo mais auxilio creche de 45.50

let salarioComAuxilio = salarioInicial + (auxilio * 2);
console.log(salarioComAuxilio)

// comissao de venda mensal 10%

let comissaoJaneiro = vendasJaneiro * 0.10
console.log(comissaoJaneiro)


// Desconto do INSS 5% do salário - referente mes de janeiro
let salarioJaneiro = salarioInicial + comissaoJaneiro

let desconto = salarioJaneiro * porcentagemInss 
console.log(desconto)

// calculo de comissoes 

let comissaoFev = vendasFev * 0.10
let comissaoMar = vendasMar * 0.10
let comissaoAbr = vendasAbr * 0.10
let comissaoMaio = vendasMaio * 0.10
let comissaoJun = vendasJun * 0.10 

// calculo salario + comissoes
let salarioJan = (salarioComAuxilio + comissaoJaneiro) - (salarioInicial + comissaoJaneiro) * porcentagemInss
let salarioFev = (salarioComAuxilio + comissaoFev) - (salarioInicial + comissaoFev) * porcentagemInss
let salarioMar = (salarioComAuxilio + comissaoMar) - (salarioInicial + comissaoMar) * porcentagemInss
let salarioAbr = (salarioComAuxilio + comissaoAbr) - (salarioInicial + comissaoAbr) * porcentagemInss
let salarioMaio = (salarioComAuxilio + comissaoMaio) - (salarioInicial + comissaoMaio) * porcentagemInss
let salarioJun = (salarioComAuxilio + comissaoJun) - (salarioInicial + comissaoJun) * porcentagemInss



// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

console.log(salarioJan)
console.log(salarioFev)
console.log(salarioMar)
console.log(salarioAbr)
console.log(salarioMaio)
console.log(salarioJun)




