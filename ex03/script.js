let numeroSecreto = 7;
let palpite;
let tentativas = 0;

do {

    palpite = parseInt(prompt("Olá, tente adivinhar um número secreto entre 1 e 10:"));

    tentativas++;

    if (palpite > numeroSecreto) {
        alert("O número secreto é menor!");
    }

    else if (palpite < numeroSecreto) {
        alert("O número secreto é maior!");
    }

} while (palpite !== numeroSecreto);

alert("Parabéns! Você acertou em " + tentativas + " tentativas.");