/* Exercícios extra que peguei da internet: 
Elabore um programa em JavaScript que solicite ao usuário a entrada de 10 números reais e os armazene em um vetor, utilizando uma constante para definir o tamanho desse vetor. O programa deve usar o laço de repetição for para realizar a leitura dos valores, o laço while para calcular a soma de todos os elementos armazenados e o laço do...while para percorrer o vetor e classificar os números em positivos, negativos ou iguais a zero, utilizando estruturas condicionais if, else if e else. Ao final, o programa deve exibir os valores do vetor, a soma total dos números informados e a quantidade de valores positivos, negativos e zeros.
*/

const TAM = 10;

const numeros = [];

let contadora = 0;
let soma = 0;
let positivos = 0;
let negativos = 0;
let zeros = 0;

for (contadora = 0; contadora < TAM; contadora++) {
    numeros[contadora] = parseFloat(prompt("Digite o " + (contadora + 1) + "º número:"));
}

contadora = 0;
while (contadora < TAM) {
    soma += numeros[contadora];
    contadora++;
}

contadora = 0;
do {
    if (numeros[contadora] > 0) {
        positivos++;
    } else if (numeros[contadora] < 0) {
        negativos++;
    } else {
        zeros++;
    }
    contadora++;
} while (contadora < TAM);

console.log("Vetor:", numeros);
console.log("Soma total:", soma);
console.log("Positivos:", positivos);
console.log("Negativos:", negativos);
console.log("Zeros:", zeros);