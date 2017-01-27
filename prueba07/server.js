var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(route(pathname, handle));
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;