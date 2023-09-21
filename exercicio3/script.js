/* Escrevi esses console.log para imprimir as operações descritas no exerc. */
console.log("Parte 1");
console.log(5 > 20 && 5 < 2);
console.log(5 === 5 || 5 === '5');
console.log(!(20 > 50));
console.log(!((20 > 50) || 50 > 60));


console.log("Parte 2");
/* Criei todas essas variáveis para guardar as informações contidas no texto e, posteriormente, utilizar para resolução dos exercícos. */
const filho = 2;
const salario = 2000;
const creche = 45.50 * filho;

const vendasJaneiro = 5784.50;
const vendasFevereiro = 3418.41;
const vendasMarco = 4124.10;
const vendasAbril = 1874.0;
const vendasMaio = 7000;
const vendasJunho = 9450;

const comissaoJaneiro = (10/100 * vendasJaneiro);
const comissaoFevereiro = (10/100 * vendasFevereiro);
const comissaoMarco = (10/100 * vendasMarco);
const comissaoAbril = (10/100 * vendasAbril);
const comissaoMaio = (10/100 * vendasMaio);
const comissaoJunho = (10/100 * vendasJunho);

console.log("Salário Fixo + Auxílio Creche: ", salario + creche);
console.log("Comissão de Janeiro: ", comissaoJaneiro);
console.log("Desconto do INSS em Janeiro: ", (5 / 100) * (salario + comissaoJaneiro));

console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoJaneiro) - 5 / 100 * (salario + comissaoJaneiro));
console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoFevereiro) - 5 / 100 * (salario + comissaoFevereiro));
console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoMarco) - 5 / 100 * (salario + comissaoMarco));
console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoAbril) - 5 / 100 * (salario + comissaoAbril));
console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoMaio) - 5 / 100 * (salario + comissaoMaio));
console.log("Salário de Janeiro, com comissão e desconto: ", (salario + comissaoJunho) - 5 / 100 * (salario + comissaoJunho));

/* Criei essas variáveis para guardar os pagamentos, de cada mês, com os adicionais de comissão e descontos do INSS. */
const pagamentoJaneiro = (salario + comissaoJaneiro) - 5 / 100 * (salario + comissaoJaneiro);
const pagamentoFevereiro = (salario + comissaoFevereiro) - 5 / 100 * (salario + comissaoFevereiro);
const pagamentoMarco = (salario + comissaoMarco) - 5 / 100 * (salario + comissaoMarco);
const pagamentoAbril = (salario + comissaoAbril) - 5 / 100 * (salario + comissaoAbril);
const pagamentoMaio = (salario + comissaoMaio) - 5 / 100 * (salario + comissaoMaio);
const pagamentoJunho = (salario + comissaoJunho) - 5 / 100 * (salario + comissaoJunho);

/* Calculando média dos pagamentos de todos os meses e imprimindo no console */
const mediaPagamentos = (pagamentoJaneiro + pagamentoFevereiro + pagamentoMarco + pagamentoAbril + pagamentoMaio) / 6;

console.log("Média do salário nos 6 meses: ", mediaPagamentos);
