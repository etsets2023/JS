const min = 1;

const max = 100;

const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNum)

var escolhaNumero = prompt('Adivinhe o número! Escolha um número entre 0 e 100')

while (escolhaNumero != randomNum) {
    escolhaNumero=prompt('Tente outro número')
}
alert('Parabéns você acertou o número!!')

/*LAÇO DE REPETIÇÃO "WHILE": ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO
NO INÍCIO:
var c = 1 

while (c <= 10) {
   console.log('Passo ' + c)
    c++ // c = c + 1
}
----------------------------*/


/*LAÇO DE REPETIÇÃO "DO...WHILE": ESTRUTURA DE REPETIÇÃO COM TESTE 
LÓGICO NO FINAL:
var c = 1 

do {
   console.log('Passo ' + c)
    c++ // c = c + 1
} while (c <= 10) 
-------------------------------*/


/*LAÇO DE REPETIÇÃO "FOR":
for (inicio; teste; incr) {
}
*/
/*
var c = 1
for (var c=1; c<=10; c++) {
    console.log('Passo ' + c)
}

*/

/*CONDIÇÕES IF ELSE
if (condição) {
    true
} else {
    false
}
*/


