// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
let num1 = Number(prompt("Digite um numero:"));
let num2 = Number(prompt("Digite outro numero:"));

console.log("Primeiro numero: ",num1);

console.log("Segundo numero: ",num2);

// O primeiro numero é maior que o segundo? true
console.log("O primeiro numero é maior que o segundo?",num1 > num2);
// O primeiro numero é igual ao segundo? false
console.log("O primeiro numero é igual ao segundo?",num1 === num2);
// O primeiro numero é divisível pelo segundo? true
let divisivel = num1 % num2 === 0
console.log("O primeiro numero é divisível pelo segundo?",divisivel);
// O segundo numero é divisível pelo primeiro? true
let divisivel2 = num2 % num1 === 0
console.log("O segundo numero é divisível pelo primeiro?", divisivel2);

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
