var http = require("http");
var url = require("url");

function iniciar() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write("<b>request.url:</b> " + request.url);
    response.write("<br><b>pathname:</b> " + pathname);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;