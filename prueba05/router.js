function route(pathname, handle) {
  handle[pathname]();
  //console.log("A punto de rutear una peticion para " + pathname);
}

exports.route = route;