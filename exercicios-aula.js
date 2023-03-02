//crie uma variável saldo:
let saldo;

//se eu tenho 15 reais e recebo mais 22.40, quanto dinheiro tenho agora?
saldo = 15 + 22.40;
console.log(saldo);

//gastei 12.34. E agora, qual é o meu saldo?
saldo = saldo - 12.34;
console.log(saldo);

//precisei dividr o dinheiro igualmente com meus dois irmãos. Quanto ficou pra cada um?
saldo = saldo / 3;
console.log(saldo);

//apliquei minha parte do dinheiro, e ele rendeu até ficar 3.42 vezes maior. Quanto vale agora?
saldo = saldo * 3.42;
console.log(saldo);

//reparti o dinheiro em fatias inteiras entre três contas, e deixei o resto para comprar um chicletinho. Quanto dinheiro sobrou para o chiclete?
let resto = saldo % 3;
console.log(resto);

//quanto é 2x2+2?
const operation1 = 2*2+2;
console.log(operation1);

//e 2x(2+2)?
const operation2 = 2*(2+2);
console.log(operation2);

//vamos checar o que devolvem as comparações a seguir, crie uma variável para guardar o resultado de cada comparação:
const result1 = 5 === 5;
const result2 = 5 !== 5;
const result3 = 5 !== "5";
const result4 = "5" === "cinco";
const result5 = typeof 5 === typeof 20;
const result6 = typeof "5" === typeof "cinco";

console.log(result1, result2, result3, result4, result5, result6);


//crie duas variáveis que guardem dois números. Utilizando somente os operadores >, <, >= e <=, faça as comparações e imprima na tela as seguintes mensagens: 
let num1 = 7;
let num2 = 9;

//1. o primeiro número é igual o segundo? True/False.
console.log('o primeiro número é igual o segundo?', num1===num2);

//2. o primeiro número é menor ou igual ao segundo? True/False.
console.log('o primeiro número é menor ou igual ao segundo?', num1<=num2);

//3. o primeiro número é maior que o segundo? True/False.
console.log('o primeiro número é maior que o segundo?', num1>num2);

//4. o primeiro número é menor que o segundo? True/False.
console.log('o primeiro número é menor que o segundo?', num1<num2);


//Faça um programa que:
//Pergunte a sua idade;
let age = prompt('Qual a sua idade?');

//Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
let friendAge = prompt('Qual a idade da sua ou do seu melhor amiga(o)?');

//Imprima a seguinte mensagem: "Sua idade é maior que a do seu melhor amigo?" seguido pela resposta (true ou false);
console.log('Sua idade é maior que a do seu melhor amigo?', age > friendAge);

//Imprima no console a diferença de idade (não tem problema se sair um número negativo);24
console.log(age - friendAge);

//Considere as seguintes afirmações e crie variáveis para elas:
let a = "vou pra praia!";
let b = "sou maior de idade";
let c = "posso tomar uma cervejinha";
let d = "quero passear de carro";

//Com as informações criadas, escreva as operações lógicas para as frases abaixo:
//Não sou maior de idade e quero passear de carro:
!b && d;

//Sou maior de idade e vou para a praia, e não quero passear de carro:
b && a && !d;

//Vou para a praia ou quero passear de carro:
a && d;

//Posso tomar uma cervejinha e não vou passear de carro:
c && !d;