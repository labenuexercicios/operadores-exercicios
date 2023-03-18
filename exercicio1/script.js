
//testar se número é par

let par = Number(prompt("Insira um número par"))

let restoDivisao = par % 2

console.log(restoDivisao)

if (restoDivisao == 0) { alert("É par") }
else { alert("É impar") }

//usando ternário:
// (restoDivisao == 0? alert("É par") : alert("É ímpar"));