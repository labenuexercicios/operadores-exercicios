
/*

let pessoa = prompt('qual seu nome?');
let cpf = prompt('qual seu cpf')
let nacimento = prompt('qual seu nacimento')
let endereco = prompt('seu endereco')
let filhos = Number(prompt('quantos filhos'))
let salario = Number(prompt('qual seu salario?'))
let admisao = prompt('qual ano comecou seu trabalho ')
let cnh = confirm('tem cnh ?')
let comissao = Number(prompt('tem comissao em %?'))
*/

/*
window.pessoa
console.log(pessoa)



window.cpf
console.log(cpf)



window.nacimento
console.log(nacimento)



window.filhos
console.log(filhos)

*/


/*
window.admisao
console.log(admisao)
window.cnh
console.log(cnh);

alert('Certo Agora vou pedir suas ULTIMAS 6 COMISSOES!')
*//*
window.c1
console.log(c1);
window.c2
console.log(c2)
window.c3
console.log(c3)
window.c4
console.log(c4)
window.c6
console.log(c6);


const inss = 0.05;
const primeiros6 =[
    5784.50
    ,3418.41
    ,4124.10
    ,1874.00
    ,7000.00
    ,9450.00
    ];
    console.log(primeiros6)

    const filhosFS = 2;
    */
/*let fSilva = (inss, comissoes, filhosFS, salarioFS) =>{
    const inss = 0.05
    const comissoes =[
    5784.50
    ,3418.41
    ,4124.10
    ,1874.00
    ,7000.00
    ,9450.00
    ];
    const filhosFS = 2;
    
    comissoes.forEach(comissoes[i] => {
        let semTributo  = ((filhosFS * 45.5) + (comissoes[i] * 0.1) + salarioFS)
        let tributoINSS = semINSS * inss{
            return 'salario INSS ' + fScomINSS + ' salario calculo inss ' + fScomINSS;
        }
    }
}*/
/*
const fsSilva = {
    filhos : 2,
    salarioFS: 4500,
    comissaoFS: 0.1,
    primeiros6 :[
    5784.50,
    3418.41,
    4124.10,
    1874.00,
    7000.00,
    9450.00
    ]
}
    fsSilva.primeiros6.forEach((umaComissao) => {
    
        console.log(umaComissao * 0.1)
       });
       
let auxilioFilho = (filhos) =>{
    return filhos * 45.5;
}


let salarioCheio (comissao, primeiros6, filhos)
    /*
let semINSS = ((filhos * 45.5) + (comissao * 0.1) + salario )

console.log(semINSS)
let comINSS =  semINSS - (semINSS * inss)
console.log(' SALARIO FINAL ' + comINSS)


*/
/*
document.addEventListener('DOMContentLoaded', ()=>{
    let res01= document.getElementById('exercicio1');
    let res02= document.getElementById('exercicio2');

    res01.innerHTML+=`
    <h2 class="rf"> PARTE #01</h2>
    <p class="resposta">
        Seu numero escolhido foi ${numPar} 
    </p>
    <hr/>
    <p class="resposta">
    Assim como o resto de TODO NUMERO PAR tem resto = 0 ; 
</p>
<p class="resposta"> Todo Numero IMPAR TEM RESTO = 1</p>
<hr/>
<p class="rf">Por isso o resto de ${numPar} equivale ${res1}</p>
    ` 
    
})*/
/*let funcionario = prompt('qual seu nome');
let cpf = prompt('qual e seu cpf');
let endereco = prompt('qual e seu endereco');
let diaNiver = Number(prompt('indique seu dia aniversario'));
let mesNiver = Number(prompt('indique seu mes de aniversario'))
let anoNiver = Number(prompt('Indique ANO de aniversario'))*/
/*const comissaoAno = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];*/

/*let cnh = confirm('Voce Tem CNH? CONFIRME em caso que SIM!')
let inicioEmprego = Number(prompt('que ano voce comecou a trabalhar'))

/* constantes */
//let salarioBonus = comissoes[i]*0.1;
const filhos = 2;
const salarioCheio = 2000;
console.log(filhos, salarioCheio);
let bonusFamilia = filhos * 45.5;
console.log(bonusFamilia)
console.log(salarioCheio)
let tributosINSS = salarioCheio * 0.05;
let c6M = (5784.50 + 3418.41 + 4124.10 + 1874.00 + 7000.00 + 9450.00) * 0.1
console.log(c6M)
let calculoFinalFS = c6M + salarioCheio + bonusFamilia;
console.log(calculoFinalFS)
let media = calculoFinalFS/6;

