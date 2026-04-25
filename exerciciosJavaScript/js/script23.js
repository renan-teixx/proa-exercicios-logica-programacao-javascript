/* g) Ler 20 elementos de uma matriz A tipo vetor e construir uma matriz B de mesma dimensão com os
mesmo elementos da matriz A, sendo que deverão estar invertidos. Ou seja, o primeiro elemento de
A passa a ser o último de B, o segundo elemento de A passa a ser o penúltimo elemento de B e
assim por diante. Apresentar as matrizes A e B lado a lado. */

const vetorA = [];
const vetorB = [];
let contadoraA;
let contadoraB;

alert("Recebe 20 valores no vetor A e mostra no vetor B na posição invertida. Ex: 1º item de A é o 20º de B, 2º de A é o 19º de B...")

contadoraB = 19
for (contadoraA = 0; contadoraA <= 19; contadoraA++) {
    vetorA[contadoraA] = prompt("Digite o " + (contadoraA + 1) + "º valor do vetor: ")
    vetorB[contadoraB] = vetorA[contadoraA]
    contadoraB -= 1
}

contadoraB = 19
for (contadoraA = 0; contadoraA <= 19; contadoraA++) {
    console.log("O " + (contadoraA + 1) + "º item do vetor A é: " + vetorA[contadoraA])
    console.log("O " + (contadoraB + 1) + "º item do vetor B é: " + vetorB[contadoraB])
    contadoraB -= 1
}






