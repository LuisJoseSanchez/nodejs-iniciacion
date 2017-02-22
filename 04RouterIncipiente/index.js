var server = require("./server");
var router = require("./router");

server.iniciar(router.route);