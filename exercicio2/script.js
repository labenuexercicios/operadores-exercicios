
console.log("Insira um número:");
let num1 = prompt();
console.log(num1);
console.log("Insira um segundo número:");
let num2 = prompt();
console.log(num2);

if (num1 > num2){
    console.log("Primeiro número é maior!");
}else if(num1 === num2){
    console.log("Segundo número é igual!");
}


if (num1 / num2 % 2 === 0){
    console.log("O primeiro Número é divisivél pelo segundo:"); 
}else{
    console.log("O primeiro Números não é divisivél pelo segundo:"); 
}


if (num2 / num1 % 2 === 0){
    console.log("O segundo Número divisivél pelo primeiro:");
}else{
    console.log("O segundo número não é divisível pelo primeiro:"); 
}