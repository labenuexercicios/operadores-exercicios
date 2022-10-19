const A = Number(prompt("Número 1: "));
const B = Number(prompt("Número 2: "));

console.log(`Número 1 é maior que Número 2? ${A > B}`)
console.log(`Número 1 é maior que Número 2? ${A === B}`)
console.log(`Número 1 é divisível pelo Número 2? ${A % B === 0}`)
console.log(`Número 2 é divisível pelo Número 1? ${B % A === 0}`)