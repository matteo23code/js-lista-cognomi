var domanda = prompt('Qual è il suo cognome?');

var listaOutput = document.getElementById('lista-cognomi');
var listaCognomi = ['basile', 'rossi', 'gennari', 'leoni', 'cavola', 'rinaldi', 'neri'];
listaCognomi.push(domanda);
listaCognomi.sort();
var contenutoPrecedente = domanda + listaCognomi;

for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';
  console.log(listaCognomi.indexOf(domanda));
  console.log(listaCognomi.indexOf('basile')).innerHTML;
  console.log(listaCognomi.indexOf('rossi'));
  console.log(listaCognomi.indexOf('gennari'));
  console.log(listaCognomi.indexOf('leoni'));
  console.log(listaCognomi.indexOf('cavola'));
  console.log(listaCognomi.indexOf('rinaldi'));
}
