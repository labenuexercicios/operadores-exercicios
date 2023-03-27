console.log("orci ") 

// # Exercício 2 envio

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
const n1 = Number(prompt(`Insira um número:`))
const n2 =Number(prompt(`Insira um segundo número:`))
// ```
// O primeiro numero é maior que o segundo? true
console.log(`O primeiro número é ${n1} e o segundo é ${n2}, a resposta é ${n1>n2}`)

// O primeiro numero é igual ao segundo? false
console.log(`O primeiro número é igual ao segundo? ${n1===n2} === ,${n1==n2}==`)
// O primeiro numero é divisível pelo segundo? true
console.log(`O primeiro número é divisivel pelo segundo ${n1%n2===0}`)
// O segundo numero é divisível pelo primeiro? true
console.log(`O segundo número é divisivel pelo primeiro? ${n2%n1===0}`)


// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
// ```