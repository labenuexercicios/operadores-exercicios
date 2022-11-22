// let operacaoA = (5 > 20 && 5 < 2);

// let operacao B = (5 === 5 || 5 === "5");

// let operacao C = !(20 > 50);

// let operacao D = !(20 > 50 || 50 > 60);

// PARTE 2 //

const salarioInicial = 2000;

const auxilioCreche = 45.5;

const comissao = 0.1;

const vendasJan = 5785.5;
const vendasFev = 3418.41;
const vendasMar = 4124.1;
const vendasAbr = 1874;
const vendasMai = 7000;
const vendasJun = 9450;

const descontoINSS = 0.05;

let salarioAuxilio = salarioInicial + auxilioCreche;

console.log(`O salário mais auxílio creche fica ${salarioAuxilio.toFixed(2)}`);

let comissaoJan = vendasJan * comissao;

console.log(
  `Em janeiro, Fulano recebeu ${comissaoJan.toFixed(2)} de comissão.`
);

let INSS = (salarioInicial + comissaoJan) * descontoINSS;

console.log(`O desconto do INSS será de R$${INSS.toFixed(2)}.`);

let salarioJan = salarioInicial + vendasJan * comissao;
let salarioFev = salarioInicial + vendasFev * comissao;
let salarioMar = salarioInicial + vendasMar * comissao;
let salarioAbr = salarioInicial + vendasAbr * comissao;
let salarioMai = salarioInicial + vendasMai * comissao;
let salarioJun = salarioInicial + vendasJun * comissao;

let mediaSalarial =
  (salarioJan +
    salarioFev +
    salarioMar +
    salarioAbr +
    salarioMai +
    salarioJun) /
  6;

console.log(
  `A média salarial do primeiro semestre é de R$${mediaSalarial.toFixed(2)}.`
);
