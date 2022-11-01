const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)

const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)

const operacao3 = !(20 > 50)
console.log(operacao3)

const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao4)

salariobase = 2000
creche = 91
comissao = 0.10
janeiro = 5784.50
fevereiro = 3418.41
marco = 4124.10
abril = 1874
maio = 7000
junho = 9450
inss = 0.05
salario1 = salariobase + creche
salario2 = comissao * janeiro
salario3 = (salariobase + salario2) * inss
salariojaneiro = (comissao * janeiro + salario1) * 0.95
salariofevereiro = (comissao * fevereiro + salario1) * 0.95
salariomarco = (comissao * marco + salario1) * 0.95
salarioabril = (comissao * abril + salario1) * 0.95
salariomaio = (comissao * maio + salario1) * 0.95
salariojunho = (comissao * junho + salario1) * 0.95
console.log(salario1)
console.log(salario2)
console.log(salario3)
console.log("salário de janeiro", salariojaneiro)
console.log("salário de fevereiro", salariofevereiro)
console.log("salário de março", salariomarco)
console.log("salário de abril", salarioabril)
console.log("salário de maio", salariomaio)
console.log("salário de junho", salariojunho)
salariomedia = (salariojaneiro + salariofevereiro + salariomarco + salarioabril + salariomaio + salariojunho) / 6
console.log("a média do salário dos 6 meses citados foi", salariomedia) 

//