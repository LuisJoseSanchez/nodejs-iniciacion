function route(pathname, handle) {
  handle[pathname]();
}

exports.route = route;