/* 6.5 Exercícios extras 1)
b) Ler uma matriz A do tipo vetor com 15 elementos. Construir uma matriz B de mesmo tipo, sendo
que cada elemento da matriz B seja o fatorial do elemento correspondente da matriz A. Apresentar
as matrizes A e B. */

const vetorA = [];
const vetorB = [];
let contadora;

let resultado = 1;

for (contadora = 0; contadora <= 14; contadora++) {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º valor do vetor A: ")
}

for (contadora = 0; contadora <= 14; contadora++) {
    let fatorial = 1;

    for (let i = 1; i <= vetorA[contadora]; i++) {
        fatorial *= i;
    }

    vetorB[contadora] = fatorial
}

console.log("Vetor A:");
for (let contadora = 0; contadora <= 14; contadora++) {
    console.log(vetorA[contadora]);
}

console.log("Vetor B (fatoriais):");
for (let contadora = 0; contadora <= 14; contadora++) {
    console.log(vetorB[contadora]);
}




