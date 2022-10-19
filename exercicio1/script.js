//EXERCÍCIO 1 

let numeroPar = Number (prompt("Escreva um número par:"));
let divisao = numeroPar / 2 
let restoDivisao = numeroPar % 2 

//Programa testado com outros números pares, notando-se um padrão no qual não há resto de divisão.

console.log("Escreva um número par:", numeroPar)
console.log("Resultado da divisão por 2:", divisao)
console.log("O resto da divisão é:", restoDivisao)

/*Ao ser novamente testado, agora com números ímpares, o código apresenta uma diferença no valor dividido, passando, por exemplo
a ter 15 / 2 = 7.5
e a variável restoDivisao volta o resto de 1.*/
