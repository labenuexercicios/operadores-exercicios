/* // Parte  1
// a

console.log((5 > 20) && 5 < 2) // false

// b

console.log(5 === 5 || 5 === "5") // true

// c

console.log(20 >! 50) // true

// d

console.log(20 >! 50 || 50 > 60) // true

*/

// Parte 2
// Salario fixo mais o auxilio creche
let salario = 2000
let creche = 45.50
let comissao = 10
let descontoINSS = salario * 0.05

const salarioMaisCreche = salario + (creche * 2)
console.log(salarioMaisCreche) // salario = 2091

// Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas
salario = 2000
comissao = 5784.50 * 0.10 // 578.45
console.log(comissao)
salarioMaisComissao = salario + comissao
console.log(salarioMaisComissao) // 2578.45
descontoInss= salarioMaisComissao * 0.05
console.log(descontoInss) // 128.92249999999999

// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
salario = (2000 * 6) // 12000
let vendasJa = 5784.50 * 0.10
let vendasFev = 3418.41 * 0.10
let vendasMar = 4124 * 0.10
let vendasAbr = 1874 * 0.10
let vendasMai = 7000 * 0.10
let vendasJun = 9450 * 0.10
creche = (45.50 * 2) * 6 // 546
descontoInss = (salario * 0.05) + (vendasJa + vendasFev + vendasMar + vendasAbr + vendasMai + vendasJun * 0.05)

total = (salario + vendasJa + vendasFev + vendasMar + vendasAbr + vendasMai + vendasJun) - descontoInss
console.log(total) // 12297.75

/* A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
 */ 
salario = 2000
creche = 45.50 * 2
let salarioJan = salario + vendasJa + creche
let salarioFev = salario + creche + vendasFev
let salarioMar = salario + creche + vendasMar
let salarioAbr = salario + creche + vendasAbr
let salarioMai = salario + creche + vendasMai
let salarioJun = salario + creche + vendasJun

media = (salarioJan + salarioFev + salarioMar + salarioAbr + salarioMai + salarioJun) / 6
console.log(media) // 2618.5151666666666