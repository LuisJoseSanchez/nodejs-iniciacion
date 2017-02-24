let fs = require('fs');

function inicio() {
  let archivo = fs.readFileSync('inicio.html', 'utf-8');
  return archivo;
}

function contacto() {
  return "Pagina de contacto";
}

function productos() {
  return "Pagina de productos";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.productos = productos;