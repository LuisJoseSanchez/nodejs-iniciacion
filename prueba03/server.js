var http = require("http");
var url = require("url");
//var util = require('util');

function iniciar() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    //console.log("request: " + util.inspect(request));
    console.log("request.url: " + request.url);
    console.log("Petición para " + pathname + " recibida.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;