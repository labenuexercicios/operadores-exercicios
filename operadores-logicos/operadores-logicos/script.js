// PRÁTICA GUIADA

/*
a: Quero dirigir um Celta 2012; // true
b: Sou maior de idade; // true
c: Consigo comprar o Celta por 22.000 reais; // true
d: Consigo alugar o Celta; // true
e: Tenho carteira de motorista; // true

cenario1: Quero dirigir o Celta 2012
cenario2: Não sou maior de idade
cenario3: Sou maior de idade e não tenho carteira de motorista
cenario4: Sou maior de idade e consigo comprar ou alugar o Celta
cenario5: Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta
*/

/*
const fraseA = true
const fraseB = true
const fraseC = true
const fraseD = true
const fraseE = true

const cenario1 = fraseA
console.log(`Cenário 1: ${cenario1}`)

const cenario2 = !fraseB
console.log(`Cenário 2: ${cenario2}`)

const cenario3 = fraseB && !fraseE
console.log(`Cenário 3: ${cenario3}`)

const cenario4 = fraseB && fraseC || fraseD
console.log(`Cenário 4: ${cenario4}`)

const cenario5 = fraseB && fraseE && !fraseA
console.log(`Cenário 5: ${cenario5}`)
*/

// EXERCÍCIO DE FIXAÇÃO

/*
a: “vou para a praia!” // true
b: “sou maior de idade” // true
c: “posso tomar uma cervejinha” // true
d: “quero passear de carro” // true

operação 1: Não sou maior de idade e quero passear de carro
operação 2: Sou maior de idade e vou para a praia, e não quero passear de carro
operação 3: Vou para a praia ou quero passear de carro
operação 4: Posso tomar uma cervejinha e não vou passear de carro
*/

/*
const afirA = true
const afirB = true
const afirC = true
const afirD = true

const operacao1 = !afirB && afirD
console.log(`Operação 1: ${operacao1}`)

const operacao2 = afirB && afirA && !afirD
console.log(`Operação 2: ${operacao2}`)

const operacao3 = afirA || afirD
console.log(`Operação 3: ${operacao3}`)

const operacao4 = afirC && !afirD
console.log(`Operação 4: ${operacao4}`)
*/