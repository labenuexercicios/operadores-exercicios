console.log("Exercise 2")
/* Faça um programa que pergunte ao usuário dois números. 
   Em seguida, faça as operações e imprima no console as seguintes 
   mensagens seguidas pelo `true` ou `false`: */

 //     Igual | Diferente
 //      ===       !==
 //     Maior | Menor
 //       >       <
 //     Maior ou Iqual | Menor ou Igual
 //          >=                <=

 const primeiroNúmero = Number(prompt("inserir um número"))
 const segundoNúmero = +prompt("Inserir um número")

 console.log("O primeiro número é equal que o segundo?:", primeiroNúmero === segundoNúmero)
 console.log("O primeiro número é diferente que o segundo?:", primeiroNúmero !== segundoNúmero)
 console.log("O primeiro número é maior que o segundo?:", primeiroNúmero > segundoNúmero)
 console.log("O primeiro número é menor que o segundo?:", primeiroNúmero < segundoNúmero)
 console.log("O primeiro número é maior ou igual que o segundo?:", primeiroNúmero >= segundoNúmero)
 console.log("O primeiro número é menor ou igual que o segundo?:", primeiroNúmero <= segundoNúmero)
 console.log("O primeiro número é divisível pelo segundo?:", primeiroNúmero / segundoNúmero)
 console.log("O segundo número é divisível pelo segundo?:", segundoNúmero / primeiroNúmero)

 console.log(!(primeiroNúmero % segundoNúmero))
 console.log(!(segundoNúmero % primeiroNúmero))