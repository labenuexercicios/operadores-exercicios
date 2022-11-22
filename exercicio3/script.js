


console.log(5>20 && 5<2)
console.log(5==5 || 5=="5")
console.log(!(20>50))
console.log(!(20>50 || 50>60))


//PARTE 2

const salarioFixo = 2000

const creche = 91

const comissao = 10/100

const vendasJan = 5784.5
const vendasFev = 3418.41
const vendasMar = 4124.1
const vendasAbr = 1874
const vendasMai = 7000
const vendasJun = 9450

const descontoINSS = 5/100


console.log("O salário fixo mais auxílio creche é de:", salarioFixo + creche)
console.log("Em janeiro, Fulano receberá de comissão:", vendasJan*comissao)
console.log("Em janeiro, Fulano será descontado pelo INSS em:", (vendasJan + vendasJan*comissao)*descontoINSS)

console.log("Salário de cada mês com acréscimos e descontos:")

salarioJan = (vendasJan + vendasJan*comissao) - (vendasJan + vendasJan*comissao)*descontoINSS + creche
console.log("Janeiro:", salarioJan)

salarioFev = (vendasFev + vendasFev*comissao) - (vendasFev + vendasFev*comissao)*descontoINSS + creche
console.log("Fevereiro:", salarioFev)

salarioMar = (vendasMar + vendasMar*comissao) - (vendasMar + vendasMar*comissao)*descontoINSS + creche
console.log("Março:", salarioMar)

salarioAbr = (vendasAbr + vendasAbr*comissao) - (vendasAbr + vendasAbr*comissao)*descontoINSS + creche
console.log("Abril:", salarioAbr)

salarioMai = (vendasMai + vendasMai*comissao) - (vendasMai + vendasMai*comissao)*descontoINSS + creche
console.log("Maio:", salarioMai)

salarioJun = (vendasJun + vendasJun*comissao) - (vendasJun + vendasJun*comissao)*descontoINSS + creche
console.log("Junho:", salarioJun)

console.log("Média de salário de Janeiro a Junho:", (salarioJan+salarioFev+salarioMar+salarioAbr+salarioMai+salarioJun)/6)