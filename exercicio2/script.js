let pergunta1 = prompt("inserir um números");
let pergunta2 = prompt("inserir um números");



/*let perguntaA = prompt("O primeiro numero é maior que segundo?");*/
let comparacao0 =  pergunta1 > pergunta2
    console.log(comparacao0)


/*let perguntaB = prompt("O primeiro numero é igual ao segundo?");*/
let comparacao1 = pergunta1 == pergunta2
    console.log(comparacao1)


/*let perguntaC = prompt("O primeiro numero é divisível pelo segundo?");*/
let comparacao2 = ((pergunta1 / pergunta2) % 2) == 0 
    console.log(comparacao2)

/*let perguntaD = prompt("O segundo numero é divisível pelo primeiro?");*/
let comparacao3 = ((pergunta2 / pergunta1) % 2) == 0
    console.log(comparacao3)