let var1 = 5
let var2 = 20
let var3 = 2

if(var1 < var2 && var1 > var3)
    console.log("Falso, var1 não é > var2 e var1 não é > var3")

if(var1 === var1 || var1 === "5")
    console.log("True, var1 = var1, mas var1 != "5" ")

var1 = 50
var2 = 20
var3 = 60

if(var2 >! var1)
    console.log("True, 20 > 50")

if(var2 >! var1 || !var2 >! var3)
    console.log("True, 20 > 50, ou 50 > 60")


let salario = 2000
let axf = 45.50
let cm = 10
let vjaneiro = (5784 * (cm/100)) //c2
let vfevereiro = 3418.41 * (cm/100)
let vm = 4124.10 * (cm/100)
let va = 1874.00 * (cm/100)
let vmaio = 7000 *(cm/100)
let vjunho = 9450 * (cm/100)

let somacomissao = vjaneiro + vfevereiro + vm + va + vmaio + vjunho 
console.log(somacomissao)
let smaisa = salario + (2*axf) //c1
console.log(smaisa)

let descontj = ((salario + vjaneiro) * 0.05) //c3
console.log(descontj)
let descontf =((salario + vfevereiro) * 0.05)
let descontm =((salario + vm) *0.05)
let desconta =((salario + va) * 0.05)
let descontmaio =((salario + vmaio) * 0.05)
let descontjunho =((salario + vjunho) * 0.05)
let somadesc = descontj + descontf + descontm + desconta + descontmaio + descontjunho
console.log(somadesc)

let valorfinal = ((smaisa *6) + somacomissao) - somadesc // c4
console.log(valorfinal.toFixed(2)) 

let mediasal = ((smaisa + vjaneiro) + (smaisa + vfevereiro) + (smaisa + vm) + (smaisa + va) + (smaisa + vmaio) + (smaisa + vjunho)) /6
console.log("Média salarial", mediasal.toFixed(2))