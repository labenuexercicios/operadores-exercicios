//variaveis que armazenam as perguntas
const pergNumA = "Digite o primeiro número:"
const pergNumB = "Digite o segundo número:"

//variaveis para armazenar as respostas das perguntas feitas no prompt
const respNumA = Number(prompt(pergNumA))
const respNumB = Number(prompt(pergNumB))

//variaveis  para as comparações e calculos
const compMaior = respNumA > respNumB
const comIgual = respNumA === respNumB
const div1 = respNumA % respNumB === 0
const div2 = respNumB % respNumA === 0

// Imprime numeros digitados para melhorar a visualização
console.log("Primeiro número:", respNumA)
console.log("Segundo número:", respNumB)
 
//imprime perguntas do exercicio e sua respectiva resposta booleana
console.log("O primeiro numero é maior que segundo?", compMaior)
console.log("O primeiro numero é igual ao segundo?", comIgual)
console.log("O primeiro numero é divisível pelo segundo?", div1)
console.log("O segundo numero é divisível pelo primeiro?", div2)


