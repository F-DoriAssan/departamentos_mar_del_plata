module.exports = (req, res, next) => {
  res.locals.active = req.path.split("/")[1]; // [0] Estara vacio al arrancar la ruta en 0 '/'
  next();
};
