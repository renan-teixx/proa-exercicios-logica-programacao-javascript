/* Ler duas matrizes A e B de uma dimensão com 6 elementos. A matriz A deverá aceitar apenas a
entrada de valores pares, enquanto a matriz B deverá aceitar apenas a entrada de valores ímpares.
A entrada das matrizes deverá ser validada pelo programa e não pelo usuário. Construir uma matriz
C de forma que a matriz C seja a junção das matrizes A e B, de modo que a matriz C contenha 12
elementos. Apresentar a matriz C. */

const vetorA = [];
const vetorB = [];
const vetorC = [];
let contadora = 0;

alert("Ler duas matrizes A e B de uma dimensão com 6 elementos. A matriz A deverá aceitar apenas a entrada de valores pares, enquanto a matriz B deverá aceitar apenas a entrada de valores ímpares. A entrada das matrizes deverá ser validada pelo programa e não pelo usuário. Construir uma matriz C de forma que a matriz C seja a junção das matrizes A e B, de modo que a matriz C contenha 12 elementos. Apresentar a matriz C.")

do {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor A, o valor deve ser PAR para continuar: ")
    if (vetorA[contadora] % 2 == 0) {
        contadora += 1
    } else {
        alert("Você não digitou um valor par!")
    }
} while (contadora <= 5)

contadora = 0;
do {
    vetorB[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor B, o valor deve ser ÍMPAR para continuar: ")
    if (vetorB[contadora] % 2 != 0) {
        contadora += 1
    } else {
        alert("Você não digitou um valor ímpar!")
    }
} while (contadora <= 5)

for (contadora = 0; contadora <= 5; contadora++) {
    vetorC[contadora] = vetorA[contadora]
}

for (contadora = 0; contadora <= 5; contadora++) {
    vetorC[6 + contadora] = vetorB[contadora]
}

for (contadora = 0; contadora <= 11; contadora++) {
    console.log("O " + (contadora + 1) + "º valor da matriz C é: " + vetorC[contadora])
}