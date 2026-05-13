let senhaCorreta = "1234";
let senhaDigitada;

do {
senhaDigitada = prompt("Por gentileza, insira sua senha de acesso:");
} while (senhaDigitada !== senhaCorreta);

alert("Acesso Permitido");