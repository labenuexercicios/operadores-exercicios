const operacao = 5 > 20 && 5 <2
console.log("5 é maior que 20 e também é menor que 2", operacao)//false
const opera = 5 === 5 || 5 === "5"
console.log("5 é igual a 5 ou é igual a '5'", opera) //true
const opera1 = !(20>50)
console.log("negacao de vinte é maior que cinquenta", opera1) //true
const opera2 = !(20> 50|| 50 >60)
console.log("negacao de vinte é maior que cinquenta ou cinquenta é maior de sessenta", opera2) //true

//exercicio 2 
let salario = 2000.00
const auxilioCreche = 45.50
const porcentagemComissao = 0.1
let vendasJan = 5784.50
let vendasFev = 3418.41
let vendasMarc = 4124.10
let vendasAbr = 1874.00
let vendasMaio = 7000.00
let vendasJunho = 9450.00
const inss = 0.95
let filhos = 2

//exer 1 
const salarioaux = ( salario + (auxilioCreche*filhos))
console.log("O salário + auxilio creche é de:" , salarioaux)

//exer 2
const comJan = (vendasJan*0.1)
console.log ("A comissão de janeiro é de", comJan)

//exer 3 
const salarioComDesconto = ((salario + comJan) * 0.05 )
console.log (" O desconto do inss é de: ", salarioComDesconto)

//Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log ("O salário de Janeiro é",(((salario + comJan) * inss)+ auxilioCreche*filhos))
console.log ("O salário de Fevereiro é",(((salario + (vendasFev*0.1)) * inss)+ auxilioCreche*filhos))
console.log ("O salário de Março é",(((salario + (vendasMarc*0.1)) * inss)+ auxilioCreche*filhos))
console.log ("O salário de Abril é",(((salario + (vendasAbr*0.1)) * inss)+ auxilioCreche*filhos))
console.log ("O salário de Maio é",(((salario + (vendasMaio*0.1)) * inss)+ auxilioCreche*filhos))
console.log ("O salário de Junho é",(((salario + (vendasJunho*0.1)) * inss)+ auxilioCreche*filhos))



//A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//(Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. 
//Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

let Jan = (((salario + comJan) * inss)+ auxilioCreche*filhos)
let Fev = (((salario + (vendasFev*0.1)) * inss)+ auxilioCreche*filhos)
let Marc = (((salario + (vendasMarc*0.1)) * inss)+ auxilioCreche*filhos)
let Abril = (((salario + (vendasAbr*0.1)) * inss)+ auxilioCreche*filhos)
let Maio = (((salario + (vendasMaio*0.1)) * inss)+ auxilioCreche*filhos)
let Junho = (((salario + (vendasJunho*0.1)) * inss)+ auxilioCreche*filhos)
let media = (Jan + Fev + Marc + Abril + Maio + Junho) / 6
console.log ("A média salarial dos ultimos 6 meses é ", media)

//.
