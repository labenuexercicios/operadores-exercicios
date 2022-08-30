numero = prompt("informe um numero")
 if( numero % 2 === 0 ){
    console.log(numero+" É um numero par")
 }else if(numero % 2 === 1){
    console.log(numero +" É um numero impar")
 }
 resto = numero % 2

// imprime o resto informando se é par ou impar 
console.log('Resto da divisão '+ resto);
///Sendo um número par, *o resto da divisão* sempre vai ser 0.
//E sendo um número ímpar, *o resto da divisão* é sempre 1