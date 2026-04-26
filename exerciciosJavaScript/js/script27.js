/* 6.5 Exercícios extras 1) 
a) Ler duas matrizes A e B de uma dimensão com 12 elementos. A matriz A deverá aceitar
apenas a entrada de valores que sejam divisíveis por 2 ou 3, enquanto a matriz B deverá
aceitar apenas a entrada de valores que não sejam múltiplos de 5. A entrada das matrizes
deverá ser validada pelo programa e não pelo usuário. Construir uma matriz C de forma que
a matriz C seja a junção das matrizes A e B, e de forma que a matriz C contenha 24
elementos. Apresentar a matriz C. */

const vetorA = [];
const vetorB = [];
const vetorC = [];
let contadora = 0;

do {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor A. Digite apenas valores que são divisíveis por 2 ou 3.")
    if (vetorA[contadora] % 2 == 0 || vetorA[contadora] % 3 == 0) {
        contadora += 1
    } else {
        alert("O número digitado não é divisível por 2 e nem por 3.")
    }
} while (contadora <= 11)

contadora = 0;
do {
    vetorB[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor B. Digite apenas valores que não sejam múltiplos de 5.")
    if (vetorB[contadora] % 5 != 0) {
        contadora += 1
    } else {
        alert("O número digitado é múltiplo de 5.")
    }
} while (contadora <= 11)

for (contadora = 0; contadora <= 11; contadora++) {
    vetorC[contadora] = vetorA[contadora]
}

for (contadora = 0; contadora <= 11; contadora++) {
    vetorC[12 + contadora] = vetorB[contadora]
}

for (contadora = 0; contadora <= 23; contadora++) {
    console.log("O " + (contadora + 1) + "º valor do vetor C é: " + vetorC[contadora]) 
}


