const perguntaNumeroA = Number(prompt("Digite o primeiro número:"));
const perguntaNumeroB = Number(prompt("Digite o segundo número:"));
const numeroA = perguntaNumeroA;
const numeroB = perguntaNumeroB;
const maior = numeroA > numeroB;
const igual = numeroA === numeroB;
const divisaoAB = numeroA % numeroB === 0;
const divisaoBA = numeroB % numeroA === 0;

console.log("O primeiro número é maior que o segundo?", maior);
console.log("O primeiro número é igual ao segundo?", igual);
console.log("O primeiro número é divisível pelo segundo?", divisaoAB);
console.log("O segundo número é divisível pelo primeiro?", divisaoBA);