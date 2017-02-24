function route(pathname, handle) {
  if (typeof handle[pathname] == 'function') {
    return handle[pathname]();
  } else {
    return "404 Pagina no encontrada: " + pathname;
  }
 
}

exports.route = route;