/* c) Ler duas matrizes A e B do tipo vetor com 20 elementos. Construir uma matriz C, onde cada
elemento de C é a subtração do elemento correspondente de A com B. Apresentar a matriz C. */

let vetorA = [];
let vetorB = [];
let vetorC = [];
let indice;

alert("Mostra a matriz C. Ela é a subtração dos números da matriz A, com a B.")

for(indice = 0; indice <= 19; indice++){
    vetorA[indice] = prompt("Digite o " +(indice+1)+ "º valor da matriz A:")
}

for(indice = 0; indice <= 19; indice++){
    vetorB[indice] = prompt("Digite o " +(indice+1)+ "º valor da matriz B:")
}

for(indice = 0; indice <= 19; indice++){
    vetorC[indice] = vetorA[indice] - vetorB[indice]
    console.log("O " + (indice+1) +"º número do vetor C é: " + vetorC [indice])
}


