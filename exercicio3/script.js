// const a = 5 > 20 && 5 < 2
// console.log( a ) // false

// const b = 5 === 5 || 5 === "5"
// console.log( b ) //true

// const c = !(20 > 50)
// console.log( c ) //true

// const d = !(20 > 50 || 50 > 60)
// console.log(d) // true

// Segunda parte 2


const salario = 2000 
const auxcreche = 45.50 * 2

const salarioBruto = salario + auxcreche
console.log(salarioBruto)

const janeiro = 5784.50
const fevereiro = 3418.41
const março = 4124.10
const abril = 1874
const maio = 7000
const junho = 9450
const inss =  05/100

const comissãoJaneiro = janeiro * 10 / 100
console.log(comissãoJaneiro)

const comiossãoTotal = (janeiro * 10/100 + fevereiro * 10/100 + março * 10/100 + 
abril * 10/100 + maio * 10/100 + junho * 10/100)
console.log (comiossãoTotal)

const descontoJaneiro = (salario + comissãoJaneiro ) * 05/100
console.log(descontoJaneiro)

const salarioTotal = (salario * 6 + auxcreche * 12 + comiossãoTotal - inss) 
console.log(salarioTotal)

const mediaSalario = (salario * 6 + auxcreche * 12 + comiossãoTotal) / 6
console.log(mediaSalario)
// let vendas = 5784.50 + 3418.41 + 4124.10 + 1874 +7000 + 9450
// console.log(vendas)

// let  = (5784.50 * 0.1 + 2000) * 0.05
// console.log(janeiro)

// let loucura = Math.round (5784.50 * 0.1 + 3418.41 * 0.1 + 4124.10 * 0.1 +1874 * 0.1 + 
//     7000 * 0.1 + 9450 * 0.1 + 45.50 * 12 + 2000 * 6) / 6  
// console.log(loucura)