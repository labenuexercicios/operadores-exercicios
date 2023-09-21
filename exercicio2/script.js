/* Criei as variáveis (num1 e num2) para armazenar dois valores inseridos pelo usuário através do prompt. */
const num1 = Number(prompt("Adicione o primeiro número: "));
const num2 = Number(prompt("Adicione o segundo número: "));

/* Imprmi no console o resultado de algumas operações com os dois números adicionados, como valor das variáveis, pelo usuário */
console.log("O primeiro número é maior que o segundo? ", num1 > num2);
console.log("O primeiro numero é igual ao segundo? ", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
console.log("O segundo numero é divisível pelo primeiro? ", num2 % num1 === 0);
