let fs = require('fs');

function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  let archivo = fs.readFileSync('inicio.html', 'utf-8');
  return archivo;
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");

  return "Pagina de contacto";
}

function saluda(nombre) {
  console.log("Manipulador de petición 'saluda' ha sido llamado.");
  return "Hola " + nombre;
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.saluda = saluda;