let var1 = Number(prompt("Digite um número x:"))
let var2 = Number(prompt("Digite outro y:"))

if(var1 > var2)
    console.log("True, x > y")

if(var1 % var2 == 0)
    console.log("True, x é divisivel por y")

if(var2 % var1 == 0)
    console.log("True, y é divisivel por x")

if(var1 < var2)
    console.log("False, x < y")

if(var1 === var2)
    console.log("True, x = y")