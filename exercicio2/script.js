const numero1 = prompt("digite um numero")
const numero2 = prompt("digite outro nemro")

let maior = numero1 > numero2
console.log("o primeiro numero é mair que o segundo?", maior)

let igual = numero1 === numero2
console.log("o primeiro numero é igual ao segundo?", igual)

let divisivel = (numero1 % numero2) ===0
console.log("o primeiro numero é divisivel pelo o segundo?", divisivel)

let divisivel2 = (numero2 % numero1) ===0
console.log('o segundo numero é divisivel pelo o primeiro?', divisivel2)