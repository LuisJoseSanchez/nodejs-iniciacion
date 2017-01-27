let fs = require('fs');

function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  let archivo = fs.readFileSync('formulario.html', 'utf-8');
  return archivo;
}

function media(numeros) {
  console.log(numeros);
  var m = (numeros[0] + numeros[1] + numeros[2]) / 3;
  console.log("Media:" + m);
  return "Media:" + m;
}

exports.inicio = inicio;
exports.media = media;