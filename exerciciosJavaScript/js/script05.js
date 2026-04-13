let contadora
let soma = 0

for (contadora = 1; contadora <= 500; contadora++) {
    if(contadora % 2 == 0) {
        soma = soma + contadora
    }
}

alert("A soma dos número pares entre o intervalo de 1 e 500 é igual a: " + soma)