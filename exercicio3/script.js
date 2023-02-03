
// Parte 1
const salario= 2000.00
const creche = 45.50
const comissao = 0.1 
const vjan = 5784.5
const vfev = 3418.41
const vmar = 4124.10
const vabr = 1874.00
const vmai = 7000.00
const vjun = 9450.00

// Parte 2

// Respostas
 const salarioauxilio = salario + (2*creche)
 console.log (`Salário mais creche: ${salarioauxilio}`)
 const questao2 = vjan*comissao
 questao2
 console.log (`Receberá de comissão em janeiro:${questao2}`)
 const questao3 = (questao2 + salario) * 0.05
 console.log (`Será descontado de inss em janeiro: ${questao3}`)

 // questao 4
 
 const salario1 = [salarioauxilio + (vjan*comissao)] 
 const inssjaneiro = salario1 * 0.05
 salariojaneiro = salario1 - inssjaneiro
 console.log (`O salário de Janeiro é: ${salariojaneiro}`)

 const salario2 = [salarioauxilio + (vfev*comissao)]
 const inssfevereiro = salario2 * 0.05
 salariofevereiro = salario2 - inssfevereiro 
 console.log (`O salário de fevereiro é: ${salariofevereiro}`)

 const salario3 = [salarioauxilio + (vmar*comissao)]
 const inssmarco = salario3 * 0.05
 salariomarco = salario3 - inssfevereiro 
 console.log (`O salário de março é: ${salariomarco}`)

 const salario4 = [salarioauxilio + (vabr*comissao)]
 const inssabril = salario4 * 0.05
 salarioabril = salario4 - inssabril 
 console.log (`O salário de abril é: ${salarioabril}`)

 const salario5 = [salarioauxilio + (vmai*comissao)]
 const inssmaio = salario5 * 0.05
 salariomaio = salario5 - inssmaio
 console.log (`O salário de fevereiro é: ${salariomaio}`)

 const salario6 = [salarioauxilio + (vjun*comissao)]
 const inssjunho = salario6 * 0.05
 salariojunho = salario6 - inssjunho 
 console.log (`O salário de fevereiro é: ${salariojunho}`)

 const mediasalarial = (salariojaneiro + salariofevereiro + salariomarco + salarioabril + salariomaio + salariojunho)/6
 console.log (`Média salarial dos últimos seis meses:${mediasalarial}`)





