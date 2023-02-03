/*# Exercício 2

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
```
 */

let numero1 = Number (prompt ("Digite um número qualquer"))
console.log (`O primeiro número é:${numero1}`)

let numero2 = Number (prompt ("Digite outro número qualquer"))
console.log(`O segundo número é: ${numero2}`)

//O primeiro número é maior que o segundo
let operacaoA = numero1 > numero2
console.log(`O primeiro número é maior que o segundo? ${operacaoA}`)

//O primeiro número não é igual ao segundo
let operacaoB = numero1 === numero2
console.log (`O primeiro número é igual ao segundo? ${operacaoB}`)

//O primeiro número é divisivel pelo segundo
let operacaoC = (numero1 % numero2) ===0
console.log (`O primeiro número é divisível pelo segundo? ${operacaoC}`)

//Osegundo número é divisivel pelo segundo
let operacaoD = (numero2 % numero1)===0
console.log (`O segundo número é divisível pelo segundo? ${operacaoD}`)

/*const primeiroNumero = prompt("Digite o primeiro número: ");
const segundoNumero = prompt("Digite o segundo número: ");

const letraA = primeiroNumero > segundoNumero;
console.log("Letra a:", letraA);

const letraB = primeiroNumero === segundoNumero;
console.log("Letra b:", letraB);

const letraC = primeiroNumero % segundoNumero === 0;
console.log("Letra c:", letraC);

const letraD = segundoNumero % primeiroNumero === 0;
console.log("Letra d:", letraD);

 */