// Resposta 1
const numero1 = prompt ("Digite um numero par 1 a 9")
const numero2 = prompt ("Digite um numero par menor que o primeiro 1 a 9")

// Resposta 2
const maiorQue = numero1 > numero2
console.log("É maior?", maiorQue)

const igual = numero1 === numero2 
console.log("Eles são iguais?", igual)

const divisao = numero1 / numero2 
const restoDivisao = numero1%numero2 === 0
console.log("Podemos dividir o 1 pelo 2?", restoDivisao)

const divisao2 = numero2 / numero1 
const restoDivisao2 = numero2%numero1 !== 0
console.log("Podemos dividir o 2 pelo 1?", restoDivisao2)


