let perguntaA = prompt(String("Digite um número qualquer")); //usuário digita o primeiro valor
let respostaA = Number((perguntaA));
console.log("primeiro número inserido:", respostaA);
let perguntaB = prompt(String("Digite outro número")); // solicitação do segundo valor
let respostaB = Number((perguntaB));
console.log("segundo número inserido:", respostaB);
let comparador1 = respostaA > respostaB;
console.log("valor 1 é maior que valor 2?", comparador1);
let comparador2 = respostaA == respostaB;
console.log("valor 1 é igual ao valor 2?", comparador2);
comparador1 = respostaA % respostaB ===0;
console.log("valor 1 é divisível por valor 2?", comparador1)
comparador2 = respostaB % respostaA ===0;
console.log("valor 2 é divisível por valor 1?", comparador2)
