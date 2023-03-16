console.log("orci") 

// # Exercício 2 envio

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
const n1 = Number(prompt("digite o primeiro numero"))
const n2 = Number(prompt('Digite o segundo numero'))
// ```
// O primeiro numero é maior que o segundo? true
console.log(`O primeiro numero, que é ${n1}, é maior que o segundo número que é ${n2} a resposta é ${n1>n2}`)
// O primeiro numero é igual ao segundo? false
console.log(`O primeiro numero que é ${n1}, é igual ao segundo número que é ${n2} a resposta é ${n1===n2}`)
// O primeiro numero é divisível pelo segundo? true
console.log(`O primeiro numero que é ${n1}, é divisivel pelo segundo número que é ${n2} a resposta é ${n1%n2}`)
// O segundo numero é divisível pelo primeiro? true
console.log(`O segundo numero que é ${n2}, é divisivel pelo primeiro número que é ${n1} a resposta é ${n2%n1 ===0}`)

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
// ```