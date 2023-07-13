console.log("Exercise 1")
// a) Peça ao usuário que insira um número **par**
let númeroPar = +prompt("insira um número par")
console.log(númeroPar)

//b) Imprima no console **o resto da divisão** desse número por 2.
console.log("modulo:", númeroPar % 2)

/* c) Teste o programa com diversos números pares. 
Você notou um padrão? Escreva em um comentário de código. */
//Each time I calculate the module using an even number, the modulo is 0.
//Because it divides perfectly into eachother.

/* d) O que acontece no console se o usuário inserir um número ímpar? 
Escreva em um comentário de código. */
let nùmeroÍmpar = +prompt("insira um número ímpar")
console.log("modulo2:", nùmeroÍmpar % 2)

/* The rest of the division is not the decimal place 'left-over'. For example:
15 % 4 = (15 / 4 = 3.75). Now I must determine which number 4 divides into evenly.
15 / 4 = 3.75
14 / 4 = 3.5
13 / 4 = 3.25
12 / 4 = 12 (SUCCESS)
I  now subtract 12 from 15 = 3
The modulo of 15 % 4 = 3