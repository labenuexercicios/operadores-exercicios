/*console.log("oi")
console.log("teste")

let quantoTenho = 15
console.log("Valor inicial,", quantoTenho)
quantoTenho = quantoTenho + 22.40
console.log("soma valor", quantoTenho)
quantoTenho = quantoTenho - 12.34
console.log("subtração valor:", quantoTenho)
quantoTenho = quantoTenho / 3
console.log("divisao valor:", quantoTenho)
quantoTenho = quantoTenho * 3.42
console.log("multiply valor:", quantoTenho)
let resto = quantoTenho % 3
console.log("resto:", resto)
quantoTenho = (quantoTenho - resto) / 3

console.log("valor final:", quantoTenho)*/

// exercicio 2

const igualdade = 5 ===5
const diferenca = 5 !==5
const diferenca2 = 5 !=="5"
const igualdade2 = "5" === "cinco"
const tipo1 = typeof 5 === typeof 20
const tipo2 = typeof "5" === typeof "cinco"

console.log(`
    igualdade 1: ${igualdade}
    difenteca 1: ${diferenca}
    diferenca2 : ${diferenca2}
    igualdade2 : ${igualdade2}
    tipo1: ${tipo1}
    tipo2: ${tipo2}
`)
//retornou true, false, true, false, true, true

const num1 = 5
const num2 = 8

console.log(num1 === num2)
console.log(num1 <= num2)
console.log(num1 > num2)
console.log(num1 <num2)
// retornou false, true , false, true

// exercicio 4

const suaIdade = pront("qual a dua idade")
const idadeBff = pront("qual a idade do seu melhor amigo?")
console.log(`A usa idade é maior que a do seu melhor amigo? ${suaIdade > idadeBff}
A diferença de idade é ${suaIdade - idadeBff}
`)

