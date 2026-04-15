// a) Apresentar os quadrados dos números inteiros de 15 a 200.

alert("a) Apresentar os quadrados dos números inteiros de 15 a 200.")

let numero = 15

do {
    alert("O quadrado de " + numero + " é: "+ numero**2)
    numero = numero + 1
} while (numero <= 200);