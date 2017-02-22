var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
  response.write("¡Hola mundo!");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Servidor iniciado en http://localhost:8888");
