var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.inicio;
handle["/inicio"] = requestHandlers.inicio;
handle["/contacto"] = requestHandlers.contacto;
handle["/productos"] = requestHandlers.productos;
handle["/saluda"] = requestHandlers.saluda;

server.iniciar(router.route, handle);