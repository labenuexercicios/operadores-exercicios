const num1 = prompt("Digite um numero")
const num2 = prompt("Digite outro numero")
const divisivel1 = num1 % num2
const divisivel2 = num2 % num1


console.log(`O primeiro numero é maior que segundo? ${num1 > num2}`);
console.log(`O primeiro numero é igual ao segundo? ${num1 == num2}`);
console.log(`O primeiro numero é divisível pelo segundo? ${divisivel1 === 0}`);
console.log(`O segundo numero é divisível pelo primeiro? ${divisivel2 === 0}`);
