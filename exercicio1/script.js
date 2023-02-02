const numero = Number(prompt(`Digite um número par (não seja do contra. Um número PAR, por favor):`))

const resto = numero % 2

console.log(`O resto do número ${numero} por 2 é: ${resto}.`)

/*
c) O padrão é que todos o números pares divididos por 2 terão resto 0.

d) Caso o usuário insira um número ímpar, o resto da divisão deste número por 2 será sempre um número diferente de 0.
*/