//cadastro de pessoa em um programa de RH

let nome = prompt("Informe seu nome completo:")
console.log(typeof nome)

let cpf = Number (prompt ("Informe seu CPF:"))

let nascimento = (prompt ("Informe sua data de nascimento (dd/mm/aaaa):"))
console.log(typeof nascimento)

let endereco = prompt ("Informe seu endereço:")
console.log(typeof endereco)

let escolaridade = prompt ("Qual a sua escolaridade?")
console.log(typeof escolaridade)

let cnh = prompt ("Possui CNH?")
console.log(typeof cnh)

let filhos = Number(prompt("Quantos filhos você possui?"))
console.log(typeof filhos)

let cargo = prompt ("Qual seu cargo atual?")
console.log(typeof cargo)

let salarioBase = Number(prompt("Qual seu salário atual?"))
console.log(typeof salarioBase)

let percentComissao = parseFloat(prompt("Você recebe comissão? Se sim," +
    "informe porcentagem, caso não, responda com 0:").replace (",","."));
console.log(typeof percentComissao)

let admissao = prompt ("Informe seu ano de admissão")
console.log(typeof admissao)

console.log(`O funcionário ${nome}, com CPF: ${cpf}, nasceu em ${nascimento}, 
reside em: ${endereco} e possui ${filhos} filhos. Possui habilitação? ${cnh}. Ocupa o cargo
de ${cargo}, recebe um salário de ${salarioBase} reais, mais comissão de ${percentComissao}% sobre o total 
de vendas no mês e entrou na empresa em ${admissao}.`)


//Parte2
// valores base para os cálculos
const auxilioCreche = 45
const descontoInss = 0.05
percentComissao = percentComissao/100
//aqui necessita de tratamenots pra transformar porcentagem em decimal e
//e está hardcodado, sendo que na parte anterior pede pra inserir o valor.

//pergunta 1: O salário fixo mais o auxílio creche
let salarioCreche = salarioBase + auxilioCreche * filhos
console.log("O salário fixo mais o auxilio-creche é:", salarioCreche)

//Calculo vendas e comissões
const vendasJan = 5784.5
const vendasFev = 3418.41
const vendasMar = 4124.1
const vendasAbr = 1874
const vendasMai = 7000
const vendasJun = 9945

//pergunta 2: Quanto a pessoa receberá de comissão em janeiro 
const comissaoJan = vendasJan * percentComissao
const comissaoFev = vendasFev * percentComissao
const comissaoMar = vendasMar * percentComissao
const comissaoAbr = vendasAbr * percentComissao
const comissaoMai = vendasMai * percentComissao
const comissaoJun = vendasJun * percentComissao
console.log(nome, "receberá de comissão em janeiro:", comissaoJan.toFixed(2))

// ou: console.log ("Comissão de Janeiro", comissaoJan,"Comissão de Fevereiro", comissaoFev, "Comissão de Março",comissaoMar,"Comissão de Abril",comissaoAbr,"Comissão de Maio", comissaoMai,"Comissão de junho",comissaoJun)

// Pergunta 3: Quanto a pessoa será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
const descontoJan = (salarioBase + comissaoJan) * descontoInss
console.log("O valor descontado do salário(salário + comissão) em janeiro  foi:", descontoJan.toFixed(2))

//pergunta 4: Imprima no console o salário de todos os meses com acrescimos e descontos
const salarioLiquidoJan = Number(((salarioCreche + comissaoJan) * (1 - descontoInss)).toFixed(2))
const salarioLiquidoFev = Number(((salarioCreche + comissaoFev) * (1 - descontoInss)).toFixed(2))
const salarioLiquidoMar = Number(((salarioCreche + comissaoMar) * (1 - descontoInss)).toFixed(2))
const salarioLiquidoAbr = Number(((salarioCreche + comissaoAbr) * (1 - descontoInss)).toFixed(2))
const salarioLiquidoMai = Number(((salarioCreche + comissaoMai) * (1 - descontoInss)).toFixed(2))
const salarioLiquidoJun = Number(((salarioCreche + comissaoJun) * (1 - descontoInss)).toFixed(2))

console.log(`Os salários a cada mês são:
Janeiro: ${salarioLiquidoJan}
Fevereiro: ${salarioLiquidoFev}
Março: ${salarioLiquidoMar}
Abril: ${salarioLiquidoAbr}
Maio: ${salarioLiquidoMai}
Junho: ${salarioLiquidoJun}`)

// Pergunta 5: Média salárial semestral.
const mediaSalario = (salarioLiquidoJan + salarioLiquidoFev + salarioLiquidoMar + salarioLiquidoAbr + salarioLiquidoMai + salarioLiquidoJun)/ 6
console.log("Media de salário liquido semestral:", mediaSalario.toFixed(2))


