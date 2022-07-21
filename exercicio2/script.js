alert("Escolha dois números quaisquer e insira a seguir nos espaços A e B")
let A = prompt("número A:  ")
let B = prompt("número B:  ")

const m1 = "O primeiro numero é maior que o segundo?"
const p1 = (A >= B) 
const rp1 = console.log(p1)
const resultado1 = Boolean(rp1)
alert(m1)
alert(resultado1)

const m2 = "O primeiro numero é igual ao segundo?"
const p2 = (A == B)
const rp2 = console.log(p2)
const resultado2 = Boolean(rp2)
alert(m2) 
alert(resultado2)

const m3 = "O primeiro numero é divisível pelo segundo?"
const p3 = (A % B == 0)
const rp3 = console.log(p3)
const resultado3 = Boolean(rp3)
alert(m3) 
alert(resultado3)

const m4 = "O segundo numero é divisível pelo primeiro?"
const p4 = (B % A == 0)
const rp4 = console.log(p4)
const resultado4 = Boolean(rp4)
alert(m4) 
alert(resultado4)