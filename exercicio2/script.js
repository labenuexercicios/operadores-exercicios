/*
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? 
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero
*/

let nome1 = prompt('Diga seu Nome e responda com Sinceridade!')
let n1 = Number(prompt('Insira um Numero Qualquer'));
let n2 = Number(prompt('Insira um Numero Qualquer'));

window.nome1;
console.log(nome1)
window.n1
console.log(n1)
window.n2
console.log(n2)


let res01= document.getElementById('exercicio1');
let r1 = n1 > n2;
console.log(' O primeiro numero é maior que segundo? ' + r1)
let r2 = n1 == n2;
console.log('O primeiro numero é igual ao segundo? ' + r2)

let r3 = (n1 / n2) % 2 == 0;
console.log('O primeiro numero é divisível pelo segundo? ' + r3)

let r4 = (n2 / n1) % 2 == 0;
console.log('O segundo numero é divisível pelo primeiro? ' + r4)



document.addEventListener('DOMContentLoaded', ()=>{

    
    
    res01.innerHTML+=`
    <h2 class="rf"> Boa TARDE! ${nome1}</h2>
    <p class="ru">
        Seu numero escolhido foram ${n1} e ${n2} 
    </p>
    <br>
    <p class="resposta">
    O primeiro numero é MAIOR que segundo? 
    </p>
    <hr/>
    <p class="ru">
    ${r1}
    </p>
    <hr>
    <br>
    <p class="resposta">
    O primeiro numero é IGUAL que segundo? 
    </p>
    <p class="ru">
    ${r2}
    </p>
    <hr>
    <br>
    <p class="resposta">
    O primeiro numero é divisível pelo segundo? 
    </p>
    <p class="ru">
    ${r3}
    </p>
    <hr>
    <br>
    <p class="resposta">
    O segundo numero é divisível pelo primeiro? 
    </p>
    <p class="ru">
    ${r4}
    </p>
    <hr>
    <br>
  ` 
    
})
