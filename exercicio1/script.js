
let numbPar
let perguntaNumb
perguntaNumb = "insira numero par"
numbPar = prompt(perguntaNumb)
console.log(perguntaNumb, numbPar)

let numbInsert = numbPar
numbInsert = numbInsert % 2

console.log("resto divisao", numbInsert) 
console.log(typeof numbInsert)

/* valor impresso ao inserir um numero par, 
independente do valor a ser colocado, sera 0, 
por se tratrar de uma divisão exata. */

/* o valor impresso ao inserir um numero impar,
independente do valor sera 1, por nao se tratar 
de uma divisão exata */


