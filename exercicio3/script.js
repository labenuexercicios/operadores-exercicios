//EXERCÍCIO 3

//PARTE 1

let valorA = 5 > 20 && 5 < 2
console.log("Valor A é: ", valorA);

let valorB = 5 === 5 || 5 === "5"
console.log("Valor B é: ", valorB);

let valorC = !(20 > 50);
console.log("Valor C é: ", valorC);

let valorD = !(20 > 50 || 50 > 60);
console.log("Valor D é: ", valorD);

//PARTE 2

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00,
 Nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. 
 Possui habilitação? Sim. Ocupa o cargo de vendedor.
 Recebe um salário de 2.000,00 reais, 
 Mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.*/

let nomeCompleto = prompt("Nome Completo do Funcionário:");
console.log("Nome Completo do Funcionário:" + nomeCompleto);

let dataNascimento = prompt("Data de Nascimento do Funcionário:");
console.log("Data de Nascimento do Funcionário:" + dataNascimento);

let endereco = prompt("Qual é o endereço do Funcionário:");
console.log("Endereço do Funcionário:" + endereco);

let cpf = Number(prompt("Qual é o CPF do Funcionário:"))
console.log("CPF do Funcionário:" + cpf)

let escolaridade = prompt("Qual é a escolaridade do Funcionário:")
console.log("Escolaridade do Funcionário:" + escolaridade)

let cnh = prompt("O Funcionário possui CNH?")
console.log("O Funcionário possui CNH?" + cnh)

let filhos = Number(prompt("O Funcionário tem filhos? se sim, quantos? se não, digite 0."))
console.log("Quantidade de filhos do Funcionário:" + filhos)

let cargoAtual = prompt("Qual é o cargo atual do Funcionário:")
console.log("Cargo atual do Funcionário:" + cargoAtual)

let salarioFixo = Number(prompt("Qual é o salário fixo do Funcionário:"))
console.log("Salário fixo do Funcionário:" + salarioFixo)

let comissao = Number(prompt("O Funcionário recebe comissão? se sim, digite a porcentagem."))
console.log("Valor da Comissão:" + comissao)

let anoAdmissao = Number(prompt("Qual o ano de admissão do Funcionário:"))
console.log("Ano de admissão do Funcionário:" + anoAdmissao)

//Calcule:
//a) o salário fixo + o auxílio creche:

let auxCreche = 45.50*filhos

let salarioComAuxCreche = salarioFixo + auxCreche
console.log("O salário do Funcionário", nomeCompleto, "com Auxilio Creche é de:", salarioComAuxCreche)

/*b) Quanto Fulano de Silva receberá de comissão em janeiro 
( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)*/

const comissaoJan = ((comissao * 5784.50) / 100)
const comissaoFev = ((comissao * 3418.41) / 100)
const comissaoMar = ((comissao * 4124.10) / 100)
const comissaoAbr = ((comissao * 1870.00) / 100)
const comissaoMai = ((comissao * 7000.00) / 100)
const comissaoJun = ((comissao * 9450.00) / 100)

console.log("A comissão que", nomeCompleto, ", receberá em Janeiro será de: R$", comissaoJan)

/* c)Quanto Fulano de Silva será descontado em janeiro pelo INSS 
( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)*/

let descInss = 0.05

let descInssJan = ((salarioFixo + comissaoJan) * descInss)
let descInssFev = ((salarioFixo + comissaoFev) * descInss)
let descInssMar = ((salarioFixo + comissaoMar) * descInss)
let descInssAbr = ((salarioFixo + comissaoAbr) * descInss)
let descInssMai = ((salarioFixo + comissaoMai) * descInss)
let descInssJun = ((salarioFixo + comissaoJun) * descInss)

console.log("O valor descontado do INSS do salário de", nomeCompleto, ", em Janeiro, será de:", descInssJan)

/* d)Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.*/

let salarioJanBruto = (salarioComAuxCreche + comissaoJan)
let salarioJanLiquido = ((salarioComAuxCreche + comissaoJan) - descInssJan)

let salarioFevBruto = (salarioComAuxCreche + comissaoFev)
let salarioFevLiquido = ((salarioComAuxCreche + comissaoFev) - descInssFev)

let salarioMarBruto = (salarioComAuxCreche + comissaoMar)
let salarioMarLiquido = ((salarioComAuxCreche + comissaoMar) - descInssMar)

let salarioAbrBruto = (salarioComAuxCreche + comissaoAbr)
let salarioAbrLiquido = ((salarioComAuxCreche + comissaoAbr) - descInssAbr)

let salarioMaiBruto = (salarioComAuxCreche + comissaoMai)
let salarioMaiLiquido = ((salarioComAuxCreche + comissaoMai) - descInssMai)

let salarioJunBruto = (salarioComAuxCreche + comissaoJun)
let salarioJunLiquido = ((salarioComAuxCreche + comissaoJun) - descInssJun)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioJanBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioJanLiquido)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioFevBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioFevLiquido)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioMarBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioMarLiquido)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioAbrBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioAbrLiquido)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioMaiBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioMaiLiquido)

console.log("O salário bruto de", nomeCompleto, ", será de:", salarioJunBruto)
console.log("O salário líquido de", nomeCompleto, ", será de:", salarioJunLiquido)

/*A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. 
Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)*/

let mediaSalarialBruta = ((salarioJanBruto + salarioFevBruto + salarioMarBruto + salarioAbrBruto + salarioMaiBruto + salarioJunBruto) / 6)
console.log("A média salarial bruta dos primeiros seis meses de", nomeCompleto, ", é de:", mediaSalarialBruta)