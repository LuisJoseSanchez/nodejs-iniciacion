var http = require("http");
var url = require("url");
var querystring = require('querystring');

function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var cadenaDatos = request.url.split('?')[1];
    var nombre = querystring.parse(cadenaDatos)["nombre"];
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write(route(pathname, handle, nombre));
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;