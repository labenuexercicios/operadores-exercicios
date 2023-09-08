let num1 = +prompt('Digite o primeiro número')
let num2 = +prompt('Digite o segundo número')

console.log(`1 - O primeiro número: ${num1} é maior que o segundo número: ${num2}`, num1 > num2);
 console.log(`2 - O primeiro número: ${num1} é igual o segundo número: ${num2}`, num1 == num2);
 console.log(`${num1 % num2 === 0}`);
 console.log(`${num2 % num1 === 0}`);
 console.log(`${num1 % num2}`);


// O primeiro numero é maior que o segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!