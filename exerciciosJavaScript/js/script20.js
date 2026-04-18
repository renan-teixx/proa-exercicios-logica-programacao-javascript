/* d) Ler 15 elementos de uma matriz tipo vetor. Construir uma matriz B de mesmo tipo, observando a
seguintes lei de formação: “Todo elemento de B deverá ser o quadrado do elemento de A
correspondente”. Apresentar as matrizes A e B. */

let vetorA = [];
let vetorB = [];
let indice;

alert("Mostra a matriz A, e a matriz B, sendo B o quadrado de cada elemento de A.")

for (indice = 0; indice <= 14; indice++) {
    vetorA[indice] = prompt("Digite o " + (indice + 1) + "º valor da matriz A:")
}

for (indice = 0; indice <= 14; indice++) {
    vetorB[indice] = vetorA[indice] ** 2
    console.log("O " + (indice + 1) + "º elemento de A é: " + vetorA[indice])
}

for (indice = 0; indice <= 14; indice++) {
    console.log("O " + (indice + 1) + "º elemento de B é: " + vetorB[indice])
}