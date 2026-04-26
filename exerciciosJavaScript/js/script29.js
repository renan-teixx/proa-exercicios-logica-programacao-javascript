/* 6.5 Exercícios extras 1) 
c) Ler 5 elementos (valores reais) para temperaturas em graus Celsius em uma matriz A de uma
dimensão do tipo vetor. Construir uma matriz B de mesmo tipo e dimensão, em que cada elemento
da matriz B deverá ser a conversão da temperatura em graus Fahrenheit do elemento
correspondente da matriz A. Apresentar as matrizes A e B lado a lado. A fórmula de conversão é (0 °C × 9/5) + 32 = 32 °F 
sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

const vetorA = [];
const vetorB = [];
let contadora;

for (contadora = 0; contadora <= 4; contadora++) {
    vetorA[contadora] = parseFloat(prompt("Digite a " + (contadora + 1) + "ª temperatura em Celsius para a conversão em Fahrenheit:"))
}

for (contadora = 0; contadora <= 4; contadora++) {
    vetorB[contadora] = (vetorA[contadora] * 9 / 5) + 32
}

for (contadora = 0; contadora <= 4; contadora++) { 
    console.log(vetorA[contadora] + "ºC correspondem a: " + vetorB[contadora] + "ºF")
}
