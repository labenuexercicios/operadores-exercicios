let numer1 = "digite um número"
let numer2 = "digite o segundo numero"
let numero1 = (prompt(numer1))
let numero2 = (prompt(numer2))

console.log(
    "O primeiro número digitado foi:", numero1 + 
    "\nO segundo número digitado foi:", numero2
    )

let resultado1 = numero1>numero2

console.log("O primeiro número é maior que o segundo?",resultado1)

let resultado2 = numero1===numero2

console.log ("O primeiro número é igual ao segundo?",resultado2)

let resultado3 = (numero1%numero2)===0

console.log("O primeiro número é divisível pelo segundo?",resultado3)

let resultado4 =(numero2%numero1)===0

console.log("O segundo número é divisível pelo primeiro?",resultado4)