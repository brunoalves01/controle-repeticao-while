let soma = 0;
let resposta;

do {

    let numero = parseInt(prompt("Por gentileza, digite um número a ser somado:"));

    soma += numero;

    resposta = prompt("Deseja inserir outro número? (s/n)").toLowerCase();

} while (resposta === "s");

alert("Perfeito, a soma total é: " + soma);