

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
*/

//variavel_04
let string = prompt ('Digite uma palavra')

function inverterTexto(string){
    let reversed = string.split('').reverse('').join('');
    console.log(reversed);
}

inverterTexto(string)
//fim atv 4