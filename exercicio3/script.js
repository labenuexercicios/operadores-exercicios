const operacao1 = 5 > 20 && 5 < 2;
const operacao2 = 5 === 5 || 5 === "5";
const operacao3 = !20 > 50;
const operacao4 = !(20 > 50)

console.log(operacao1)
/* false, porque 5 pe menor que 20 e maior que 2, temos false && false que retorna false */
console.log(operacao2)
/* true, porque 5 é igual a 5 ou 5 é igual a "5", temos || que retorna true
se uma das afirmativas forem verdadeiras */
console.log(operacao3)
/* false, porque 20 é menor que 50 */
console.log(operacao4)
/* true, porque ao negar que 20 é maior que 50 a afirmativa se torna verdadeira*/