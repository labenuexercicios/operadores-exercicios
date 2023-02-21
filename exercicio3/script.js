//EXERCICIO 3
//PARTE 1

const op1 = 5 > 20 && 5 < 2
    console.log(op1)

const op2 = 5 === 5 || 5 === 'cinco'
    console.log(op2)

const op3 = !(20 > 50)
    console.log(op3)

const op4 = !(20 > 50 || 50 > 60)
    console.log(op4)


//PARTE 2


const numFilhos = 2
const salario = 2000
const comissao = 0.1
const INSS = 0.05
const auxCreche = numFilhos*45.50

const comissaoJan = 5784.50*comissao
const comissaoFev = 3418.41*comissao
const comissaoMar = 4124.10*comissao
const comissaoAbr = 1874.00*comissao
const comissaoMai = 7000.00*comissao
const comissaoJun = 9450.00*comissao

//O salário fixo mais auxilio creche
const salECreche = (salario + auxCreche).toFixed(2)
console.log(`O salário fixo mais auxilio creche é de: ${salECreche}`)

//Comissão de Janeiro
console.log(`A comissão de Janeiro é de: ${comissaoJan}`)

//DescontoINSS
console.log(`O desconto de INSS referente a Janeiro é de: ${((salario+comissaoJan)*INSS).toFixed(2)}`)

//Salário todos os meses

let salarioJaneiro = (salario+comissaoJan)
    salarioJaneiro = salarioJaneiro - (salarioJaneiro*INSS)
    salarioJaneiro = salarioJaneiro + auxCreche

let salarioFevereiro = (salario+comissaoFev)
    salarioFevereiro = salarioFevereiro - (salarioFevereiro*INSS)
    salarioFevereiro = salarioFevereiro + auxCreche

let salarioMarco = (salario+comissaoMar)
    salarioMarco = salarioMarco - (salarioMarco*INSS)
    salarioMarco = salarioMarco + auxCreche
    
let salarioAbril = (salario+comissaoAbr)
    salarioAbril = salarioAbril - (salarioAbril*INSS)
    salarioAbril = salarioAbril + auxCreche

let salarioMaio = (salario+comissaoMai)
    salarioMaio = salarioMaio - (salarioMaio*INSS)
    salarioMaio = salarioMaio + auxCreche

let salarioJunho = (salario+comissaoJun)
    salarioJunho = salarioJunho - (salarioJunho*INSS)
    salarioJunho = salarioJunho + auxCreche

    console.log(`O os salários liquidos são os seguintes:
    Janeiro: R$ ${salarioJaneiro.toFixed(2)}
    Fevereiro: R$ ${salarioFevereiro.toFixed(2)}
    Março: R$ ${salarioMarco.toFixed(2)}
    Abril: R$ ${salarioAbril.toFixed(2)}
    Maio: R$ ${salarioMaio.toFixed(2)}
    Junho: R$ ${salarioJunho.toFixed(2)}`)

const mediasalario = ((salario+comissaoJan+auxCreche) + (salario+comissaoFev+auxCreche) + (salario+comissaoMar+auxCreche) + (salario+comissaoAbr+auxCreche) + (salario+comissaoMai+auxCreche) + (salario+comissaoJun+auxCreche))/6

console.log(`A media de salário não considerando so descontos nesse período é de: R$ ${mediasalario.toFixed(2)}`)










/* //PARTE 1

let op1 = 5 > 20 && 5 < 2
console.log(op1)

let op2 = 5 === 5 || "5"
console.log(op2)

let op3 = ! (20 > 50)
console.log(op3)

let op4 = ! (20 > 50 || 50 > 60)
console.log(op4)

//PARTE 2

const salario = Number(2000.00)
const comissao = Number(0.1)
const filhos = Number(2)
const auxilio = (filhos * 45.50)

const comissaoJan = Number(5784.50*comissao)
const comissaoFev = Number(3418.41*comissao)
const comissaoMar = Number(4124.10*comissao)
const comissaoAbr = Number(1874.00*comissao)
const comissaoMai = Number(7000.00*comissao)
const comissaoJun = Number(9450.00*comissao)

const descINSS = Number(0.05)

console.log(`O salário fixo mais o auxílio creche do Fulano é: R$ ${salario+auxilio},00`)
console.log(`Fulano receberá: R$ ${comissaoJan} de comissão`)
console.log(`O desconto de INSS de Fulado será de: ${(salario+comissaoJan)*descINSS}`)

const salarioJan = (salario+comissaoJan)-((salario+comissaoJan)*descINSS)+auxilio
const salarioFev = (salario+comissaoFev)-((salario+comissaoFev)*descINSS)+auxilio
const salarioMar = (salario+comissaoMar)-((salario+comissaoMar)*descINSS)+auxilio
const salarioAbr = (salario+comissaoAbr)-((salario+comissaoAbr)*descINSS)+auxilio
const salarioMai = (salario+comissaoMai)-((salario+comissaoMai)*descINSS)+auxilio
const salarioJun = (salario+comissaoJun)-((salario+comissaoJun)*descINSS)+auxilio

console.log(`Os salários liquidos de cada mês foram: Janeiro - ${salarioJan}, Fevereiro - ${salarioFev}, Março - ${salarioMar}, Abril - ${salarioAbr}, Maio - ${salarioMai}, e Junho - ${salarioJun}`)

const pergunta5 = (((salario+auxilio)*6)+(comissaoJan+comissaoFev+comissaoMar+comissaoAbr+comissaoMai+comissaoJun))/6
console.log(`A média salarial do Fulado nos 6 meses é de: R$ ${pergunta5}`) */



 */