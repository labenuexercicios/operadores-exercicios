let numero = Number (prompt("Escreva aqui um número par:"))

console.log("Esse é seu número =", numero);
console.log(typeof numero);

numero %= 2 
console.log("Esse é o resto do seu número divido por 2 =", numero);
console.log(typeof numero);
//sempre vai dar 0 pq é par
//se colocar impar fica com resto diferente de zero