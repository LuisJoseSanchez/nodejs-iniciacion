function inicio() {
  return "<p>Pagina de inicio</p><p>Prueba a ir a la página de <b>contacto</b> o a la página de <b>productos</b> escribiendo estas palabras en la URL.</p>";
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