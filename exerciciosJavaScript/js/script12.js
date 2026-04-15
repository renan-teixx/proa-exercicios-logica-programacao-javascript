//b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

let resposta = parseFloat(prompt("Digite um número para saber a sua tabuada: ")) 
 
for(let contadora = 1; contadora < 10; contadora++){
    alert(resposta + " x " + contadora + " = " + contadora*resposta )
}