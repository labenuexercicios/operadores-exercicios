// PRÁTICA GUIADA 1

let saldo = 15
saldo = saldo + 22.40
console.log(`O novo valor de saldo é: ${saldo}`)
//Resultado é de: 37.40

saldo = saldo - 12.34
console.log(`O valor de saldo após a diminuição é: ${saldo}`)
//Resultado é de: 25.06

saldo = saldo / 2
console.log(`O valor restante para cada irmão é de: ${saldo}`)
// Resultado: 12.53 para cada

saldo = (saldo * 3.42).toFixed(2)
console.log(`Após a aplicação, o valor de saldo é de: ${saldo}`)
//Resultado: 42.85

saldo = (saldo % 3).toFixed(2)
console.log(`Após a divisão, o resto ficou no valor de: ${saldo}`)

// PRÁTICA GUIADA 2

const num1 = 12
const num2 = 5

console.log(`O primeiro número é igual ao segundo? - ${num1 === num2}`)
console.log(`O primeiro número é menor ou igual ao segundo? - ${num1 <= num2}`)
console.log(`O primeiro número é maior que o segundo? - ${num1 > num2}`)
console.log(`O primeiro número é menor que o segundo? - ${num1 < num2}`)

// EXERCICIO DE FIXAÇÃO 1

const idade = Number(prompt('Qual é a sua idade?'))
const idadeAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))
    console.log(`Sua idade é maior que a do seu melhor amigo? - ${idade > idadeAmigo}`)
    console.log(`A diferença de idade entre vocês é de: ${idade - idadeAmigo}`)


// EXERCICIO DE FIXAÇÃO 2

const A = 'Vou para a praia!'
const praiaBoolean = true
const B = 'Sou maior de idade'
const idadeBoolean = true
const C = 'Posso tomar uma cervejinha'
const cervejinhaBoolean = true
const D = 'Quero passear de carro'
const carroBoolean = true

//Não sou maior de idade E quero passear de carro
const operacao1 = !idadeBoolean && carroBoolean
console.log(`Não sou maior de idade e quero passear de carro - ${operacao1}`)

//Sou maior de idade E vou para a praia, E não quero passear de carro
const operacao2 = idadeBoolean && praiaBoolean && !carroBoolean
console.log(`Sou maior de idade e vou para a praia, e não quero passear de carro - ${operacao2}`)

//Vou para a praia OU quero passear de carro
const operacao3 = praiaBoolean || carroBoolean
console.log(`Vou para a praia ou quero passear de carro - ${operacao3}`)

//Posso tomar uma cervejinha E não vou passear de carro
const operacao4 = cervejinhaBoolean && !carroBoolean
console.log(`Posso tomar uma cervevinha e não vou passear de carro - ${operacao4}`)


// EXERCICIO 1

const numeroPar = Number(prompt('Digite um número par:'))
console.log(`O resto da divisão de ${numeroPar} é de: ${numeroPar % 2}`)
console.log('O resto sempre será 0, pois é o resultado da divisão de um número par por dois')

const numeroImpar = Number(prompt('Digite um número impar:'))
console.log(`O resto d divisão de ${numeroImpar} é de: ${numeroImpar % 2}`)
console.log('O resto sempre terá algum valor diferente/quebrado pois números impares não podem ser divididos de forma exata por 2')































/* 
//PARTE 1
let saldo = 15
saldo = saldo + 22.40
console.log(`O novo valor de saldo é ${saldo}`)

//PARTE 2
saldo = saldo - 12.34
console.log(`O novo valor de saldo após o gasto é de: ${saldo}`)

//PARTE 3
saldo = saldo / 3
console.log(`O novo valor de saldo após a divisão com os brother é de: ${saldo}`)

//PARTE 4
saldo = saldo * 3.42
console.log(`O novo valor de saldo após a aplicação milionária é de: ${saldo}`)

//PARTE 5
saldo = saldo % 3
console.log(`O saldo para o chiquete é de: ${saldo}`)


//IGUAL E DIFERENTE

//EXEMPLO 1

const resultado1 = 5===5
console.log (`Comparação 1: ${resultado1}`)

const resultado2 = 5!==5
console.log (`Comparação 2: ${resultado2}`)

const resultado3 = 5!=="5"
console.log(`Comparação 3: ${resultado3}`)

const resultado4 = "5"==="cinco"
console.log(`Comparação 4: ${resultado4}`)

const resultado5 = typeof 5 === typeof 20
console.log(`Comparação 5: ${resultado5}`)

const resultado6 = typeof "5" === typeof "cinco"
console.log(`Comparação 6: ${resultado6}`)


//MENOR OU IGUAL









// EXERCICIO DE FIXAÇÃO A

const minhaIdade = prompt('Qual é a sua idade?')
const idadeAmigo = prompt('Qual é a idade do seu melhor(a) amigo(a)?')
const comparacao = minhaIdade>idadeAmigo


console.log(`Sua idade é maior que a do seu amigo(a) ${comparacao}`)
const diferenca = minhaIdade-idadeAmigo
console.log(`A diferença de idade entre vc e seu amigo(a) é: ${diferenca}`)

//EXERCICIO DE FIXAÇÃO B

const a = 'vou pra praia'
const aBoolean = true
const b = 'sou maior de idade'
const bBoolean = true
const c = 'posso tomar uma cervejinha'
const cBoolean = true
const d = 'quero passear de carro'
const dBoolean = true

//Não sou maior de idade e quero passear de carro
const op1 =!bBoolean &&aBoolean
console.log(`Não sou maior de idade e quero passear de carro - ${op1}`)

//Sou maior de idade e vou para a praia, e não quero passear de carro
const op2 = (bBoolean&&aBoolean)&&!dBoolean
console.log(`Sou maior de idade e vou para a praia, e não quero passear de carro - ${op2}`) 

//Vou para a praia ou quero passear de carro
const op3 = (aBoolean||dBoolean)
console.log(`Vou para a praia ou quero passear de carro - ${op3}`)

//Posso tomar uma cervejinha e não vou passear de carro
const op4 = aBoolean&&!dBoolean
console.log(`Posso tomar uma cervejinha e não vou passear de carro - ${op4}`)

 */