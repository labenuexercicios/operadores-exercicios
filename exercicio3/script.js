//EXERCÍCIO 3

//PARTE 1

// let valorA = 5 > 20 && 5 < 2
// console.log("Valor A é: ", valorA);

// let valorB = 5 === 5 || 5 === "5"
// console.log("Valor B é: ", valorB);

// let valorC = !(20 > 50);
// console.log("Valor C é: ", valorC);

// let valorD = !(20 > 50 || 50 > 60);
// console.log("Valor D é: ", valorD);

//PARTE 2

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00,
 Nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. 
 Possui habilitação? Sim. Ocupa o cargo de vendedor.
 Recebe um salário de 2.000,00 reais, 
 Mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.*/

 let nomeCompleto = prompt("Nome Completo do Funcionário:");
 console.log("Nome Completo do Funcionário:", nomeCompleto);
 
 let dataNascimento = prompt("Data de Nascimento do Funcionário:");
 console.log("Data de Nascimento do Funcionário:", dataNascimento);
 
 let endereco = prompt("Qual é o endereço do Funcionário:");
 console.log("Endereço do Funcionário:", endereco);
 
 let cpf = prompt("Qual é o CPF do Funcionário:")
 console.log("CPF do Funcionário:", cpf)
 
 let escolaridade = prompt("Qual é a escolaridade do Funcionário:")
 console.log("Escolaridade do Funcionário:", escolaridade)
 
 let cnh = prompt("O Funcionário possui CNH?")
 console.log("O Funcionário possui CNH?", cnh)
 
 let filhos = Number(prompt("O Funcionário tem filhos? se sim, quantos? se não, digite 0."))
 console.log("Quantidade de filhos do Funcionário:", filhos)
 
 let cargoAtual = prompt("Qual é o cargo atual do Funcionário:")
 console.log("Cargo atual do Funcionário:", cargoAtual)
 
 let salarioFixo = Number(prompt("Qual é o salário fixo do Funcionário:"))
 console.log("Salário fixo do Funcionário:", salarioFixo)
 
 let comissao = Number(prompt("O Funcionário recebe comissão? se sim, digite a porcentagem."))
 console.log("Valor da Comissão:", comissao)
 
 let anoAdmissao = Number(prompt("Qual o ano de admissão do Funcionário:"))
 console.log("Ano de admissão do Funcionário:", anoAdmissao)
 
 //Calcule:
 //a) o salário fixo + o auxílio creche:
 
 let auxCreche = 45.50*filhos
 
 let salarioComAuxCreche = salarioFixo + auxCreche
 console.log("O salário do Funcionário", nomeCompleto, "com Auxilio Creche é de:", salarioComAuxCreche)
 
 /*b) Quanto Fulano de Silva receberá de comissão em janeiro 
 ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)*/
 
 const comissaoJan = (salarioComAuxCreche + (5784.50 * comissao))
 const comissaoFev = (salarioComAuxCreche + (3418.41 * comissao))
 const comissaoMar = (salarioComAuxCreche + (4124.10 * comissao))
 const comissaoAbr = (salarioComAuxCreche + (1874 * comissao))
 const comissaoMai = (salarioComAuxCreche + (7000 * comissao))
 const comissaoJun = (salarioComAuxCreche + (9450 * comissao))
 
 console.log("A comissão que", nomeCompleto, ", receberá em Janeiro será de: R$", comissaoJan)
 
 /* c)Quanto Fulano de Silva será descontado em janeiro pelo INSS 
 ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)*/
 
 let descInss = 0.05
 
 let descInssJan = comissaoJan - (comissaoJan * descInss)
 let descInssFev = comissaoFev - (comissaoFev * descInss)
 let descInssMar = comissaoMar - (comissaoMar * descInss)
 let descInssAbr = comissaoAbr - (comissaoAbr * descInss)
 let descInssMai = comissaoMai - (comissaoMai * descInss)
 let descInssJun = comissaoJun - (comissaoJun * descInss)
 
 /* d)Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.*/
 
 console.log("O salário de Janeiro de,", nomeCompleto, "será de:", descInssJan)
 console.log("O salário de Fevereiro de,", nomeCompleto, "será de:", descInssFev)
 console.log("O salário de Março de,", nomeCompleto, "será de:", descInssMar)
 console.log("O salário de Abril de,", nomeCompleto, "será de:", descInssAbr)
 console.log("O salário de Maio de,", nomeCompleto, "será de:", descInssMai)
 console.log("O salário de Junho de,", nomeCompleto, "será de:", descInssJun)
 
 //A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
 
 let mediaSalarialBruta = ((descInssJan + descInssFev + descInssMar + descInssAbr + descInssMai + descInssJun) / 6)
 console.log("A média salarial bruta dos primeiros seis meses de", nomeCompleto, ", é de:", mediaSalarialBruta)