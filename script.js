

//variavel_01
//let num = prompt ('Digite um número')

//atv 1
/*function verificPar(){
    if (num % 2 === 0 ){
        console.log(num + ' é um número é par');
    } else{
        console.log( num +' é um número é ímpar');
    }
}

verificPar(num);
//fim atv 1



//variavel_02
let num2 = parseFloat (prompt('Digite o primeiro número'))
let num3 = parseFloat (prompt('Digite o segundo número'))

//atv 2
function matSimples(num2,num3){
    const soma = num2 + num3
    const subtracao = num2 - num3
    const multiplicacao = num2 * num3
    console.log('A somas dos número é = ' + soma);
    console.log('A subtração dos número é = ' + subtracao);
    console.log('A multiplicação dos número é = ' + multiplicacao);
    if (num2 === 0){
        console.log('Não da pra dividir por 0')
    } else {
        const divisao = num2 / num3
        console.log('A divisão dos número é = ' + divisao);
    }
}

matSimples(num2,num3);
//fim atv 2


//variavel_03

let contador = 10

while ( contador>=1 ){
    console.log(contador);
    contador --;
}

console.log('THE END!')
//fim atv 3

//variavel_04
let string = prompt ('Digite uma palavra:')

function inverterTexto(string){
    let reversed = string.split('').reverse('').join('');
    console.log(reversed);
}

inverterTexto(string)
//fim atv 4

//variavel_05
let string = prompt ('Digite uma palavra:')

function contarCaracteres(string){
    let numCaracteres = string.length;
    console.log(numCaracteres)
}
contarCaracteres(string)
//fim_05

//variavel_06

const carro = {
    type:'Nissan',
    model:'GTR-R35',
    color:'cinza com faixas azul marinho',
    year:'2007'
}; 

console.log('O carro é da ' + carro.type + ' modelo ' + carro.model + ' nas cores ' + carro.color + ' lançado em Tókio em ' + carro.year)
//fim_06

 //variavel_07

let nome = prompt ('Digite o seu nome');
const mensagem = ('Olá!, ');

function mensagemPersonalizada(nome){
    console.log(mensagem + nome);
}

mensagemPersonalizada(nome)
//fim atv 7

//variavel_08

let num1 = parseFloat (prompt ('Digite o primeiro número')) 
let num2 = parseFloat (prompt ('Digite o segundo número'))  
let num3 = parseFloat (prompt ('Digite o terceiro número')) 

function media(num1, num2, num3){
    let medNum = (num1 + num2 + num3) / 3;
    console.log('A sua média foi: ' + medNum);
}
media(num1, num2, num3)

//fim atv 8

//variavel_09

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i + ' é múltiplo de 3');
    } else {
        console.log(i + ' não é múltiplo de 3');
    }
}

//fim atv 9

//variavel_10

let string = prompt ('Digite uma palavra')

function verificarPalindromo(string){
    let reversed = string.split('').reverse().join('');
    if (string === reversed){
        console.log('A palavra ' + string + ' é políndromo');
    } else {
        console.log('A palavra ' + string + ' não é políndromo');
    }
}
verificarPalindromo(string)
//fim atv 10

//Fim lista 1

//variavel_11
let num = prompt ('Digite um número:')

function verificarSinal(num){
    if (num > 0) {
        console.log('Esse número é positivo')
    } else if (num < 0) {
        console.log('Esse número é negativo')
    } else if (num == 0) {
        console.log('Esse número é zero')
    }
}
verificarSinal(num)
//fim atv 11

//variavel_12

let temp = parseFloat (prompt ('Digite a temperatura:'))

function converterTemperatura(temp){
    const convTemp = (temp * 1.8) + 32
    console.log('A conversão da temperatura: ' + temp + ' para Fahrenheit é: ' + convTemp)
}
converterTemperatura(temp)

//fim atv 12

//variavel_13

let soma = 0;
let num = 1;

while (num < 101) {
    soma += num;
    num++;
}
console.log("A soma de 1 a 100 é igual a: " + soma);

//fim atv 13

//variavel_14

let string = prompt ('Digite uma frase da sua preferencia que contenha a palavra azul:')

function substituirPalavra(string){
    let novaString = string.replace('azul','vermelho');
    console.log(novaString)
}
substituirPalavra(string)

//fim atv 14

//variavel_15

let string = prompt ('Digite uma palavra')

function verificarTamanho(string){
    let qntdLetras = string.length;
    if (qntdLetras > 10) {
        console.log('A palavra: ' + string + ' tem mais de 10 caracteres')
    } else {
        console.log('A palavra: ' + string + ' não tem mais de 10 caracteres')
    }
}
verificarTamanho(string)

//fim atv 15

//variavel_16

let frutas = ["Morango", "Uva", "Banana", "Amora", "Framboesa"];

console.log(frutas[2])

//fim atv 16

//variavel_17

let nome = prompt('Digite seu nome');
let saudacao = 'Bem vindo(a)! ';

function saudacao2(nome, saudacao) {
    console.log(saudacao + nome);
}
saudacao2(nome, saudacao);

//fim atv 17

//variavel_18

let nota = prompt ('Digite a sua nota')

function  verificarAprovacao(nota){
    if (nota>= 6){
        console.log('Você está aprovado')
    } else {
        console.log('Você está reprovado')
    }
}

verificarAprovacao(nota)

//fim atv 18
*/

//variavel_19

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//fim atv 19 