var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname, handle);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo<br>");
    response.write("request.url: " + request.url + "<br>");
    response.write("Petición para " + pathname + " recibida.<br>");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;