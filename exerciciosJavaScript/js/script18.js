/* b) Ler 8 elementos em uma matriz A tipo vetor. Construir uma matriz B de mesma dimensão com os
elementos da matriz A multiplicados por 3. O elemento B[i] deverá ser implicado pelo elemento
A[i]*3, o elemento B[2] implicado pelo elemento A[2]*3 e assim por diante, até 8. Apresentar o vetor
B. */
alert("Mostra matriz A e B. B = cada elemento de A, multiplicado por 3.")

let vetorA = [];
let vetorB = [];
let indice;

for(indice = 0; indice <= 7; indice++){
    vetorA [indice] = prompt("Digite o " + (indice+1) + "º número da matriz.")
}

for(indice = 0; indice <= 7; indice++){
    vetorB [indice] = vetorA [indice] * 3
    console.log("O " + (indice+1) +"º número do vetor A é: " + vetorA [indice])
}

for(indice = 0; indice <= 7; indice++){
    console.log("O " + (indice+1) +"º número do vetor B é: " + vetorB [indice])
}