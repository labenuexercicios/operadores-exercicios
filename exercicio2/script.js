const primeiroNumero = prompt('digite o primeiro numero');
    const segundoNumero = prompt('digite o segundo numero')

    console.log('o primeiro numero é maior que o segundo?', +primeiroNumero > +segundoNumero);
    console.log('o primeiro numero é igual ao segundo ?', +primeiroNumero === +segundoNumero);
    console.log('o primeiro numero é divisivel pelo segundo?', primeiroNumero % +segundoNumero === 0);
    console.log('o segundo numero é divisel pelo primeiro?', +segundoNumero % +primeiroNumero ===0);
    
    console.log('divisível = com resto zero')