const operacao1 = 5 > 20 && 5< 2
console.log("5 > 20 && 5< 2 é:",operacao1)
const operacao2= 5 === 5 || 5 === "5"
console.log("5 === 5 || 5 === '5' é:",operacao2)
const operacao3 = ! ("vinte" > "cinquenta")
console.log("'vinte' > 'cinquenta' é:", operacao3)
const operacao4 = ! ("vinte" > "cinquenta "||"cinquenta">"sessenta")
console.log("'vinte' > 'cinquenta '||'cinquenta'>'sessenta'é:",operacao4)



//parte 2


/* const nomeCompleto = "Digite seu nome completo"
const dataDeNasc = "Digite sua data de nascimento exemplo dd/mm/AAAA"
const emderecoFunc = "Digite seu endereço"
const cpfFunc = "Digite seu CPF"
const escolaridadeFunc = "Digite sua escolaridade "
const temCnh = "Possui CNH?"
const filhos = "Quantos filhos você tem?"
const cargoAtual = "Qual seu Cargo atual?"
const salario = "Qual seu salário atual?"
const comissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com 0"
const anoAdmissao = "Informe o ano de admissão"


let nomeR = prompt(nomeCompleto)
let dataR = prompt(dataDeNasc)
let enderecoR = prompt(emderecoFunc)
let cpfR = Number(prompt(cpfFunc))
let escolaridadeR = prompt(escolaridadeFunc)
let cnhR = prompt(temCnh)
let filhoR = Number(prompt(filhos))
let cargoR = prompt(cargoAtual)
let salarioR = Number(prompt(salario))
let comissaoR = Number(prompt(comissao,))
let admissaoR = Number(prompt(anoAdmissao))

console.log ("Funcionario se chama:",nomeR)
console.log ("Sua data de nascimento é:",dataR)
console.log ("Seu endereço é:",enderecoR)
console.log ("CPF:",cpfR)
console.log ("Nível de escolarizaçõa:",escolaridadeR)
console.log ("CNH:",cnhR)
console.log ("Quantidade de filhos:",filhoR)
console.log ("Cargo atual:",cargoR)
console.log ("Salário: R$",salarioR)
console.log ("Comissão:",comissaoR,"%")
console.log ("Data de admissão:",admissaoR) */

//a auxílio por filho 45,5

let filho1 = 2
const auxilioFilho = 45.5
let valorFilhos = filho1*auxilioFilho
const salFixo = 2000
const comissaoMes = 0.1
const inss = 0.95
const jan = 5784.5
const feve = 3418.41
const mar = 4124.1
const abr = 1874
const mai = 7000
const jun = 9450

let saljan = ((comissaoMes*jan) + salFixo)*inss+ valorFilhos
console.log("O salário de Janeiro é de R$",saljan)

let salfev = ((comissaoMes*feve) + salFixo)*inss+valorFilhos
console.log("O salário de Fevereiro é de R$",salfev)

let salmar = ((comissaoMes*mar) + salFixo)*inss+ valorFilhos
console.log("O salário de Março é de R$",salmar)

let salabr = ((comissaoMes*abr) +salFixo)*inss+valorFilhos
console.log("O salário de Abril é de R$",salabr)

let salmai = ((comissaoMes*mai) +salFixo)*inss+ valorFilhos
console.log("O salário de Janeiro é de R$",salmai)

let saljun = ((comissaoMes*jun)+salFixo)*inss+ valorFilhos
console.log("O salário de Janeiro é de R$",saljun)

let mediaSal = (saljan+salfev+salmar+salabr+salmai+saljun)/6

console.log ("A média salarial do semestre é de R$",mediaSal)

