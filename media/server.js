var http = require("http");
var url = require("url");
var querystring = require('querystring');


function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var cadenaDatos = request.url.split('?')[1];
    var x1 = parseInt(querystring.parse(cadenaDatos)["x1"]);
    var x2 = parseInt(querystring.parse(cadenaDatos)["x2"]);
    var x3 = parseInt(querystring.parse(cadenaDatos)["x3"]);
    var data = [x1, x2, x3];
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(route(pathname, handle, data));
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;