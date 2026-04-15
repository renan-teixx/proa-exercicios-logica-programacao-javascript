/* d) Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de
trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de
trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro
quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos),
no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8
grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o) quadro. Utilize variáveis do
tipo real como acumuladores. */

alert("Mostra o somatório de grãos de trigo com crescimento exponencial nas casas de um tabuleiro de xadrez.")

let graos = 1
let quadro = 1
let soma = 0

do {
    alert("O quadro atual é: " + quadro)
    alert("A quantidade de grãos é: " + graos)
    
    soma = soma + graos
    graos = graos * 2
    quadro++
    
    alert("A soma atualmente é de: " + soma)
} while (quadro <= 64);