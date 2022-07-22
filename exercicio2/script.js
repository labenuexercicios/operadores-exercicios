const  numeroA = +prompt('digite um numero') 
const  numeroB = +prompt('digite um numero')  
const oPrimeiroEMaiorQueOSegundo = numeroA > numeroB 
const oPrimeiroNumeroEIgualAoSegundo = numeroA === numeroB 
const oPrimerioNumeroEDivisivelPeloSegundo = numeroA % numeroB === 0 
const oSegubdoNumeroEDivisivelPeloPrimeiro = numeroB % numeroA === 0
 
console.log('O primeiro numero é maior que segundo?', oPrimeiroEMaiorQueOSegundo) 
console.log('O primeiro numero é igual ao segundo?', oPrimeiroNumeroEIgualAoSegundo) 
console.log('O primeiro numero é divisível pelo segundo?', oPrimerioNumeroEDivisivelPeloSegundo) 
console.log('O segundo numero é divisível pelo primeiro?', oSegubdoNumeroEDivisivelPeloPrimeiro)