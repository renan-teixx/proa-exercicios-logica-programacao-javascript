/* h) Ler três matrizes (A, B e C) de uma dimensão com 5 elementos cada. Construir uma matriz D,
sendo esta a junção das três outras matrizes. Desta forma D deverá ter o triplo de elementos, ou
seja, 15. Apresentar os elementos da matriz D. */

const vetorA = [];
const vetorB = [];
const vetorC = [];
const vetorD = [];
let contadora;

alert("Lê três matrizes (A, B e C) de uma dimensão com 5 elementos cada. Construir uma matriz D, sendo esta a junção das três outras matrizes. Desta forma D deverá ter o triplo de elementos, ou seja, 15. Apresentar os elementos da matriz D.")

for (contadora = 0; contadora <= 4; contadora++) {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor A: ")
    vetorB[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor B: ")
    vetorC[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor C: ")
}

for (contadora = 0; contadora <= 4; contadora++) {
    vetorD[contadora] = vetorA[contadora]
}

for (contadora = 0; contadora <= 4; contadora++) {
    vetorD[5 + contadora] = vetorB[contadora]
}

for (contadora = 0; contadora <= 4; contadora++) {
    vetorD[10 + contadora] = vetorC[contadora]
}

for (contadora = 0; contadora <= 14; contadora++) {
    console.log("O " + (contadora + 1) + "º item do vetor D é: " + vetorD[contadora])
}