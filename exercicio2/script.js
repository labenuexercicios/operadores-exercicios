let num1 = Number (prompt("Por favor, insira o primeiro número"))
let num2 = Number (prompt("Por favor, insira o segundo número"))

let resp1 = num1 > num2
console.log("O primeiro número é maior que o segundo?",resp1)

let resp2 = num1 === num2
console.log("O primeiro número é igual que o segundo?",resp2)

let resp3 = num1 % num2 === 0
console.log("O primeiro número é divisível que o segundo?",resp3)

let resp4 = num2 % num1 === 0
console.log("O segundo número é divisível que o primeiro?",resp4)
