const op1 = 5 > 20 && 20 < 2;
console.log("5 é maior que 20 e também é menor que 2",
op1)

const op2 = 5 === 5 || 5 === "5";
console.log("5 é igual a 5 ou é igual a “5”",
 op2)

const op3 = 20>50;
console.log("negação de (vinte é maior que cinquenta)",
!op3)

const op4 = 20>50 || 50>60
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta",
!op4)

//Parte 2

let salario = 2.000
let filhos = 2
auxCreche = filhos * 45.50
fixoCreche = salario + auxCreche
console.log("O salário fixo mais o auxílio creche:",
fixoCreche)

let jan = 5784.50
comJan = jan * 0.1
console.log("Fulano da Silva recebera de comissao:", 
comJan)

comSalJan = salario + comJan
inssJan = comSalJan * 0.05
descJan = comSalJan - inssJan
console.log("Desconto Inss de Janeiro:", inssJan)

let fev = 3418.41
let mar = 4124.10
let abr = 1874.00
let mai = 7000.00
let jun = 9450.00
comFev = fev*0.1
comMar = mar*0.1
comAbr = abr*0.1
comMai = mai*0.1
comJun = jun*0.1
comSalFev = salario + comFev
comSalMar = salario + comMar
comSalAbr = salario + comAbr
comSalMai = salario + comMai
comSalJun = salario + comJun
inssFev = comSalFev * 0.05
inssMar = comSalMar * 0.05
inssAbr = comSalAbr * 0.05
inssMai = comSalMai * 0.05
inssJun = comSalJun * 0.05
descFev = comFev - inssFev
descMar = comMar - inssMar
descAbr = comAbr - inssAbr
descMai = comMai - inssMai
descJun = comJun - inssJun

console.log("Salario Total:")
console.log("Janeiro:", descJan + auxCreche )

salTotalFev = comSalFev - inssFev
console.log("Fevereiro:", descFev + auxCreche)

salTotalMar = comSalMar - inssMar
console.log("Março:", descMar + auxCreche)

salTotalAbr = comSalAbr - inssAbr
console.log("Abril:", descAbr + auxCreche)

salTotalMai = comSalMai - inssMai
console.log("Maio:", descMai + auxCreche)

salTotalJun = comSalJun - inssJun
console.log("Junho:", descJun + auxCreche)

medSalJan = comSalJan + auxCreche
medSalFev = comSalFev + auxCreche
medSalMar = comSalMar + auxCreche
medSalAbr = comSalAbr + auxCreche
medSalMai = comSalMai + auxCreche
medSalJun = comSalJun + auxCreche

medSal = medSalJan+medSalFev+medSalMar
medSal2 = medSal+medSalAbr+medSalMai+medSalJun
medSalTotal = medSal2 / 6
console.log("Media Salarial:", medSalTotal)



