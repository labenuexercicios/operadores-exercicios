const a = (5 > 20) && (5 < 2)
const b = (5 === 5) || (5 === "5")
const c = ! 20 > 50
const d = !(20 > 50)

console.log(a);/*false, porque 5 não é maior que 20 e 
consequentemente temos false && true, que devolve false*/ 

console.log(b);/*true, porque 5 é igual a 5 em tipo e em valor,
mas 5 não é igual a "5" em tipo {typeof(5) = number, typeof("5") = string},
consequentemente temos true || false que devolve o valor true.*/

console.log(c);/*false, porque a negação de 20 não é um valor suficientemente
analisável como maior que 50, já que poderia ser qualquer número exceto 20,
portanto devolve false*/ 

console.log(d);/*true, porque 20 não é maior que 50, então false, 
e consequentemente a negação de false é true.*/
