const pergunta1 = prompt(`Insira um numero!`)
const pergunta2 = prompt(`Insira outro numero!`)
console.log(pergunta1)
console.log(pergunta2)

const p1 = `O primeiro numero é maior que o segundo?`
const r1 = pergunta1 > pergunta2
console.log(p1, r1)

const p2 = `O primeiro numero é igual ao segundo?`
const r2 = pergunta1 == pergunta2
console.log(p2, r2)


const p3 = `O primeiro numero é divisível pelo segundo?`
const r3 = pergunta1 % pergunta2 == 0
console.log(p3, r3)


const p4 = `O segundo numero é divisível pelo primeiro?`
const r4 = pergunta2 % pergunta1 == 0 
console.log(p4, r4)

