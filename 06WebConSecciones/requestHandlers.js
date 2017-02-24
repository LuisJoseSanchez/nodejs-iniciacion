function inicio() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  return "Pagina de inicio";
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return "Pagina de contacto";
}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  return "Subir";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.subir = subir;