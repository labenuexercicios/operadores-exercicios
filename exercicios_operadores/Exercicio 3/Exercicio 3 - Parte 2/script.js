// comentario em linha

/* comentario 
                em 
                            bloco */

console.log ("HELLO !");

const nome = prompt ("Digite seu nome ?");
const nasc = prompt ("Digite sua data de nascimento (dd/mm/aaaa)");
const end = prompt ("Digite seu endereco");
const cpf = prompt ("Digite seu CPF");
const esco = prompt ("Informe seu grau de escolaridade");
const cnh = prompt ("Digite sua CNH");
let filhos = Number(prompt ("Quantos filhos possui")) ;
let cargo = prompt ("Qual seu cargo atual ?");
let salario = Number(prompt ("Informe o valor do seu salario atual ?"));
/* let comi = salario * 0.10 ; */
const admi = prompt ("Informe o ano de admissao ?");
const auxCreche = (45.5 * filhos) ;
const vJan = 5784.50 * 0.10 ;
const vFev = 3418.41 * 0.10   ;
const vMar = 4124.10 * 0.10  ;
const vAbri = 1874.00 * 0.10  ;
const vMai = 7000.00 * 0.10  ;
const vJun = 9450.00 * 0.10  ;
const inss = (salario + auxCreche) - (salario * 0.05) ;
const mediaSal = (((inss + auxCreche  + vJan) + (inss + auxCreche  + vFev) + (inss + auxCreche  + vMar) + (inss + auxCreche  + vAbri) + (inss + auxCreche  + vMai) + (inss + auxCreche  + vJun)) / 6).toFixed(2);    
console.log(typeof nome);
console.log(typeof nasc);
console.log(typeof end);
console.log(typeof cpf);
console.log(typeof esco);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargo);
console.log(typeof salario);
console.log(typeof comi);
console.log(typeof admi);

console.log(`Relatorio do funcionario ${nome}`, `, Data de nascimento: ${nasc}`);
console.log(`Endereco: ${end}`,`, Portador do CPF: ${cpf}`,`, Grau de escolaridade: ${esco}`);
console.log(`Portador da CNH: ${cnh}`,`, Possui ${filhos} filhos`, `, Atualmente trabalha como ${cargo}`);
console.log(`Salario atual R$${salario}`,`, Recebe 10% de comissao`, `, Foi admitido no ano de ${admi}`);
console.log(`Relatorio Financeiro do funcionario`,`Salario fixo mais o auxilio creche: R$${salario + auxCreche}`);
console.log(`Relatorio de comissao Janeiro: R$${vJan}`);
console.log(`Desconto INSS Janeiro: ${((vJan + salario + auxCreche ) * 0.05).toFixed(2)}`);
console.log(`Relatorio Financeiro Mensal (Janeiro - Junho):`);
console.log(`Janeiro: R$${((salario + auxCreche + vJan) * 0.05).toFixed(2)}`);
console.log(`Fevereiro: R$${((salario + auxCreche + vFev) * 0.05).toFixed(2)}`);
console.log(`Marco: R$${((salario + auxCreche + vMar) * 0.05).toFixed(2)}`);
console.log(`Abril: R$${((salario + auxCreche + vAbri) * 0.05).toFixed(2)}`);
console.log(`Maio: R$${((salario + auxCreche + vMai) * 0.05).toFixed(2)}`);
console.log(`Junho: R$${((salario + auxCreche + vJun) * 0.05).toFixed(2)}`);
console.log(`Media salarial semestral: R$${mediaSal}`);


