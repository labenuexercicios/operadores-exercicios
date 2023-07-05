//1-O salário fixo mais o auxílio creche

let salario = 2000
let auxCreche = 45.50
let salarioFixo = auxCreche + auxCreche + salario
console.log(`O salário fixo mais o auxílio creche R$${salarioFixo},00 reais`)

//2-Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

let valorComissaoJaneiro = 5784.50
let calculcPorcentage = 10
let resultComissao = valorComissaoJaneiro * (calculcPorcentage/100);
console.log(`Receberá de comissão em janeiro R$${resultComissao},00 reais`)

//3-Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

let calcSalarioTotal = salario + resultComissao
let descontoInss = 5
let salarioJaneiro = calcSalarioTotal * (descontoInss/100);
console.log(`Será descontado em janeiro pelo INSS, R$${salarioJaneiro.toFixed(2)} reais`)

//4-Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
//janeiro
let salarioTotalGanhoJaneiro = salario + auxCreche + auxCreche + resultComissao
console.log(`O salario bruto total no mês de janeiro é R$${salarioTotalGanhoJaneiro.toFixed(2)} reais`)
let salarioDescontoJaneiro = salarioTotalGanhoJaneiro - salarioJaneiro
console.log(`O salario liquido total no mês de janeiro é R$${salarioDescontoJaneiro.toFixed(2)} reais`)
//fevereiro
let comissaoFevereiro = 3418.41
let resultComissaoFevereiro = comissaoFevereiro * (calculcPorcentage/100)
let salarioTotalFevereiro = salario + auxCreche + auxCreche + resultComissaoFevereiro
console.log(`O salario bruto total no mês de fevereiro é R$${salarioTotalFevereiro.toFixed(2)} reais`)
let totalInss = salarioTotalFevereiro * (descontoInss/100)
let salarioDescontoFevereiro = salarioTotalFevereiro - totalInss
console.log(`O salario liquido total no mês de fevereiro é R$${salarioDescontoFevereiro.toFixed(2)} reais`)
//março
let comissaoMarco = 4124.10
let resultComissaoMarco = comissaoMarco * (calculcPorcentage/100)
let salarioTotalMarco = salario + auxCreche + auxCreche + resultComissaoMarco
console.log(`O salario bruto total no mês de março é R$${salarioTotalMarco.toFixed(2)} reais`)
let totalInssMarco = salarioTotalMarco * (descontoInss/100)
let salarioDescontoMarco = salarioTotalMarco - totalInssMarco
console.log(`O salario liquido total no mês de março é R$${salarioDescontoMarco.toFixed(2)} reais`)
//abril
let comissaoAbril = 1874.00
let resultComissaoAbril = comissaoAbril * (calculcPorcentage/100)
let salarioTotalAbril = salario + auxCreche + auxCreche + resultComissaoAbril
console.log(`O salario bruto total no mês de abril é R$${salarioTotalAbril.toFixed(2)} reais`)
let totalInssAbril = salarioTotalAbril * (descontoInss/100)
let salarioDescontoAbril = salarioTotalAbril - totalInssAbril
console.log(`O salario liquido total no mês de abril é R$${salarioDescontoAbril.toFixed(2)} reais`)
//maio
let comissaoMaio = 7000.00
let resultComissaoMaio = comissaoMaio * (calculcPorcentage/100)
let salarioTotalMaio = salario + auxCreche + auxCreche + resultComissaoMaio
console.log(`O salario bruto total no mês de maio é R$${salarioTotalMaio.toFixed(2)} reais`)
let totalInssMaio = salarioTotalMaio * (descontoInss/100)
let salarioDescontoMaio = salarioTotalMaio - totalInssMaio
console.log(`O salario liquido total no mês de maio é R$${salarioDescontoMaio.toFixed(2)} reais`)
//junho
let comissaoJunho = 9450.00
let resultComissaoJunho = comissaoJunho * (calculcPorcentage/100)
let salarioTotalJunho = salario + auxCreche + auxCreche + resultComissaoJunho
console.log(`O salario bruto total no mês de junho é R$${salarioTotalJunho.toFixed(2)} reais`)
let totalInssJunho = salarioTotalJunho * (descontoInss/100)
let salarioDescontoJunho = salarioTotalJunho - totalInssJunho
console.log(`O salario liquido total no mês de junho é R$${salarioDescontoJunho.toFixed(2)} reais`)

let calcularTotal = salarioTotalGanhoJaneiro + salarioTotalFevereiro +salarioTotalMarco + salarioTotalAbril + salarioTotalMaio + salarioDescontoJunho 
console.log(`A média do salário considerando as comissões e auxílio em  seis meses é R$${calcularTotal.toFixed(2)} reais`)

let calcularComDesconto = salarioDescontoJaneiro + salarioDescontoFevereiro + salarioDescontoMarco + salarioDescontoAbril + salarioDescontoMaio + salarioDescontoJunho
console.log(`A média do salário liquido em  seis meses é R$${calcularComDesconto.toFixed(2)} reais`)

let mediaBruta = calcularTotal / 6
console.log(`A média bruta dividida em 6 meses é R$${mediaBruta.toFixed(2)} reais`)

let mediaLiquida = calcularComDesconto / 6
console.log(`A media liquida divida em 6 meses é R$${mediaLiquida.toFixed(2)} reais`)



