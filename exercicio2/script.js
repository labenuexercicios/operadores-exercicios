let idade1 = prompt("Qual a sua idade?")
let idade2 = prompt("Qual a idade do seu irmão?")

console.log("O primeiro numero é maior que o segundo? - ", idade1 > idade2)
console.log("O primeiro numero é igual ao segundo? - ", idade1 == idade2)
let divisivel1 = idade1 % idade2
let divisivel2 = idade2 % idade1
console.log("O primeiro numero é divisivel pelo segundo? - ", divisivel1 == 0)
console.log("O segundo numero é divisivel pelo primeiro?", divisivel2 == 0)