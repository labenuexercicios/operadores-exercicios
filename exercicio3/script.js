console.log("Exercise 3")

// 1) O salário fixo mais o auxílio creche
const salárioMensal = 2000
const auxílioCreche = 45.50 
const comissão = 0.10
console.log(salárioMensal + auxílioCreche * 2)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro 
const janVendas = 5784.50
console.log(janVendas * comissão)

/* 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
   (o valor a ser calculado deve levar em consideração: 
   o salário + porcentagem de vendas) */
let grossSalárioJan = 2578.45
const descontoInss = 0.05
console.log(grossSalárioJan * descontoInss)

/* 4) Imprima no console o cálculo do salário 
de todos os meses com acréscimos e descontos. */

const janComissão = 578.45
const fevComissão = 341.84
const marComissâo = 412.41
const abrComissão = 187.40
const maiComissão = 700
const junComissão = 945
const inssTotalSeisMeses = 785.55
console.log(janComissão + fevComissão + marComissâo +abrComissão + maiComissão + junComissão + (salárioMensal * 6) + ((auxílioCreche * 2) * 6) - inssTotalSeisMeses)

/* 5) A média do salário em seis meses (de janeiro a junho), 
levando em consideração as comissões e auxílio. */
let adjustedSalário = 14925.55
console.log(adjustedSalário / 6)