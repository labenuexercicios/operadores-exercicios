// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)

const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)

const operacao3 = !(20 > 50)
console.log(operacao3)

const operacao4 = !((20 > 50)||50>60)
console.log(operacao4)

let salario_auxilio = 2000 + 45.50 


let Janeiro = (salario_auxilio+0.1*5784.50)*0.95
let Fevereiro = (salario_auxilio+0.1*3418.41)*0.95
let Marco = (salario_auxilio+0.1*4124.10)*0.95 
let Abril = (salario_auxilio+0.1*1874)*0.95 
let Maio = (salario_auxilio+0.1*7000)*0.95 
let Junho = (salario_auxilio+0.1*9450)*0.95 



console.log("Janeiro:", Janeiro)
console.log("Fevereiro:", Fevereiro)
console.log("Março:",Marco)
console.log("Abril:", Maio)
console.log("Junho:", Junho)

let media = ((Janeiro+Fevereiro+Marco+Abril+Maio+Junho)/0.95)/6

console.log("A média salarial foi de", media)
