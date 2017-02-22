var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(pathname, handle);
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write("<br>Ve a <b>http://localhost:8888/inicio</b> o a <b>http://localhost:8888/contacto</b> y mira el terminal.");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;