var domanda = prompt('Qual è il suo cognome?');

var listaOutput = document.getElementById('lista-cognomi');
var listaCognomi = ['basile', 'rossi', 'gennari', 'leoni', 'cavola', 'rinaldi', 'neri']
listaCognomi.push(domanda);
var contenutoPrecedente;

for (var i = 0; i < listaCognomi.length; i++) {
     console.log(listaCognomi[i]);
  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';
  console.log(listaCognomi.indexOf(domanda 1));
}
