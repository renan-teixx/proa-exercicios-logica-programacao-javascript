/* i) Ler 15 elementos reais para uma matriz A de uma dimensão do tipo vetor. Construir uma matriz B
de mesmo tipo e dimensão, observando a seguinte lei de formação: “Todo elemento da matriz A
que possuir índice par deverá ter seu elemento dividido por 2; caso contrário, o elemento da matriz
A deverá ser multiplicado por 1.5”. Apresentar as matrizes A e B lado a lado. */

const vetorA = [];
const vetorB = [];
let contadora;

alert("Ler 15 elementos reais para uma matriz A de uma dimensão do tipo vetor. Construir uma matriz B de mesmo tipo e dimensão, observando a seguinte lei de formação: “Todo elemento da matriz A que possuir índice par deverá ter seu elemento dividido por 2; caso contrário, o elemento da matriz A deverá ser multiplicado por 1.5”. Apresentar as matrizes A e B lado a lado.")

for (contadora = 0; contadora <= 14; contadora++) {
    vetorA[contadora] = prompt("Digite o " + (contadora + 1) + "º item do vetor A: ")
    if (vetorA[contadora] % 2 == 0) {
        vetorB[contadora] = vetorA[contadora] / 2
    } else {
        vetorB[contadora] = vetorA[contadora] * 1.5
    }
}

console.log("MATRIZ A:")
for (contadora = 0; contadora <= 14; contadora++) {
    console.log((contadora + 1) + "º número: " + vetorA[contadora])
}

console.log("MATRIZ B:")
for (contadora = 0; contadora <= 14; contadora++) {
    console.log((contadora + 1) + "º número: " + vetorB[contadora])
}
