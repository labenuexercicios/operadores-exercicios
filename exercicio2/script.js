// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que o segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
// ```

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite um segundo número"))
//a)
console.log(numero1 > numero2) 
//b)
console.log(numero1 === numero2)
//c)
console.log(numero1 % numero2 === 0)
//d)
console.log(numero2 % numero1 === 0)