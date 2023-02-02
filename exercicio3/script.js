let operacao1 = (5>20)&&(5<2)
let operacao2 =  (5===5)||(5==='5')
let operacao3 = !(20>50)
let operacao4 = !((20>50)||(50>70))

console.log("5 é maior que 20 e também é menor que 2 " + operacao1)
console.log("5 é igual a 5 ou é igual a “5” " + operacao2)
console.log("negação de (vinte é maior que cinquenta) " + operacao3)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) " + operacao4)


//PARTE 2
console.log("-> PARTE 2")

let salarioFixo = 2000 + (45.50*2)
let comissaoJaneiro = (5784.50*0.10)
let comissaoFevereiro= (3418.41*0.10)
let comissaoMarço = (4124.10*0.10)
let comissaoAbril = (1874.00*0.10)
let comissaoMaio = (7000.00*0.10)
let comissaoJunho= (9450.00*0.10)

let descontoJaneiro = (comissaoJaneiro + salarioFixo)*0.05
let descontoFevereiro = (comissaoFevereiro + salarioFixo)*0.05
let descontoMarço = (comissaoMarço + salarioFixo)*0.05
let descontoAbril = (comissaoAbril + salarioFixo)*0.05
let descontoMaio = (comissaoMaio + salarioFixo)*0.05
let descontoJunho =  (comissaoJunho + salarioFixo)*0.05


let salarioJaneiro = salarioFixo + comissaoJaneiro - descontoJaneiro
let salarioFevereiro = salarioFixo + comissaoFevereiro - descontoFevereiro
let salarioMarco = salarioFixo + comissaoMarço - descontoMarço
let salarioAbril = salarioFixo + comissaoAbril - descontoAbril
let salarioMaio = salarioFixo + comissaoMaio - descontoMaio
let salarioJunho = salarioFixo + comissaoJunho- descontoJunho



console.log("o Salario de Janeiro é: " + salarioJaneiro)
console.log("o Salario de FEvereiro é: " + salarioFevereiro)
console.log("o Salario de Março é: " + salarioMarco) 
console.log("o Salario de Abril é: " + salarioAbril)
console.log("o Salario de Maio é: " + salarioMaio) 
console.log("o Salario de Junho é: " + salarioJunho)   

console.log("A media salarial é: " + (salarioJaneiro+salarioFevereiro+salarioMarco+salarioAbril+salarioMaio+salarioJunho)/6)