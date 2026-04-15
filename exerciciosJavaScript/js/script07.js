alert("Mostra qual mês corresponde ao número digitado usando o Switch Case.")

let numero = parseInt(prompt("Digite um número de entre 1 e 12 para saber o mês correspondente: "))

switch (numero) {
    case 1:
        alert("Janeiro")
        break;
    case 2:
        alert("Feveiro")
        break;
    case 3:
        alert("Março")
        break;
    case 4:
        alert("Abril")
        break;
    case 5:
        alert("Maio")
        break;
    case 6:
        alert("Junho")
        break;
    case 7:
        alert("Julho")
        break;
    case 8:
        alert("Agosto")
        break;
    case 9:
        alert("Setembro")
        break;
    case 10:
        alert("Outubro")
        break;
    case 11:
        alert("Novembro")
        break;
    case 12:
        alert("Dezembro")
        break;
    default:
        alert("O número não corresponde a nenhum mês.")
}