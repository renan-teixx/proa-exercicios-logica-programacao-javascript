/* f) Ler duas matrizes do tipo vetor, sendo A com 20 elementos e B com 30 elementos. Construir uma
matriz C, sendo esta a junção das duas outras matrizes. Desta forma, C deverá ter a capacidade de
armazenar 50 elementos. Apresentar a matriz C */

let vetorA = [];
let vetorB = [];
let vetorC = [];

let contadora;

alert("Recebe 20 valores no vetor A e 30 no B. Exibe a junção dos dois vetores em C.")

for (contadora = 0; contadora <= 19; contadora++) {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º elemento do vetor A:")
}

for (contadora = 0; contadora <= 29; contadora++) {
    vetorB[contadora] = prompt("Digite o " + (contadora + 1) + "º elemento do vetor B:")
}

for (contadora = 0; contadora <= 19; contadora++) {
    vetorC[contadora] = vetorA[contadora]
}

for (contadora = 0; contadora <= 29; contadora++) {
    vetorC[20 + contadora] = vetorB[contadora]
}

for (contadora = 0; contadora <= 49; contadora++) {
    console.log("O " + (contadora + 1) + "º número do vetor C é: " + vetorC[contadora])
}