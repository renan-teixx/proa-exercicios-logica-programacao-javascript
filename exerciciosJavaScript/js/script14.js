// a) ler 10 exercícios de uma matriz tipo vetor e aprensentá-los.

let vetor = [];

for(let contadora = 1; contadora <= 10; contadora++){
    vetor[contadora] = prompt("Digite o " + contadora + "º valor do vetor:");
}

for(let contadora = 1; contadora <= 10; contadora++){
    console.log(contadora + "º valor: " + vetor[contadora])
}