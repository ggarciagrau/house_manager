const { Plates } = require("../../common/orm");
const platesDao = {}

platesDao.create = (plate) => Plates.create(plate);

platesDao.readAll = () => Plates.findAll();

module.exports = platesDao;