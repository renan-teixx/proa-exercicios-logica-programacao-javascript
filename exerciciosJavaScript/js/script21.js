/* e) Ler duas matrizes A e B do tipo vetor com 15 elementos cada. Construir uma matriz C, sendo esta a
junção das duas outras matrizes. Desta forma, C deverá ter o dobro de elementos, ou seja, 30.
Apresentar a matriz C. */

let vetorA = [];
let vetorB = [];
let vetorC = [];

let contadora;

alert("Recebe 15 valores no vetor A e B. Exibe a junção dos dois vetores em C.")

for (contadora = 0; contadora <= 14; contadora++) {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º elemento do vetor A:")
}

for (contadora = 0; contadora <= 14; contadora++) {
    vetorB[contadora] = prompt("Digite o " + (contadora + 1) + "º elemento do vetor B:")
}

for (contadora = 0; contadora <= 14; contadora++) {
    vetorC[contadora] = vetorA[contadora]
}

for (contadora = 0; contadora <= 14; contadora++) {
    vetorC[15 + contadora] = vetorB[contadora]
}

for (contadora = 0; contadora <= 29; contadora++) {
    console.log("O " + (contadora + 1) + "º número do vetor C é: " + vetorC[contadora])
}