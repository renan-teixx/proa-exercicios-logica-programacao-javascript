let nome = prompt("Digite o seu nome: ")
let nota = parseFloat(prompt("Digite a sua nota final: "))
let faltas = parseInt(prompt("Digite quantas faltas você tem: "))

//Decisão simples - if, else
if (faltas > 20) {
    situacao = "Reprovado por falta"
} else {

    //Decisão encadeada - if, else if, else
    if (nota >= 7) {
        situacao = "Aprovado"
    } else if (nota >= 5) {
        situacao = "Recuperação"
    } else {
        situacao = "Reprovado por nota"
    }
}

//Decisão composta - if, else
if (situacao === "Aprovado") {
    alert("Aluno: " + nome +
          "\nNota: " + nota +
          "\nFaltas: " + faltas +
          "\nSituação: " + situacao +
          "\nParabéns!")
} else {
    alert("Aluno: " + nome +
          "\nNota: " + nota +
          "\nFaltas: " + faltas +
          "\nSituação: " + situacao)
}


 