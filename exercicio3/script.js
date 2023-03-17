//Exercício 3 - Parte 1
console.log(`a) ${5 > 20 && 5 < 2}`);
console.log(`b) ${5 === 5 || 5 === "5"}`);
console.log(`c) ${!(20 > 50)}`);
console.log(`d) ${!(20 > 50 || 50 > 60)}`);

console.log("");

//Exercício 3 - Parte 2
const salarioFixo = 2000;
const auxilioCreche = 45.5;
const numeroFilhos = 2;
const vendasJaneiro = 5784.5;
const vendasFevereiro = 3418.41;
const vendasMarco = 4124.1;
const vendasAbril = 1874.0;
const vendasMaio = 7000.0;
const vendasJunho = 9450.0;
const comissaoJaneiro = vendasJaneiro * 0.1;
const comissaoFevereiro = vendasFevereiro * 0.1;
const comissaoMarco = vendasMarco * 0.1;
const comissaoAbril = vendasAbril * 0.1;
const comissaoMaio = vendasMaio * 0.1;
const comissaoJunho = vendasJunho * 0.1;

//1.O salário fixo mais o auxílio creche:
console.log(
  `O valor do salário fixo mais o auxílio creche é: ${
    salarioFixo + auxilioCreche * numeroFilhos
  }`
);

//2.Quanto Fulano de Silva receberá de comissão em janeiro?
console.log(`Comissão de janeiro: ${vendasJaneiro * 0.1}`);

//3.Quanto Fulano de Silva será descontado em janeiro pelo INSS?
console.log(
  `Desconto do INSS em janeiro: ${(
    (salarioFixo + comissaoJaneiro) *
    0.05
  ).toFixed()}`
);

//4.Imprima no console o cálculo do salário de todos os seis meses com acréscimos e descontos.
console.log(
  `Cálculo do salário de janeiro com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoJaneiro * 0.05
  ).toFixed()}`
);

console.log(
  `Cálculo do salário de fevereiro com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoFevereiro * 0.05
  ).toFixed()}`
);

console.log(
  `Cálculo do salário de março com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoMarco * 0.05
  ).toFixed()}`
);

console.log(
  `Cálculo do salário de abril com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoAbril * 0.05
  ).toFixed()}`
);

console.log(
  `Cálculo do salário de maio com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoMaio * 0.05
  ).toFixed()}`
);

console.log(
  `Cálculo do salário de junho com acréscimos e descontos: ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoJunho * 0.05
  ).toFixed()}`
);

//5.A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
console.log(
  `A média do salário em seis meses ${(
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoJaneiro +
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoFevereiro +
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoMarco +
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoAbril +
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoMaio +
    salarioFixo +
    auxilioCreche * numeroFilhos +
    comissaoJunho / 6
  ).toFixed()}`
);
