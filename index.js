const entrada = require('prompt-sync')();

console.log('Hello Word');

let nome = entrada('Digite seu nome: ');

console.log('Olá' + nome);

let idadeTxt = entrada(nome + 'quantos anos você tem?');
let idade = parseInt(idadeTxt);

let resposta = 'n';
if (idade <15) {
    console.log('Acredito que você esteja no ensino fundamental. \nEstou certo? (responda s/n)');
 } else if (idade > 15 && idade < 18) {
    resposta = entrada('Acredito que você esteja no ensino médio. \nEstou certo? (responda s/n)');
 } else {
    resposta = entrada('Acredito que você ja tenha terminado o ensino médio. \nEstou certo? (responda s/n)');
 }

 if (resposta === 'n'){
    console.log('Ok eu não sei de tudo!');
 } else{
    console.log('Legal, quando eu crescer vou ser igual ao CHAT GPT!');
 }


entrada('Fim de programa, pressione ENTER para encerrar!');