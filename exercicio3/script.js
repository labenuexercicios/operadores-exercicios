// let num1 = 5
// let num2 = 20
// let num3 = 2 
// console.log(`a) `,(num1 > num2) < 2);
// console.log(`b) `,(num1 == num1) == "5");

console.log(`-----------------`);
let salario = 2000
let auxCreche = 40.50

let venJan = 5784.50;
let venFev = 3418.41;
let venMar = 4124.10;
let venAbr = 1874.00;
let venMai = 7000.00;
let venJun = 9450.00;
let salBrutoJan = ((salario + auxCreche + ((venJan / 100)*10)))
let salBrutoFev = ((salario + auxCreche + ((venFev / 100)*10)))
let salBrutoMar = ((salario + auxCreche + ((venMar / 100)*10)))
let salBrutoAbr = ((salario + auxCreche + ((venAbr / 100)*10)))
let salBrutoMai = ((salario + auxCreche + ((venMai / 100)*10)))
let salBrutoJun = ((salario + auxCreche + ((venJun / 100)*10)))
let inssJan =    ((salBrutoJan / 100) *5).toFixed(2)
let inssFev =    ((salBrutoFev / 100) *5).toFixed(2)
let inssMar =    ((salBrutoMar / 100) *5).toFixed(2)
let inssAbr =    ((salBrutoAbr / 100) *5).toFixed(2)
let inssMai =    ((salBrutoMai / 100) *5).toFixed(2)
let inssJun =    ((salBrutoJun / 100) *5).toFixed(2)


let nome = "Fulano de Silva";
let nasc = "10/02/1990"
let end = "Rua dos bobos nº 0"
let cpf = "000.000.000-00"
let filhos = 2
let cargo = "vendedor"

//let comissao = confirm('voce recebe comissão?')
let admissao = "12/2019"

console.log('------------------');
console.log(`Informe seu nome : ${nome}`);
console.log(`Informe sua data de nascimento : ${nasc}`);
console.log(`Informe seu CPF : ${cpf}`);
console.log(`Informe quantos filhos voce tem : ${filhos} filhos`);
console.log(`Informe seu cargo : ${cargo}`);
console.log(`Informe seu salario : ${parseFloat(salario)}`);
console.log(`Informe sua data de admissão : ${admissao}`);
console.log(`-------`);
console.log(`O salario com auxilio creche R$${salario + auxCreche}`);
console.log(`-------`);
console.log(`Comissão de janeiro ${(venJan / 100) * 10}`);
console.log(`-------`);
console.log(`O desconto do Inss sera de R$${inssJan}`);
console.log(`-------`);
console.log(`Sal liq jan - ${salBrutoJan - inssJan} , Sal liq fev - ${salBrutoFev - inssFev} , Sal liq mar - ${salBrutoMar-inssMar} , Sal liq abri - ${salBrutoAbr-inssAbr} - , Sal liq mai - ${salBrutoMai-inssMai} , Sal liq jun - ${salBrutoJun-inssJun}`);
console.log('------------------');
console.log(`A média de todos os salários é ${(((salBrutoJan + salBrutoFev + salBrutoMar + salBrutoAbr + salBrutoMai + salBrutoJun) / 6)).toFixed(2)}`);
