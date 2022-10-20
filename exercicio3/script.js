const operacao1 = 5 > 20 && 5< 2
console.log("5 > 20 && 5< 2 é:",operacao1)
const operacao2= 5 === 5 || 5 === "5"
console.log("5 === 5 || 5 === '5' é:",operacao2)
const operacao3 = ! ("vinte" > "cinquenta")
console.log("'vinte' > 'cinquenta' é:", operacao3)
const operacao4 = ! ("vinte" > "cinquenta "||"cinquenta">"sessenta")
console.log("'vinte' > 'cinquenta '||'cinquenta'>'sessenta'é:",operacao4)



//parte 2

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

