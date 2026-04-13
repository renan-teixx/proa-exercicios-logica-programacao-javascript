alert("Mostra o mês usando vetor.");

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

const numero = parseInt(prompt("Digite um número de 1 a 12 para saber o mês correspondente:"));

if (numero >= 1 && numero <= 12) {
  alert(meses[numero - 1]);
} else {
  alert("Número não corresponde a um mês existente.");
}
