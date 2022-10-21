//EXERCICIO 3

const operacao1 = 5 > 20 && 5 < 2;
console.log(operacao1);

const operacao2 = 5 === 5 || 5 === "5";
console.log(operacao2);

const operacao3 = !(20 > 50);
console.log(operacao3);

const operacao4 = !(20 > 50 || 50 > 60);
console.log(operacao4);

console.log("")
console.log("EXERCICIO 3")
console.log("PARTE 2")
console.log("")


//EXERCICIO3 
const salarioFixo = 2000;
const filhos = 2;
const auxilioCreche = 45 * filhos;
const comissao = 10;
const inss = 5; 

//vendas
const vendasJaneiro = 5784.50;
const vendasFevereiro = 3418.41;
const vendasMarco = 4124.10;
const vendasAbril = 1874.00;
const vendasMaio = 7000.00;
const vendasJunho = 9450.00;

//comissao
const comissaoJaneiro = (comissao / 100) * vendasJaneiro;
const comissaoFevereiro = (comissao / 100) * vendasFevereiro;
const comissaoMarco = (comissao / 100) * vendasMarco;
const comissaoAbril = (comissao / 100) * vendasAbril;
const comissaoMaio = (comissao / 100) * vendasMaio;
const comissaoJunho = (comissao / 100) * vendasJunho;

//salarioSemInss
const salarioJaneiro = salarioFixo + comissaoJaneiro + auxilioCreche;
const salarioFevereiro = salarioFixo + comissaoFevereiro + auxilioCreche;
const salarioMarco = salarioFixo + comissaoMarco + auxilioCreche;
const salarioAbril = salarioFixo + comissaoAbril + auxilioCreche;
const salarioMaio = salarioFixo + comissaoMaio + auxilioCreche;
const salarioJunho = salarioFixo + comissaoJunho + auxilioCreche;

//descontInss
const descontoInssJaneiro = (inss / 100) * salarioJaneiro;
const descontoInssFevereiro = (inss / 100) * salarioFevereiro;
const descontoInssMarco = (inss / 100) * salarioMarco;
const descontoInssAbril = (inss / 100) * salarioAbril;
const descontoInssMaio = (inss / 100) * salarioMaio;
const descontoInssJunho = (inss / 100) * salarioJunho;

//salarioFinal
const salarioFinalJaneiro = salarioJaneiro - descontoInssJaneiro;
const salarioFinalFevereiro = salarioFevereiro - descontoInssFevereiro;
const salarioFinalMarco = salarioMarco - descontoInssMarco;
const salarioFinalAbril = salarioAbril - descontoInssAbril;
const salarioFinalMaio = salarioMaio - descontoInssMaio;
const salarioFinalJunho = salarioJunho - descontoInssJunho;

//calculos
const pergunta1 = salarioFixo + auxilioCreche;
const mediaSalarial = (salarioFinalJaneiro + 
salarioFinalFevereiro + salarioFinalMarco +
salarioFinalAbril + salarioFinalMaio +
salarioFinalJunho) / 6;


console.log("O salário fixo mais o auxílio creche: R$" + pergunta1.toFixed(2));
console.log("Quanto Fulano de Silva receberá de comissão em janeiro R$" +comissaoJaneiro.toFixed(2));
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS R$" + descontoInssJaneiro.toFixed(2));
console.log("");
console.log("Salario final Janeiro: R$" + salarioFinalJaneiro.toFixed(2));
console.log("Salario final Fevereiro: R$" + salarioFinalFevereiro.toFixed(2));
console.log("Salario final Marco: R$" + salarioFinalMarco.toFixed(2));
console.log("Salario final Abril: R$" + salarioFinalAbril.toFixed(2));
console.log("Salario final Maio: R$" + salarioFinalMaio.toFixed(2));
console.log("Salario final Junho: R$" + salarioFinalJunho.toFixed(2));
console.log("");
console.log("Media Salarial: R$" + mediaSalarial.toFixed(2));



