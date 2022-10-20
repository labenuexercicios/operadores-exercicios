let maior = 5 > 20 && 5 < 2
let igual = 5 === 5 || 5 === "5"
let neg = !(20 > 50)
let neg2 = !(20 > 50 || 50 > 60)

console.log(maior)
console.log(igual)
console.log(neg)
console.log(neg2)


//Parte 2

//Elementos
const comissao = 10
const desconto = 0.05
let salario = 2000
let filhos = 2
let auxilio = 45.50
let auxilioSoma = auxilio * filhos
let valorAuxilio = auxilioSoma
let salarioTotal = salario + auxilioSoma

//Comissões
const janeiro = 5784.50
const comissaoj = janeiro / comissao
console.log("comissão janeiro", comissaoj)

const fevereiro = 3418.41
const comissaoF = fevereiro / comissao
console.log("comissão fevereiro", comissaoF)

const marco = 4124.10
const comissaoM = marco / comissao
console.log("comissao março", comissaoM)

const abril = 1874.00
const comissaoA = abril / comissao
console.log("comissão abril", comissaoA)

const maio = 7000.00
const comissaoMa = maio / comissao
console.log("comissão maio", comissaoMa)

const junho = 9450.00
const comissaoJu = junho / comissao
console.log("comissão junho", comissaoJu)

//Salários
const janeiro1 = salarioTotal + comissaoj
const janeiro2 = janeiro1 * desconto
const janeiroTotal = janeiro1 - janeiro2
console.log("salario janeiro", janeiroTotal)

const fevereiro1 = salarioTotal + comissaoF
const fevereiro2 = fevereiro1 * desconto
const fevereiroTotal = fevereiro1 - fevereiro2
console.log("salário fevereiro", fevereiroTotal)

const marco1 = salarioTotal + comissaoM
const marco2 = marco1 * desconto
const marcoTotal = marco1 - marco2
console.log("salário março", marcoTotal)

const abril1 = salarioTotal + comissaoA
const abril2 = abril1 * desconto
const abrilTotal = abril1 - abril2
console.log("salário abril", abrilTotal)

const maio1 = salarioTotal + comissaoMa
const maio2 = maio1 * desconto
const maioTotal = maio1 - maio2
console.log("salário maio", maioTotal)

const junho1 = salarioTotal + comissaoJu
const junho2 = junho1 * desconto
const junhoTotal = junho1 - junho2
console.log("salário junho", junhoTotal)

//Média
let media = (janeiroTotal + fevereiroTotal + marcoTotal + abrilTotal + maioTotal + junhoTotal) / 6
console.log("média", media)