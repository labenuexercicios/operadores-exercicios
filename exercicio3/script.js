//EXERCICIO 1

console.log(`5 é maior que 20 e também é menor que 2? ${5 > 20 && 5 < 2}`)

console.log(` 5 é igual a 5 ou é igual a “5” ${5 === 5 || 5 === "5"}`)

const op1 = 20 > 50
const neg1 = !op1
console.log(`A negação de vinte é maior que cinquenta? ${neg1}`)

const op2 = 20 > 50 || 50 > 60
const neg2 = !op2
console.log(`negação de vinte é maior que cinquenta OU cinquenta é maior que sessenta? ${neg2}`)

//-------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

//1)
let salario = 2000
let auxCreche = 45.50

console.log(`O Salário fixo mais o auxilio crech é: ${salario + auxCreche * 2}`)

//2)
let vendaJaneiro = 5784.50
let vendaeFevereiro = 3418.41
let vendaMarco = 4124.10
let vendaAbril = 1874.00
let vendaMaio = 7000.00
let vendaJunho = 9450


console.log(` A comissão em janeiro será no valor de ${vendaJaneiro * 0.1} R$`)

//3)

console.log(`O valor descontado em Janeiro pelo INSS é de ${((salario + (vendaJaneiro * 0.1)) * 0.05).toFixed(2)} R$`)

//4)

let salJanAcrescimo = (salario + auxCreche * 2) + (vendaJaneiro * 0.1)
console.log(` O salário  de Janeiro com acréscimos e desconto é de ${(salJanAcrescimo - (salJanAcrescimo * 0.05)).toFixed(2)} R$`)

let salFevAcrescimo = (salario + auxCreche * 2) + (vendaeFevereiro * 0.1)
console.log(` O salário de Fevereiro com acréscimos e desconto é de ${(salFevAcrescimo - (salFevAcrescimo * 0.05)).toFixed(2)} R$`)

let salMarAcrescimo = (salario + auxCreche * 2) + (vendaMarco * 0.1)
console.log(` O salário de Março com acréscimos e desconto é de ${(salMarAcrescimo - (salMarAcrescimo * 0.05)).toFixed(2)} R$`)

let salAbrAcrescimo = (salario + auxCreche * 2) + (vendaAbril * 0.1)
console.log(` O salário de Abril com acréscimos e desconto é de ${(salAbrAcrescimo - (salAbrAcrescimo * 0.05)).toFixed(2)} R$`)

let salMaiAcrescimo = (salario + auxCreche * 2) + (vendaMaio * 0.1)
console.log(` O salário de maio com acréscimos e desconto é de ${(salMaiAcrescimo - (salMaiAcrescimo * 0.05)).toFixed(2)} R$`)

let salJunAcrescimo = (salario + auxCreche * 2) + (vendaJunho * 0.1)
console.log(` O salário de maio com acréscimos e desconto é de ${(salJunAcrescimo - (salJunAcrescimo * 0.05)).toFixed(2)} R$`)


//5)

console.log(`A média do salário em seis meses foi de ${((salJanAcrescimo + salFevAcrescimo + salMarAcrescimo + salAbrAcrescimo + salMaiAcrescimo + salJunAcrescimo) / 6).toFixed(2)}`)



