

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

//variavel_19

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//fim atv 19

//variavel_20

let string = prompt('Digite uma palavra: ')
let i = 0
let vogais = 'aAeEiIoOuU'

function contarVogais(string) {
    for (let letra of string) {
        if (vogais.includes(letra)) {
            i++
        }
    }
    console.log(i + ' vogais')
}
contarVogais(string)

//fim atv 20

//variavel_21

const num1 = parseFloat(prompt('Digite seu primeiro número: '));
const num2 = parseFloat(prompt('Digite seu segundo número: '));
const num3 = parseFloat(prompt('Digite seu terceiro número: '));
const num4 = parseFloat(prompt('Digite seu quarto número: '));

let notas = [num1, num2, num3, num4];

let somaNotas = 0;

function somarArray(notas) {
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    console.log(somaNotas)  
}
somarArray(notas)

//fim atv 21

//variavel_22

let num = parseFloat (prompt ('Digite um número'))

function dobrarNumero(num){
    let numDobro = num + num
    console.log('O dobro do número digitado é: ' + numDobro)
}
dobrarNumero(num)

//fim atv 22

//variavel_23

let num = 2

while (num <= 20) {
    num++
    if (num % 2 === 0) {
        console.log(num)
    }
}

//fim atv 23

//variavel_24

let string = prompt ('Digite uma palavra')

function capitalizar(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(capitalizar(string))
capitalizar(string)

//fim atv 24

//variavel_25

let ano = prompt('Digite um ano: ');

function anoBissexto(ano) {
    if (ano % 4 === 0) {
        console.log(ano + ' é um ano Bissexto');
    } else {
        console.log( ano + ' não é um ano Bissexto');
    }
}
anoBissexto(ano)

//fim atv 25

//fim lista 2

/* Exercício 1
Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. 
A cada novo número digitado, o valor deve ser acumulado. 
Ao final, exiba o resultado total da soma.

//variavel_01
let num = parseFloat (prompt('Quantos números você deseja somar?'));
let soma = 0;

    for (let i = 0; i < num; i++) {
        let pergunta = parseFloat (prompt ('Digite um número:'));
        soma = pergunta + soma;
    }
console.log('A soma dos números é: ' + soma)

//fim atv 01

/* Exercício 2
Simule uma contagem regressiva para o lançamento de um foguete, 
partindo de 10 até 0, e ao final exiba a mensagem "Lançamento!".

//variavel_02
let intervalo = setInterval(lancamento, 1000)
let contagem = 10;

function lancamento() {
    if (contagem >= 0) {
        console.log(contagem);
        contagem--;
    } else {
        console.log('Lançamento!');
        clearInterval(intervalo);
    }
}
lancamento();

//fim atv 02
*/

/*Exercicio 3
Crie um algoritmo que solicite o ganho bruto e os gastos mensais de uma empresa durante os 12 meses do ano.
Ao final, exiba:  Total de ganhos / Total de gastos / Saldo final  E uma mensagem informando se a empresa 
teve lucro ou prejuízo no ano


//variavel_03
let ganho1 = parseFloat(prompt('Digite o ganho bruto de Janeiro: '));
let ganho2 = parseFloat(prompt('Digite o ganho bruto de Fevereiro: '));
let ganho3 = parseFloat(prompt('Digite o ganho bruto de Março: '));
let ganho4 = parseFloat(prompt('Digite o ganho bruto de Abril: '));
let ganho5 = parseFloat(prompt('Digite o ganho bruto de Maio: '));
let ganho6 = parseFloat(prompt('Digite o ganho bruto de Junho: '));
let ganho7 = parseFloat(prompt('Digite o ganho bruto de Julho: '));
let ganho8 = parseFloat(prompt('Digite o ganho bruto de Agosto: '));
let ganho9 = parseFloat(prompt('Digite o ganho bruto de Setembro: '));
let ganho10 = parseFloat(prompt('Digite o ganho bruto de Outubro: '));
let ganho11 = parseFloat(prompt('Digite o ganho bruto de Novembro: '));
let ganho12 = parseFloat(prompt('Digite o ganho bruto de Dezembro: '));

let ganhoSoma = parseFloat(ganho1 + ganho2 + ganho3 + ganho4 + ganho5 + ganho6 
+ ganho7 + ganho8 + ganho9 + ganho10 + ganho11 + ganho12);

let gasto1 = parseFloat(prompt('Digite o gasto bruto de Janeiro: '));
let gasto2 = parseFloat(prompt('Digite o gasto bruto de Fevereiro: '));
let gasto3 = parseFloat(prompt('Digite o gasto bruto de Março: '));
let gasto4 = parseFloat(prompt('Digite o gasto bruto de Abril: '));
let gasto5 = parseFloat(prompt('Digite o gasto bruto de Maio: '));
let gasto6 = parseFloat(prompt('Digite o gasto bruto de Junho: '));
let gasto7 = parseFloat(prompt('Digite o gasto bruto de Julho: '));
let gasto8 = parseFloat(prompt('Digite o gasto bruto de Agosto: '));
let gasto9 = parseFloat(prompt('Digite o gasto bruto de Setembro: '));
let gasto10 = parseFloat(prompt('Digite o gasto bruto de Outubro: '));
let gasto11 = parseFloat(prompt('Digite o gasto bruto de Novembro: '));
let gasto12 = parseFloat(prompt('Digite o gasto bruto de Dezembro: '));

let gastoSoma = parseFloat(gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6 
+ gasto7 + gasto8 + gasto9 + gasto10 + gasto11 + gasto12);

let saldo = ganhoSoma - gastoSoma
console.log('O saldo da empresa foi de: ' + saldo)

if (saldo < 0) {
    console.log('A empresa teve prejuízo.')
} else {
    console.log('A empresa teve lucro!')
}*/

//fim atv 03

/* Exercicio 4
Crie um algoritmo que solicite ao usuário quatro valores inteiros
e os exiba em ordem decrescente.  
Dica: pesquise sobre o uso de arrays e a função sort().

//variavel_04
let numeros = [];

for (let i = 0; i < 4; i++) {
  let valor = parseInt(prompt("Digite um número inteiro:"));
  numeros.push(valor);
}

numeros.sort((a, b) => b - a);

console.log('Ordem decrescente: ' + numeros.join(', '));
*/
//fim atv 04

/* Exercício 5
Crie um algoritmo que peça um número ao usuário. Se o número for par,
transforme-o em ímpar. Se for ímpar, transforme-o em par.  
Dica: utilize o operador % para identificar se o número é par ou ímpar.

//variavel_05
let num = parseFloat(prompt('Digite um número: '))

if (num % 2 === 0) {
    console.log('Este número é ímpar.')
} else {
    console.log('Este número é par.')
}*/
//fim atv 05

/* Exercício 6
Crie um algoritmo que leia uma letra digitada pelo usuário e informe 
se ela é uma vogal ou uma consoante.  
Dica: utilize if ou switch e arrays para armazenar as vogais.

//variavel_06
let letra = prompt('Digite uma letra:').toLowerCase();
let vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(letra)) {
    console.log('É uma vogal.');
} else {
    console.log('É uma consoante.');
}*/
//fim atv 06  

/* Exercício 7
Desenvolva um algoritmo para uma picoleteria. 
Ao selecionar um sabor, o programa deve exibir o valor do picolé. 
Os sabores e preços são:  
Chocolate: R$1,50  
Morango: R$2,50  
Creme: R$2,50  
Manga: R$3,20  
Melancia: R$3,40  
Vanilla Ice: R$3,00  
Céu Azul: R$3,60  
Brownie: R$4,00  
Hawaiano: R$5,00 

//variavel_07
let sabor = prompt('Digite o sabor do picolé:').toLowerCase();

let tabelaPrecos = {
  'chocolate': 1.50,
  'morango': 2.50,
  'creme': 2.50,
  'manga': 3.20,
  'melancia': 3.40,
  'vanilla ice': 3.00,
  'céu azul': 3.60,
  'brownie': 4.00,
  'hawaiano': 5.00
};

if (sabor in tabelaPrecos) {
  console.log('O valor do picolé de ' + sabor + ' é R$' + tabelaPrecos[sabor].toFixed(2));
} else {
  console.log('Sabor não encontrado.');
}*/
//fim atv 07

/* Exercício 8
Crie um algoritmo que sorteie um número aleatório de 1 a 100 
e peça para o usuário tentar adivinhá-lo.
O programa deve informar se o palpite está acima ou abaixo do valor 
sorteado até que ele acerte.  
Dica: use Math.random() e Math.floor().

//variavel_08
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
  palpite = parseInt(prompt('Tente adivinhar o número entre 1 e 100:'));

  if (palpite > numeroSecreto) {
    console.log('O número é menor.');
  } else if (palpite < numeroSecreto) {
    console.log('O número é maior.');
  } else {
    console.log('Parabéns! Você acertou!');
  }

} while (palpite !== numeroSecreto)
*/
//fim atv 08

/* Exercício 9
Desenvolva um algoritmo que peça ao usuário para digitar uma frase e, ao final, 
exiba quantas vogais existem nessa frase.


//variavel_09
let frase = prompt('Digite uma frase:');
let vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i].toLowerCase())) {
    contador++;
  }
}

console.log('Quantidade de vogais:', contador);
*/
//fim atv 09


/* Exercício 10
Crie um programa que solicite uma senha ao usuário. 
A senha deve conter no mínimo 8 caracteres, com pelo menos uma 
letra maiúscula, uma minúscula e um número. 
Ao final, informe se a senha é válida ou não.

//variavel_10
let senha = prompt('Digite a senha:');
let maiuscula = /[A-Z]/;
let minuscula = /[a-z]/;
let numero = /[0-9]/;
let valido = false;

if (senha.length >= 8 && maiuscula.test(senha) && minuscula.test(senha) && numero.test(senha)) {
  valido = true;
}

if (valido) {
  console.log('Senha válida!');
} else {
  console.log('Senha inválida! A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.');
}*/
//fim atv 10

/* Exercício 11
Peça ao usuário para digitar um número e mostre a 
tabuada desse número de 1 a 10.  
Dica: utilize laços de repetição para construir a tabuada.

//variavel_11
let numero = parseFloat(prompt('Digite um número:'));

for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}*/
//fim atv 11

/* Exercício 12
Crie um algoritmo que permita ao usuário cadastrar produtos 
informando o nome e o preço. Após o cadastro de pelo menos 5 produtos, 
exiba a lista de produtos com seus respectivos preços 
e o valor total do carrinho.  
Dica: use arrays e objetos.*/

//variavel_12
let produtos = [];
let total = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt('Digite o nome do produto:');
    let preco = parseFloat(prompt('Digite o preço do produto:'));
    produtos.push({ nome, preco });
    total += preco;
}
  
console.log('Lista de produtos:');
for (let produto of produtos) {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
}
  
console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);
  
//fim atv 12
//fim lista 3
