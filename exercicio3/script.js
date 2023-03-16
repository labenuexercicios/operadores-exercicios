//PARTE 1 

/*const operacao1 = 27>80 && 84<68;
console.log(operacao1)

const operacao2 = 5 == 5 ||  5 == "5"
console.log(operacao2)

const operacao3 = !(20>50)
console.log(operacao3)

const operacao4 = !(20>50 || 50 > 60)
console.log(operacao4)*/
  //---------------------------------------------------------------------

  //PARTE 2 

  const salario = 2000
  const auxilioCreche = 45.50
  //Questão 1
  console.log(`O salário fixo mais o auxilio creche é de: ${salario + auxilioCreche}`)

  // Questão 2

  const vendasJaneiro = 5784.50
  const vendasFevereiro = 3418.41
  const vendasMarço = 4124.10
  const vendasAbril = 1874.00
  const vendasMaio = 7000.00
  const vendasJunho = 9450.00

  const comissaoDeJaneiro = vendasJaneiro*0.1
  console.log(`Fulano de Silva receberá R$${comissaoDeJaneiro} de comissão em janeiro`)


//Questão 3 

const salarioMaisComissaoJaneiro = salario +  comissaoDeJaneiro
const descontoInssJan = salarioMaisComissaoJaneiro*0.05
console.log(`Fulano de Silva será descontado em janeiro pelo INSS o valor de: ${descontoInssJan.toFixed(2)}`)

// Questão 4 

const salarioTodosMeses = salario * 6

const comissaoFev = vendasFevereiro*0.1
const comissaoMar = vendasMarço*0.1
const comissaoAbr = vendasAbril*0.1
const comissaoMaio = vendasMaio*0.1
const comissaojun = vendasJunho*0.1

const comissaoTodosMeses = comissaoDeJaneiro + comissaoFev + comissaoMar + comissaoAbr + comissaoMaio + comissaojun 

const descontoInssFeve = (salario + comissaoFev)*0.05
const descontoInssMar = (salario + comissaoMar)*0.05
const descontoInssAbr = (salario + comissaoAbr)*0.05
const descontoInssMai = (salario + comissaoMaio)*0.05
const descontoInssJun = (salario + comissaojun)*0.05

const descontoInssTodosMeses = descontoInssJan + descontoInssFeve + descontoInssAbr + descontoInssMai + descontoInssJun


console.log(`o cálculo do salário de todos os meses com acréscimos e descontos de fulano de Silva é de: R$${(salarioTodosMeses + comissaoTodosMeses - descontoInssTodosMeses).toFixed(2)}`)

// Questão 5 

//const mediaSalarial = salarioTodosMeses + (auxilioCreche*6) + 

console.log(`A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio é de: R$${((salarioTodosMeses + (auxilioCreche*6) + comissaoTodosMeses - descontoInssTodosMeses)/6).toFixed(2)}`)