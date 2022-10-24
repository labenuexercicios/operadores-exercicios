const operacao1 = 5 > 20 && 20 < 2
const operacao2 = 5 === 5 && 5 === '5'
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 && 50 > 60)

console.log(operacao1)
console.log(operacao2)
console.log(operacao3)
console.log(operacao4)

const salario = 2000
let auxilio = 45.50*2
const janeiro = (5784.50)
const fevereiro = (3418.41)
const marco =  (4124.10)
const abril = (1874.00)
const maio = (7000.00)
const junho = (9450.00)
const comiSala1 = (janeiro*0.1+salario)
const comiSala2 = (fevereiro*0.1+salario)
const comiSala3 = (marco*0.1+salario)
const comiSala4 = (abril*0.1+salario)
const comiSala5 = (maio*0.1+salario)
const comiSala6 = (junho*0.1+salario)
const inss = (salario*0.05)
const divisao = (6)
const media = (comiSala1+salario+auxilio)+(comiSala2+salario+auxilio)+(comiSala3+salario+auxilio)+(comiSala4+salario+auxilio)+(comiSala5+salario+auxilio)+(comiSala6+salario+auxilio)

console.log("salario + auxilio", (salario+auxilio).toFixed(2))
console.log("comissão + salario Janeiro", comiSala1.toFixed(2))
console.log("salario - INSS", (comiSala1*0.05).toFixed(2))
console.log(`salario de janeiro ${((comiSala1-inss+auxilio)).toFixed(2)}`)
console.log("salario de fevereiro",(comiSala2-inss+auxilio).toFixed(2))
console.log("salario de março",(comiSala3-inss+auxilio).toFixed(2))
console.log("salario de abril",(comiSala4-inss+auxilio).toFixed(2))
console.log("salario de maio",(comiSala5-inss+auxilio).toFixed(2))
console.log("salario de junho",(comiSala6-inss+auxilio).toFixed(2))
/* console.log(`salarios ${(
    (comiSala1+salario+auxilio)+
    (comiSala2+salario+auxilio)+
    (comiSala3+salario+auxilio)+
    (comiSala4+salario+auxilio)+
    (comiSala5+salario+auxilio)+
    (comiSala6+salario+auxilio))
    .toFixed(2)}`
) */
console.log("media salarial", (media / divisao).toFixed(2))
