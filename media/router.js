function route(pathname, handle, data) {
  if (typeof handle[pathname] == 'function') {
    return handle[pathname](data);
  } else {
    return "404 Pagina no encontrada: " + pathname;
  }
 
}

exports.route = route;