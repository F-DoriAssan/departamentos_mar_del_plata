const service = require("../services/usersService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.send(rows);
};

const show = async (req, res) => {
  //const rows = await service.findOne(req.params);
  res.render(views);
};

const store = async (req, res) => {
  const result = await service.store(req.body);
  res.send(result);
};

module.exports = {
  index,
  show,
  store
};