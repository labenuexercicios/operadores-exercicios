let nome1 = prompt('Diga seu Nome e responda com Sinceridade!')
let numPar = Number(prompt('Insira um Numero PAR'));
window.nome1;
window.numPar;
console.log(numPar)
res1 = numPar % 2 ; 
// Ao inserir um numero par o resto e 0
// Ao inserir um numero impar o resto e 1 



document.addEventListener('DOMContentLoaded', ()=>{
    let res01= document.getElementById('exercicio1');

    res01.innerHTML+=`
    <h2 class="rf"> Boa TARDE! ${nome1}</h2>
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
    
})
